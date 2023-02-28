package main

import (
	"context"
	"database/sql"
	"fmt"
	"log"
	"net/http"

	"github.com/bufbuild/connect-go"
	"github.com/rs/cors"
	"golang.org/x/net/http2"
	"golang.org/x/net/http2/h2c"

	threedoclusionv1 "github.com/LarsDepuydt/peno-entrepreneurship-3d-oclusie/gen/proto/threedoclusion/v1"
	"github.com/LarsDepuydt/peno-entrepreneurship-3d-oclusie/gen/proto/threedoclusion/v1/threedoclusionv1connect"
)

type Server struct{}

func (s *Server) Scan(
	ctx context.Context,
	req *connect.Request[threedoclusionv1.ScanRequest],
) (*connect.Response[threedoclusionv1.ScanResponse], error) {
	log.Println("Request headers: ", req.Header())
	res := connect.NewResponse(&threedoclusionv1.ScanResponse{
		Name: fmt.Sprintf("Hello, %s!", req.Msg.Id),
	})

	
	res.Header().Set("Scan-Version", "v1")
	return res, nil
}

func main() {
	server := &Server{}
	
	mux := http.NewServeMux()
	path, handler := threedoclusionv1connect.NewScanServiceHandler(server)
	mux.Handle(path, handler)

	muxHandler := cors.Default().Handler(mux)
	c := cors.New(cors.Options{
		AllowedOrigins: []string{"*"},
		AllowCredentials: true,
		AllowedHeaders: []string{"Connect-Protocol-Version", "Content-Type"},
		Debug: true, // Enable Debugging for testing, consider disabling in production
	})
	muxHandler = c.Handler(muxHandler)

	http.ListenAndServe(
		"0.0.0.0:8080",
		// Use h2c so we can serve HTTP/2 without TLS.
		h2c.NewHandler(muxHandler, &http2.Server{}),
	)
}

func AddPatient(id int, bite string) error {
	// Connect to the database
	db, err := sql.Open("postgres", "host=host.docker.internal port=5432 user=docker password=docker1 dbname=patient_server sslmode=disable")
	if err != nil {
		return err
	}
	defer db.Close()

	// Prepare a statement with placeholders for the values
	stmt, err := db.Prepare("INSERT INTO tag (id, bite) VALUES ($1, $2)")
	if err != nil {
		return err
	}
	defer stmt.Close()

	// Perform database modifications
	_, err = stmt.Exec(id, bite)
	if err != nil {
		return err
	}

	fmt.Println("Row added successfully")
	return nil

}
