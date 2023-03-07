package serve

import (
	"context"
	"net/http"

	"github.com/LarsDepuydt/peno-entrepreneurship-3d-oclusion/cmd/push"
	"github.com/LarsDepuydt/peno-entrepreneurship-3d-oclusion/cmd/scans"
	"github.com/LarsDepuydt/peno-entrepreneurship-3d-oclusion/cmd/tags"
	threedoclusionv1 "github.com/LarsDepuydt/peno-entrepreneurship-3d-oclusion/gen/proto/threedoclusion/v1"
	"github.com/LarsDepuydt/peno-entrepreneurship-3d-oclusion/gen/proto/threedoclusion/v1/threedoclusionv1connect"
	"github.com/bufbuild/connect-go"
	"github.com/rs/cors"
	"golang.org/x/net/http2"
	"golang.org/x/net/http2/h2c"
)

type ServerStruct struct{}

func setCors(mux http.Handler) http.Handler {
	muxHandler := cors.Default().Handler(mux)
	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"*"},
		AllowCredentials: true,
		AllowedHeaders:   []string{"Connect-Protocol-Version", "Content-Type"},
		Debug:            true, // Enable Debugging for testing, consider disabling in production
	})
	muxHandler = c.Handler(muxHandler)

	return muxHandler
}

func Server() {
	server := &ServerStruct{}

	mux := http.NewServeMux()
	path, handler := threedoclusionv1connect.NewScanServiceHandler(server)
	mux.Handle(path, handler)

	muxHandler := setCors(mux)

	http.ListenAndServe(
		"0.0.0.0:8080",
		// Use h2c so we can serve HTTP/2 without TLS.
		h2c.NewHandler(muxHandler, &http2.Server{}),
	)
}

// SCANS
func (s *ServerStruct) AddScan(
	ctx context.Context,
	req *connect.Request[threedoclusionv1.AddScanRequest],
) (*connect.Response[threedoclusionv1.AddScanResponse], error) {
	return scans.AddScan(req)
}

func (s *ServerStruct) DeleteScan(
	ctx context.Context,
	req *connect.Request[threedoclusionv1.DeleteScanRequest],
) (*connect.Response[threedoclusionv1.DeleteScanResponse], error) {
	return scans.DeleteScan(req)
}

func (s *ServerStruct) SendVR(
	ctx context.Context,
	req *connect.Request[threedoclusionv1.SendVRRequest],
) (*connect.Response[threedoclusionv1.SendVRResponse], error) {
	return push.SendToVR(req)
}

func (s *ServerStruct) Waiting(
	ctx context.Context,
	req *connect.Request[threedoclusionv1.waitingRequest],
) (*connect.ServerStream[threedoclusionv1.waitingResponse], error) {
	return push.GetWaitingResponse(req)
} // Server stream setup??
func (s *ServerStruct) GetAllScans(
	ctx context.Context,
	req *connect.Request[threedoclusionv1.GetAllScansRequest],
) (*connect.Response[threedoclusionv1.GetAllScansResponse], error) {
	return scans.GetAllScans(req)
}

func (s *ServerStruct) GetScanByID(
	ctx context.Context,
	req *connect.Request[threedoclusionv1.GetScanByIDRequest],
) (*connect.Response[threedoclusionv1.GetScanByIDResponse], error) {
	return scans.GetScanByID(req)
}

func (s *ServerStruct) GetScanByDate(
	ctx context.Context,
	req *connect.Request[threedoclusionv1.GetScanByDateRequest],
) (*connect.Response[threedoclusionv1.GetScanByDateResponse], error) {
	return scans.GetScanByDate(req)
}

// TAGS
func (s *ServerStruct) AddTag(
	ctx context.Context,
	req *connect.Request[threedoclusionv1.AddTagRequest],
) (*connect.Response[threedoclusionv1.AddTagResponse], error) {
	return tags.AddTag(req)
}

func (s *ServerStruct) DeleteTag(
	ctx context.Context,
	req *connect.Request[threedoclusionv1.DeleteTagRequest],
) (*connect.Response[threedoclusionv1.DeleteTagResponse], error) {
	return tags.DeleteTag(req)
}

func (s *ServerStruct) GetAllTags(
	ctx context.Context,
	req *connect.Request[threedoclusionv1.GetAllTagsRequest],
) (*connect.Response[threedoclusionv1.GetAllTagsResponse], error) {
	return tags.GetAllTags(req)
}

func (s *ServerStruct) GetTagByID(
	ctx context.Context,
	req *connect.Request[threedoclusionv1.GetTagByIDRequest],
) (*connect.Response[threedoclusionv1.GetTagByIDResponse], error) {
	return tags.GetTagByID(req)
}

func (s *ServerStruct) GetAllTagsByType(
	ctx context.Context,
	req *connect.Request[threedoclusionv1.GetAllTagsByTypeRequest],
) (*connect.Response[threedoclusionv1.GetAllTagsByTypeResponse], error) {
	return tags.GetAllTagsByType(req)
}
