package push

import (
	"context"
	"database/sql"
	"fmt"
	"log"
	"time"

	"github.com/bufbuild/connect-go"

	"github.com/LarsDepuydt/peno-entrepreneurship-3d-oclusion/cmd/help_datastructures"
	threedoclusionv1 "github.com/LarsDepuydt/peno-entrepreneurship-3d-oclusion/gen/proto/threedoclusion/v1"
)

func SendToVR(req *connect.Request[threedoclusionv1.SendVRRequest], redirectVRChannels *help_datastructures.MapChannels) (*connect.Response[threedoclusionv1.SendVRResponse], error) {
	log.Println("Request headers: ", req.Header())

	// TO DO: Check if clientID and scanID are valid with database
	response := help_datastructures.WaitingChannelResponse{Redirect: true, ScanId: req.Msg.ScanId}

	redirectVRChannel := redirectVRChannels.GetChannel(req.Msg.ClientId)
	redirectVRChannel <- response // Send response over the channel

	res := connect.NewResponse(&threedoclusionv1.SendVRResponse{
		Feedback: "Succesfully sent request to redirect waiting VR headset",
	})
	res.Header().Set("SendVR-Version", "v1")

	return res, nil
}

func GetWaitingResponse(req *connect.Request[threedoclusionv1.WaitingRequest], stream *connect.ServerStream[threedoclusionv1.WaitingResponse], redirectVRChannels *help_datastructures.MapChannels) error {
	log.Println("Request headers: ", req.Header())

	redirectVRChannel := redirectVRChannels.GetChannel(req.Msg.UniqueCode) // Use clientId to get channel

	select { // Non blocking receive
	case response := <-redirectVRChannel:
		res := &threedoclusionv1.WaitingResponse{
			Redirect: response.Redirect,
			Url:      fmt.Sprintf("/start-vr?scanID=%d", response.ScanId),
		} // start-vr
		redirectVRChannels.ReleaseChannel(req.Msg.UniqueCode) // Redirect instruction has been sent, delete channel
		if err := stream.Send(res); err != nil {
			return err
		}
		return nil
	}
}


func SendMenuOption(req *connect.Request[threedoclusionv1.SendMenuOptionRequest], connections *help_datastructures.MapConnections, database *sql.DB) (*connect.Response[threedoclusionv1.SendMenuOptionResponse], error) {
	log.Println("Request headers: ", req.Header())
	var deviceID int32
	deviceID = 0; // deviceID of client; to send to: testing

	switch *req.Msg.Option.Enum() {
	case 0:
		log.Println("Menu option Save was chosen");
		// req.Msg.GetSaveData() Pass this to the method -> make abstraction

		statement, error := database.Prepare("INSERT INTO scan_save (scan_id, lowerX, lowerY, lowerZ, lowerRX, lowerRY, lowerRZ, lowerRW, upperX, upperY, upperZ, upperRX, upperRY, upperRZ, upperRW, timestamp_save) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)")
		if error != nil {
			return nil, error
		}

		t := time.Now()
		//formattedDate := t.Format("2006-01-02") // Format in yyyy-mm-dd
		formattedTimestamp := t.Format("2006-01-02T15:04:05")

		save := req.Msg.GetSaveData()
		_, error = statement.Exec(save.ScanId, save.LowerX, save.LowerY, save.LowerZ, save.LowerRX, save.LowerRY, save.LowerRZ, save.LowerRW, save.UpperX, save.UpperY, save.UpperZ, save.UpperRX, save.UpperRY, save.UpperRZ, save.UpperRW, formattedTimestamp)
		if error != nil {
			return nil, error
		}

		msg := "Saved successfully"
		res := connect.NewResponse(&threedoclusionv1.SendMenuOptionResponse{
			OtherData: &msg,
			
		})
		return res, nil

	case 1:
		log.Println("Menu option Load was chosen");

		statement := "SELECT scan_id, lowerX, lowerY, lowerZ, lowerRX, lowerRY, lowerRZ, lowerRW, upperX, upperY, upperZ, upperRX, upperRY, upperRZ, upperRW, timestamp_save FROM scan_save WHERE scan_id = $1;"
		rows, error := database.Query(statement, req.Msg.GetScanId())
		if error != nil {
			return nil, error
		}

		result, error := GetResponseMakerScan(rows)
		if error != nil {
			return nil, error
		}

		// Get list of all scans for this ID and return
		res := connect.NewResponse(&threedoclusionv1.SendMenuOptionResponse{
			Wrap: &threedoclusionv1.SendMenuOptionResponse_Wrapper{LoadData: result},
		})
		
		return res, nil

	case 2:
		log.Println("Menu option Save and Quit was chosen");
		// Save And Quit data -> Scan save
		statement, error := database.Prepare("INSERT INTO scan_save (scan_id, lowerX, lowerY, lowerZ, lowerRX, lowerRY, lowerRZ, lowerRW, upperX, upperY, upperZ, upperRX, upperRY, upperRZ, upperRW, timestamp_save) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)")
		if error != nil {
			return nil, error
		}

		t := time.Now()
		formattedTimestamp := t.Format("2006-01-02T15:04:05") // Format in yyyy-mm-dd T HH:MM:SS

		save := req.Msg.GetSaveData()
		_, error = statement.Exec(save.ScanId, save.LowerX, save.LowerY, save.LowerZ, save.LowerRX, save.LowerRY, save.LowerRZ, save.LowerRW, save.UpperX, save.UpperY, save.UpperZ, save.UpperRX, save.UpperRY, save.UpperRZ, save.UpperRW, formattedTimestamp)
		if error != nil {
			return nil, error
		}

		connectionChan := connections.GetChannel(req.Msg.GetScanId(), deviceID)
		select { // Send isConnected false to channel
		case connectionChan <- threedoclusionv1.SubscribeConnectionResponse{IsConnected: false}:
			// pass
		default:
			// pass
		}

		msg := "Saved successfully"
		res := connect.NewResponse(&threedoclusionv1.SendMenuOptionResponse{
			OtherData: &msg,
		})

		connections.ReleaseChannel(req.Msg.GetSaveData().GetScanId(), 1); // VR deviceID 1

		return res, nil

	case 3:
		log.Println("Menu option Quit was chosen");

		connectionChan := connections.GetChannel(req.Msg.GetScanId(), deviceID);

		select {
		case connectionChan <- threedoclusionv1.SubscribeConnectionResponse{IsConnected: false}:
			// pass
		default:
			// pass
		}
		
		connections.ReleaseChannel(req.Msg.GetScanId(), 1) // Delete client connection from memory, then let client handle itself based on received response

		msg := "Deleted connection from server"
		res := connect.NewResponse(&threedoclusionv1.SendMenuOptionResponse{
			OtherData: &msg,
		})
		return res, nil
	
	default:
		msg := "Unknown option"
		res := connect.NewResponse(&threedoclusionv1.SendMenuOptionResponse{
			OtherData: &msg,
		})
		return res, nil
	}
}

