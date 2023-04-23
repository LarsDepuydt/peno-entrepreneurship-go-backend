import { useState } from "react";
import { SendMenuOptionRequest, Scan } from "@/gen/proto/threedoclusion/v1/service_pb";
import ListView from "./list-view";

async function sendMenuOption(optionNumber: number, clnt: any, oData: any){
  console.log(oData);
  //let req = new SendMenuOptionRequest({option: optionNumber, optionData: oData});
  let req = new SendMenuOptionRequest({});
  req.option = optionNumber;
  req.optionData = {value: oData.value, case: oData.case};

  console.log(req);
  console.log('req before sending:', JSON.stringify(req, null, 2)); // Can't serialise Scan??? Then just parse attributes in request definition proto?
  const res = await clnt.sendMenuOption(req);
  return res;
}

function Menu({isOpen, setIsOpen, current_scan, stream, client, onLoadItemClicked, onQuit }: {isOpen: boolean, setIsOpen: any, current_scan: Scan, stream: any, client: any, onLoadItemClicked: (inputData: Scan) => void, onQuit: () => void}){ // Add props with positions, client...
  //const [isOpen, setIsOpen] = useState(true);
  const [showListView, setShowListView] = useState(false);
  const [listData, setListData] = useState<string[]>([]);
  const [listDictData, setListDictData] = useState({});

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLoadItemClicked = (inputData: Scan) => {
    onLoadItemClicked(inputData);
    setShowListView(false);
    toggleMenu();
  }


  const save = async () => {
    const optionData = { case: "saveData", value: current_scan }
    const res = await sendMenuOption(0, client, optionData);
    console.log("Save!")
  };

  const load = async () => {
    const optionData = { case: "scanId", value: 111 };
    sendMenuOption(1, client, optionData)
      .then((res) => {
        if (res) {
          console.log("Load!");
          const extractedTimestamps: string[] = [];
          const dictTimeStamps: { [timestamp: string]: Scan } = {};
          for (const scan of res.wrap.loadData) {
            dictTimeStamps[scan.timestamp] = scan; // Maybe omit id and timestamp values since unnecessary
            extractedTimestamps.push(scan.timestamp);
          }
          setListData(extractedTimestamps.reverse()); // From most recent to oldest
          setListDictData(dictTimeStamps);
          setShowListView(true);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleBackClick = () => {
    setShowListView(false); // Set showListView to false when Back arrow is clicked
  };
  

  const saveAndQuit = async () => {
    const optionData = {case: "saveData", value: current_scan,}
    const res = await sendMenuOption(2, client, optionData);
    console.log("Save and quit!")
  };

  const quit = async () => {
    console.log("I quit!")
    const optionData = {case: "scanId", value: 111,} 
    sendMenuOption(3, client, optionData).then((res) => {
      if (res) {
        console.log(res);
        onQuit()
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
  };

  // onItemClicked move another level up so you can edit position in VR
  return (
    isOpen ? (
    <div className="menu-container">
      <div className={`menu-button \${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="menu-button-bar" />
        <div className="menu-button-bar" />
        <div className="menu-button-bar" />
      </div>
      {!showListView ? (
        <div className="menu-content">
          <div className="menu-header">
            <div className="menu-title">Menu</div>
            <div className="menu-close" onClick={toggleMenu}>
              &times;
            </div>
          </div>
          <ul className="menu-options">
            <li className="menu-option" onClick={load}>Load</li>
            <li className="menu-option" onClick={save}>Save manually</li>
            <li className="menu-option" onClick={saveAndQuit}>Save and quit</li>
            <li className="menu-option" onClick={quit}>Quit</li>
          </ul>
        </div>
      ):(
        <div className="list-view-container">
          <span className="back-arrow" onClick={handleBackClick}>
            <span className="arrow-left"></span>
          </span>
          <ListView data={listData} dictData={listDictData}  itemsPerPage={4} onItemClicked={handleLoadItemClicked}/>
        </div>
      )}
    <style jsx>{`
        .list-view-container {
          position: relative;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 999;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .back-arrow {
          position: absolute;
          top: 10px;
          left: 10px;
          width: 24px;
          height: 24px;
          cursor: pointer;
          z-index: 999;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .arrow-left {
          width: 0;
          height: 0;
          border-top: 6px solid transparent;
          border-bottom: 6px solid transparent;
          border-right: 12px solid #fff;
        }
        .menu-container {
          position: fixed;
          border: 1px solid #000; // Add border around the menu
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 999;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: rgba(0, 0, 0, 0.8);
        }
        .menu-content {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 300px;
          height: 300px;
          background-color: #333;
          border-radius: 10px;
          color: #fff;
          font-size: 20px;
          text-align: center;
        }
        .menu-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          padding: 10px;
        }
        .menu-title {
          font-size: 24px;
          font-weight: bold;
        }
        .menu-close {
          cursor: pointer;
          font-size: 30px;
        }
        .menu-options {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .menu-option {
          margin: 10px;
          padding: 10px;
          background-color: #444;
          border-radius: 5px;
        }
      `}</style>
    </div>
    ) : null  
  );
  
};

export default Menu;
