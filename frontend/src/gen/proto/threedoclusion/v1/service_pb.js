// @generated by protoc-gen-es v1.0.0
// @generated from file threedoclusion/v1/service.proto (package threedoclusion.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message threedoclusion.v1.RowDataTag
 */
export const RowDataTag = proto3.makeMessageType(
  "threedoclusion.v1.RowDataTag",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "bite", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message threedoclusion.v1.Scan
 */
export const Scan = proto3.makeMessageType(
  "threedoclusion.v1.Scan",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "scan", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "date", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message threedoclusion.v1.Patient
 */
export const Patient = proto3.makeMessageType(
  "threedoclusion.v1.Patient",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "first_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "last_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "pinned", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 5, name: "notes", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * TAGS
 *
 * @generated from message threedoclusion.v1.AddTagRequest
 */
export const AddTagRequest = proto3.makeMessageType(
  "threedoclusion.v1.AddTagRequest",
  () => [
    { no: 1, name: "bite", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message threedoclusion.v1.AddTagResponse
 */
export const AddTagResponse = proto3.makeMessageType(
  "threedoclusion.v1.AddTagResponse",
  () => [
    { no: 1, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message threedoclusion.v1.DeleteTagRequest
 */
export const DeleteTagRequest = proto3.makeMessageType(
  "threedoclusion.v1.DeleteTagRequest",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message threedoclusion.v1.DeleteTagResponse
 */
export const DeleteTagResponse = proto3.makeMessageType(
  "threedoclusion.v1.DeleteTagResponse",
  () => [
    { no: 1, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message threedoclusion.v1.GetAllTagsRequest
 */
export const GetAllTagsRequest = proto3.makeMessageType(
  "threedoclusion.v1.GetAllTagsRequest",
  [],
);

/**
 * @generated from message threedoclusion.v1.GetAllTagsResponse
 */
export const GetAllTagsResponse = proto3.makeMessageType(
  "threedoclusion.v1.GetAllTagsResponse",
  () => [
    { no: 1, name: "tags", kind: "message", T: RowDataTag, repeated: true },
  ],
);

/**
 * @generated from message threedoclusion.v1.GetTagByIDRequest
 */
export const GetTagByIDRequest = proto3.makeMessageType(
  "threedoclusion.v1.GetTagByIDRequest",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message threedoclusion.v1.GetTagByIDResponse
 */
export const GetTagByIDResponse = proto3.makeMessageType(
  "threedoclusion.v1.GetTagByIDResponse",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "bite", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message threedoclusion.v1.GetAllTagsByTypeRequest
 */
export const GetAllTagsByTypeRequest = proto3.makeMessageType(
  "threedoclusion.v1.GetAllTagsByTypeRequest",
  () => [
    { no: 1, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message threedoclusion.v1.GetAllTagsByTypeResponse
 */
export const GetAllTagsByTypeResponse = proto3.makeMessageType(
  "threedoclusion.v1.GetAllTagsByTypeResponse",
  () => [
    { no: 1, name: "tags", kind: "message", T: RowDataTag, repeated: true },
  ],
);

/**
 * SCANS
 *
 * @generated from message threedoclusion.v1.AddScanRequest
 */
export const AddScanRequest = proto3.makeMessageType(
  "threedoclusion.v1.AddScanRequest",
  () => [
    { no: 1, name: "scan_file", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "scan_date", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message threedoclusion.v1.AddScanResponse
 */
export const AddScanResponse = proto3.makeMessageType(
  "threedoclusion.v1.AddScanResponse",
  () => [
    { no: 1, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message threedoclusion.v1.DeleteScanRequest
 */
export const DeleteScanRequest = proto3.makeMessageType(
  "threedoclusion.v1.DeleteScanRequest",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message threedoclusion.v1.DeleteScanResponse
 */
export const DeleteScanResponse = proto3.makeMessageType(
  "threedoclusion.v1.DeleteScanResponse",
  () => [
    { no: 1, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message threedoclusion.v1.GetAllScansRequest
 */
export const GetAllScansRequest = proto3.makeMessageType(
  "threedoclusion.v1.GetAllScansRequest",
  [],
);

/**
 * @generated from message threedoclusion.v1.GetAllScansResponse
 */
export const GetAllScansResponse = proto3.makeMessageType(
  "threedoclusion.v1.GetAllScansResponse",
  () => [
    { no: 1, name: "id_data", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
    { no: 3, name: "scan_dates", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * @generated from message threedoclusion.v1.GetScanByIDRequest
 */
export const GetScanByIDRequest = proto3.makeMessageType(
  "threedoclusion.v1.GetScanByIDRequest",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message threedoclusion.v1.GetScanByIDResponse
 */
export const GetScanByIDResponse = proto3.makeMessageType(
  "threedoclusion.v1.GetScanByIDResponse",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "scan_date", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message threedoclusion.v1.GetScanByDateRequest
 */
export const GetScanByDateRequest = proto3.makeMessageType(
  "threedoclusion.v1.GetScanByDateRequest",
  () => [
    { no: 1, name: "date", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message threedoclusion.v1.GetScanByDateResponse
 */
export const GetScanByDateResponse = proto3.makeMessageType(
  "threedoclusion.v1.GetScanByDateResponse",
  () => [
    { no: 1, name: "id_data", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
    { no: 3, name: "scan_dates", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * @generated from message threedoclusion.v1.AddPatientRequest
 */
export const AddPatientRequest = proto3.makeMessageType(
  "threedoclusion.v1.AddPatientRequest",
  () => [
    { no: 1, name: "first_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "last_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "pinned", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "notes", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message threedoclusion.v1.AddPatientResponse
 */
export const AddPatientResponse = proto3.makeMessageType(
  "threedoclusion.v1.AddPatientResponse",
  () => [
    { no: 1, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message threedoclusion.v1.TagResponse
 */
export const TagResponse = proto3.makeMessageType(
  "threedoclusion.v1.TagResponse",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "color", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message threedoclusion.v1.SendVRRequest
 */
export const SendVRRequest = proto3.makeMessageType(
  "threedoclusion.v1.SendVRRequest",
  () => [
    { no: 1, name: "client_id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "scan_id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message threedoclusion.v1.SendPositionScanRequest
 */
export const SendPositionScanRequest = proto3.makeMessageType(
  "threedoclusion.v1.SendPositionScanRequest",
  () => [
    { no: 1, name: "lower_x", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 2, name: "lower_y", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 3, name: "lower_z", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 4, name: "lower_r_x", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 5, name: "lower_r_y", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 6, name: "lower_r_z", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 7, name: "upper_x", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 8, name: "upper_y", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 9, name: "upper_z", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 10, name: "upper_r_x", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 11, name: "upper_r_y", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 12, name: "upper_r_z", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 13, name: "scan_id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message threedoclusion.v1.SendPositionScanResponse
 */
export const SendPositionScanResponse = proto3.makeMessageType(
  "threedoclusion.v1.SendPositionScanResponse",
  () => [
    { no: 1, name: "saved", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message threedoclusion.v1.GetPositionScanRequest
 */
export const GetPositionScanRequest = proto3.makeMessageType(
  "threedoclusion.v1.GetPositionScanRequest",
  () => [
    { no: 1, name: "scan_id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message threedoclusion.v1.GetPositionScanResponse
 */
export const GetPositionScanResponse = proto3.makeMessageType(
  "threedoclusion.v1.GetPositionScanResponse",
  () => [
    { no: 1, name: "lower_x", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 2, name: "lower_y", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 3, name: "lower_z", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 4, name: "lower_r_x", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 5, name: "lower_r_y", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 6, name: "lower_r_z", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 7, name: "upper_x", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 8, name: "upper_y", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 9, name: "upper_z", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 10, name: "upper_r_x", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 11, name: "upper_r_y", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 12, name: "upper_r_z", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
  ],
);

/**
 * @generated from message threedoclusion.v1.SendVRResponse
 */
export const SendVRResponse = proto3.makeMessageType(
  "threedoclusion.v1.SendVRResponse",
  () => [
    { no: 1, name: "feedback", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message threedoclusion.v1.WaitingRequest
 */
export const WaitingRequest = proto3.makeMessageType(
  "threedoclusion.v1.WaitingRequest",
  () => [
    { no: 1, name: "unique_code", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message threedoclusion.v1.WaitingResponse
 */
export const WaitingResponse = proto3.makeMessageType(
  "threedoclusion.v1.WaitingResponse",
  () => [
    { no: 1, name: "redirect", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message threedoclusion.v1.DeletePatientRequest
 */
export const DeletePatientRequest = proto3.makeMessageType(
  "threedoclusion.v1.DeletePatientRequest",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message threedoclusion.v1.DeletePatientResponse
 */
export const DeletePatientResponse = proto3.makeMessageType(
  "threedoclusion.v1.DeletePatientResponse",
  () => [
    { no: 1, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message threedoclusion.v1.GetAllPatientsRequest
 */
export const GetAllPatientsRequest = proto3.makeMessageType(
  "threedoclusion.v1.GetAllPatientsRequest",
  [],
);

/**
 * @generated from message threedoclusion.v1.GetAllPatientsResponse
 */
export const GetAllPatientsResponse = proto3.makeMessageType(
  "threedoclusion.v1.GetAllPatientsResponse",
  () => [
    { no: 1, name: "patients", kind: "message", T: Patient, repeated: true },
  ],
);

/**
 * @generated from message threedoclusion.v1.GetPatientByIDRequest
 */
export const GetPatientByIDRequest = proto3.makeMessageType(
  "threedoclusion.v1.GetPatientByIDRequest",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message threedoclusion.v1.GetPatientByIDResponse
 */
export const GetPatientByIDResponse = proto3.makeMessageType(
  "threedoclusion.v1.GetPatientByIDResponse",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "first_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "last_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "pinned", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 5, name: "notes", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message threedoclusion.v1.GetPatientByNameRequest
 */
export const GetPatientByNameRequest = proto3.makeMessageType(
  "threedoclusion.v1.GetPatientByNameRequest",
  () => [
    { no: 1, name: "first_name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "last_name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
);

/**
 * @generated from message threedoclusion.v1.GetPatientByNameResponse
 */
export const GetPatientByNameResponse = proto3.makeMessageType(
  "threedoclusion.v1.GetPatientByNameResponse",
  () => [
    { no: 1, name: "patients", kind: "message", T: Patient, repeated: true },
  ],
);