func SubscribeConnection(ctx context.Context, req *connect.Request[threedoclusionv1.SubscribeConnectionRequest], stream *connect.ServerStream[threedoclusionv1.SubscribeConnectionResponse], connections *help_datastructures.MapConnections) error  {
    scanID := req.Msg.ScanId
    deviceID := req.Msg.DeviceId

	connectionChan := connections.GetChannel(scanID, deviceID)
	
    for {
        select {
        case res := <-connectionChan: // When a message gets received on the intended channel, send it over
            if err := stream.Send(&res); err != nil {
                return err
            }
			if !res.IsConnected { // Don't keep track of channel anymore and return so no more checking
				connections.ReleaseChannel(scanID, deviceID)
                return nil
			}
		case <-ctx.Done(): // Check if premature exit, update the other linked device's channel
			// Maybe just use boolean if only going to update two devices
			msg := "Connection was broken off prematurely"
			var receiverDeviceID int32;
			if (deviceID == 0){
				msg = "Client has disconnected prematurely!";
				receiverDeviceID = 1;
			} else if (deviceID == 1) {
				msg = "VR has disconnected prematurely!";
				receiverDeviceID = 0;
			}
			// Release corresponding channel
			connections.ReleaseChannel(scanID, deviceID)

			otherConnectionChan := connections.GetChannel(scanID, receiverDeviceID) // Sent to all of them instead


			otherConnectionChan <- threedoclusionv1.SubscribeConnectionResponse{
				IsConnected: false,
				OtherData: &msg,
			}
            return ctx.Err()
        } // Maybe add a timeout with otherNotCreated response
	}
}

func UpdateConnectionStatus(req *connect.Request[threedoclusionv1.UpdateConnectionStatusRequest], connections *help_datastructures.MapConnections, database *sql.DB) (*connect.Response[threedoclusionv1.UpdateConnectionStatusResponse], error){
    scanID := req.Msg.ScanId
    deviceID := req.Msg.DeviceId
    isConnected := req.Msg.IsConnected

    mapDeviceChan := connections.GetMapDeviceChannel(scanID)

    for otherDeviceID, connectionChan := range mapDeviceChan { // Notify all relevant channels
        if otherDeviceID != deviceID {
            connectionChan <- threedoclusionv1.SubscribeConnectionResponse{
                IsConnected: isConnected,
            }
        }
    }

    return connect.NewResponse(&threedoclusionv1.UpdateConnectionStatusResponse{}), nil
}

func GetLastSaveData(req *connect.Request[threedoclusionv1.GetLastSaveDataRequest], database *sql.DB) (*connect.Response[threedoclusionv1.GetLastSaveDataResponse], error) {
	const sqlStatement = `
	SELECT  timestamp_save, lowerx, lowery, lowerz, lowerrx, lowerry, lowerrz, lowerrw, upperx, uppery, upperz, upperrx, upperry, upperrz, upperrw
	FROM scan_save 
	WHERE scan_id = $1 AND timestamp_save = (
		SELECT MAX(timestamp_save)
		FROM scan_save
		WHERE scan_id = $1
	);`
	var timestamp string;
	var lowerx float32;
	var lowery float32;
	var lowerz float32;
	var lowerrx float32;
	var lowerry float32;
	var lowerrz float32;
	var lowerrw float32;
	var upperx float32;
	var uppery float32;
	var upperz float32;
	var upperrx float32;
	var upperry float32;
	var upperrz float32;
	var upperrw float32;

	error := database.QueryRow(sqlStatement, req.Msg.Id).Scan(&timestamp, &lowerx, &lowery, &lowerz, &lowerrx, &lowerry, &lowerrz, &lowerrw, &upperx, &uppery, &upperz, &upperrx, &upperry, &upperrz, &upperrw)
	if error != nil {
		return nil, error
	}

	responseMessage := fmt.Sprintf("scan save with id: %d returned with succes;", req.Msg.Id)
	fmt.Println(responseMessage)

	res := connect.NewResponse(&threedoclusionv1.GetLastSaveDataResponse{
		TimestampSave: timestamp,
		LowerX: lowerx,
		LowerY: lowery,
		LowerZ: lowerz,
		LowerRX: lowerrx,
		LowerRY: lowerry,
		LowerRZ: lowerrz,
		LowerRW: lowerrw,
		UpperX: upperx,
		UpperY: uppery,
		UpperZ: upperz,
		UpperRX: upperrx,
		UpperRY: upperry,
		UpperRZ: upperrz,
		UpperRW: upperrw,
	})

	return res, nil
}
