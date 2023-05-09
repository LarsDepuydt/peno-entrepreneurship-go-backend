// @generated by protoc-gen-es v1.2.0
// @generated from file threedoclusion/v1/service.proto (package threedoclusion.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message threedoclusion.v1.ScanSave
 */
export const ScanSave = proto3.makeMessageType(
  "threedoclusion.v1.ScanSave",
  () => [
    { no: 1, name: "scan_id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "timestamp_save", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "lower_x", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 4, name: "lower_y", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 5, name: "lower_z", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 6, name: "lower_r_x", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 7, name: "lower_r_y", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 8, name: "lower_r_z", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 9, name: "upper_x", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 10, name: "upper_y", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 11, name: "upper_z", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 12, name: "upper_r_x", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 13, name: "upper_r_y", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 14, name: "upper_r_z", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
  ],
);

/**
 * TAGS
 *
 * @generated from message threedoclusion.v1.Tag
 */
export const Tag = proto3.makeMessageType(
  "threedoclusion.v1.Tag",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "bite", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
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
    { no: 2, name: "id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message threedoclusion.v1.DeleteTagByIdRequest
 */
export const DeleteTagByIdRequest = proto3.makeMessageType(
  "threedoclusion.v1.DeleteTagByIdRequest",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message threedoclusion.v1.DeleteTagByIdResponse
 */
export const DeleteTagByIdResponse = proto3.makeMessageType(
  "threedoclusion.v1.DeleteTagByIdResponse",
  () => [
    { no: 1, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "bite", kind: "scalar", T: 9 /* ScalarType.STRING */ },
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
    { no: 1, name: "tags", kind: "message", T: Tag, repeated: true },
  ],
);

/**
 * @generated from message threedoclusion.v1.GetTagByIdRequest
 */
export const GetTagByIdRequest = proto3.makeMessageType(
  "threedoclusion.v1.GetTagByIdRequest",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message threedoclusion.v1.GetTagByIdResponse
 */
export const GetTagByIdResponse = proto3.makeMessageType(
  "threedoclusion.v1.GetTagByIdResponse",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
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
    { no: 1, name: "tags", kind: "message", T: Tag, repeated: true },
  ],
);

/**
 * SCANS
 *
 * @generated from message threedoclusion.v1.Scan
 */
export const Scan = proto3.makeMessageType(
  "threedoclusion.v1.Scan",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "scan", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "created_at", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "notes", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "patient_id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message threedoclusion.v1.AddScanRequest
 */
export const AddScanRequest = proto3.makeMessageType(
  "threedoclusion.v1.AddScanRequest",
  () => [
    { no: 1, name: "scan_file", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "notes", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "patient_id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message threedoclusion.v1.AddScanResponse
 */
export const AddScanResponse = proto3.makeMessageType(
  "threedoclusion.v1.AddScanResponse",
  () => [
    { no: 1, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message threedoclusion.v1.DeleteScanByIdRequest
 */
export const DeleteScanByIdRequest = proto3.makeMessageType(
  "threedoclusion.v1.DeleteScanByIdRequest",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message threedoclusion.v1.DeleteScanByIdResponse
 */
export const DeleteScanByIdResponse = proto3.makeMessageType(
  "threedoclusion.v1.DeleteScanByIdResponse",
  () => [
    { no: 1, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
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
    { no: 1, name: "scans", kind: "message", T: Scan, repeated: true },
  ],
);

/**
 * @generated from message threedoclusion.v1.GetScanByIdRequest
 */
export const GetScanByIdRequest = proto3.makeMessageType(
  "threedoclusion.v1.GetScanByIdRequest",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message threedoclusion.v1.GetScanByIdResponse
 */
export const GetScanByIdResponse = proto3.makeMessageType(
  "threedoclusion.v1.GetScanByIdResponse",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "scan", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "created_at", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "notes", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "patient_id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * PATIENT
 *
 * @generated from message threedoclusion.v1.Patient
 */
export const Patient = proto3.makeMessageType(
  "threedoclusion.v1.Patient",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "first_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "last_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "pinned", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "notes", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "dentist_id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
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
    { no: 3, name: "pinned", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "notes", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "dentist_id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message threedoclusion.v1.AddPatientResponse
 */
export const AddPatientResponse = proto3.makeMessageType(
  "threedoclusion.v1.AddPatientResponse",
  () => [
    { no: 1, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message threedoclusion.v1.TagResponse
 */
export const TagResponse = proto3.makeMessageType(
  "threedoclusion.v1.TagResponse",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "color", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message threedoclusion.v1.SendPositionScanRequest
 */
export const SendPositionScanRequest = proto3.makeMessageType(
  "threedoclusion.v1.SendPositionScanRequest",
  () => [
    { no: 1, name: "scan", kind: "message", T: Scan },
  ],
);

/**
 * @generated from message threedoclusion.v1.GetPositionScanResponse
 */
export const GetPositionScanResponse = proto3.makeMessageType(
  "threedoclusion.v1.GetPositionScanResponse",
  () => [
    { no: 1, name: "scan", kind: "message", T: Scan },
  ],
);

/**
 * @generated from message threedoclusion.v1.SendMenuOptionRequest
 */
export const SendMenuOptionRequest = proto3.makeMessageType(
  "threedoclusion.v1.SendMenuOptionRequest",
  () => [
    { no: 1, name: "option", kind: "enum", T: proto3.getEnumType(SendMenuOptionRequest_Option) },
    { no: 2, name: "save_data", kind: "message", T: ScanSave, oneof: "option_data" },
    { no: 3, name: "scan_id", kind: "scalar", T: 5 /* ScalarType.INT32 */, oneof: "option_data" },
  ],
);

/**
 * @generated from enum threedoclusion.v1.SendMenuOptionRequest.Option
 */
export const SendMenuOptionRequest_Option = proto3.makeEnum(
  "threedoclusion.v1.SendMenuOptionRequest.Option",
  [
    {no: 0, name: "OPTION_SAVE_UNSPECIFIED", localName: "SAVE_UNSPECIFIED"},
    {no: 1, name: "OPTION_LOAD", localName: "LOAD"},
    {no: 2, name: "OPTION_SAVE_AND_QUIT", localName: "SAVE_AND_QUIT"},
    {no: 3, name: "OPTION_QUIT", localName: "QUIT"},
  ],
);

/**
 * oneof isn't supported with repeated
 *
 * @generated from message threedoclusion.v1.SendMenuOptionResponse
 */
export const SendMenuOptionResponse = proto3.makeMessageType(
  "threedoclusion.v1.SendMenuOptionResponse",
  () => [
    { no: 1, name: "wrap", kind: "message", T: SendMenuOptionResponse_Wrapper, opt: true },
    { no: 2, name: "other_data", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
);

/**
 * @generated from message threedoclusion.v1.SendMenuOptionResponse.Wrapper
 */
export const SendMenuOptionResponse_Wrapper = proto3.makeMessageType(
  "threedoclusion.v1.SendMenuOptionResponse.Wrapper",
  () => [
    { no: 3, name: "load_data", kind: "message", T: ScanSave, repeated: true },
  ],
  {localName: "SendMenuOptionResponse_Wrapper"},
);

/**
 * @generated from message threedoclusion.v1.UpdateConnectionStatusRequest
 */
export const UpdateConnectionStatusRequest = proto3.makeMessageType(
  "threedoclusion.v1.UpdateConnectionStatusRequest",
  () => [
    { no: 1, name: "is_connected", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "scan_id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "device_id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message threedoclusion.v1.UpdateConnectionStatusResponse
 */
export const UpdateConnectionStatusResponse = proto3.makeMessageType(
  "threedoclusion.v1.UpdateConnectionStatusResponse",
  [],
);

/**
 * Info passed to subscribeStatus; use only one VR stream per client? Made scan-specific for now
 *
 * @generated from message threedoclusion.v1.SubscribeConnectionRequest
 */
export const SubscribeConnectionRequest = proto3.makeMessageType(
  "threedoclusion.v1.SubscribeConnectionRequest",
  () => [
    { no: 1, name: "scan_id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "device_id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message threedoclusion.v1.SubscribeConnectionResponse
 */
export const SubscribeConnectionResponse = proto3.makeMessageType(
  "threedoclusion.v1.SubscribeConnectionResponse",
  () => [
    { no: 1, name: "is_connected", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "other_not_created", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "other_data", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
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
 * @generated from message threedoclusion.v1.DeletePatientByIdRequest
 */
export const DeletePatientByIdRequest = proto3.makeMessageType(
  "threedoclusion.v1.DeletePatientByIdRequest",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message threedoclusion.v1.DeletePatientByIdResponse
 */
export const DeletePatientByIdResponse = proto3.makeMessageType(
  "threedoclusion.v1.DeletePatientByIdResponse",
  () => [
    { no: 1, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "first_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "last_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
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
 * @generated from message threedoclusion.v1.GetPatientByIdRequest
 */
export const GetPatientByIdRequest = proto3.makeMessageType(
  "threedoclusion.v1.GetPatientByIdRequest",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message threedoclusion.v1.GetPatientByIdResponse
 */
export const GetPatientByIdResponse = proto3.makeMessageType(
  "threedoclusion.v1.GetPatientByIdResponse",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "first_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "last_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "pinned", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "notes", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "dentist_id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
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

/**
 * @generated from message threedoclusion.v1.UpdatePatientByIdRequest
 */
export const UpdatePatientByIdRequest = proto3.makeMessageType(
  "threedoclusion.v1.UpdatePatientByIdRequest",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "first_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "last_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "pinned", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "notes", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "dentist_id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message threedoclusion.v1.UpdatePatientByIdResponse
 */
export const UpdatePatientByIdResponse = proto3.makeMessageType(
  "threedoclusion.v1.UpdatePatientByIdResponse",
  () => [
    { no: 1, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message threedoclusion.v1.GetAllPinnedPatientsRequest
 */
export const GetAllPinnedPatientsRequest = proto3.makeMessageType(
  "threedoclusion.v1.GetAllPinnedPatientsRequest",
  () => [
    { no: 1, name: "pinned", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message threedoclusion.v1.GetAllPinnedPatientsResponse
 */
export const GetAllPinnedPatientsResponse = proto3.makeMessageType(
  "threedoclusion.v1.GetAllPinnedPatientsResponse",
  () => [
    { no: 1, name: "patients", kind: "message", T: Patient, repeated: true },
  ],
);

/**
 * @generated from message threedoclusion.v1.GetAllUnPinnedPatientsRequest
 */
export const GetAllUnPinnedPatientsRequest = proto3.makeMessageType(
  "threedoclusion.v1.GetAllUnPinnedPatientsRequest",
  [],
);

/**
 * @generated from message threedoclusion.v1.GetAllUnPinnedPatientsResponse
 */
export const GetAllUnPinnedPatientsResponse = proto3.makeMessageType(
  "threedoclusion.v1.GetAllUnPinnedPatientsResponse",
  () => [
    { no: 1, name: "patients", kind: "message", T: Patient, repeated: true },
  ],
);

/**
 * DENTIST
 *
 * @generated from message threedoclusion.v1.Dentist
 */
export const Dentist = proto3.makeMessageType(
  "threedoclusion.v1.Dentist",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "first_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "last_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message threedoclusion.v1.AddDentistRequest
 */
export const AddDentistRequest = proto3.makeMessageType(
  "threedoclusion.v1.AddDentistRequest",
  () => [
    { no: 1, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "password", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "first_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "last_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message threedoclusion.v1.AddDentistResponse
 */
export const AddDentistResponse = proto3.makeMessageType(
  "threedoclusion.v1.AddDentistResponse",
  () => [
    { no: 1, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message threedoclusion.v1.GetDentistByIdRequest
 */
export const GetDentistByIdRequest = proto3.makeMessageType(
  "threedoclusion.v1.GetDentistByIdRequest",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message threedoclusion.v1.GetDentistByIdResponse
 */
export const GetDentistByIdResponse = proto3.makeMessageType(
  "threedoclusion.v1.GetDentistByIdResponse",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "first_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "last_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message threedoclusion.v1.GetAllDentistsRequest
 */
export const GetAllDentistsRequest = proto3.makeMessageType(
  "threedoclusion.v1.GetAllDentistsRequest",
  [],
);

/**
 * @generated from message threedoclusion.v1.GetAllDentistsResponse
 */
export const GetAllDentistsResponse = proto3.makeMessageType(
  "threedoclusion.v1.GetAllDentistsResponse",
  () => [
    { no: 1, name: "dentists", kind: "message", T: Dentist, repeated: true },
  ],
);

/**
 * @generated from message threedoclusion.v1.UpdateDentistByIdRequest
 */
export const UpdateDentistByIdRequest = proto3.makeMessageType(
  "threedoclusion.v1.UpdateDentistByIdRequest",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "first_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "last_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message threedoclusion.v1.UpdateDentistByIdResponse
 */
export const UpdateDentistByIdResponse = proto3.makeMessageType(
  "threedoclusion.v1.UpdateDentistByIdResponse",
  () => [
    { no: 1, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message threedoclusion.v1.DeleteDentistByIdRequest
 */
export const DeleteDentistByIdRequest = proto3.makeMessageType(
  "threedoclusion.v1.DeleteDentistByIdRequest",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message threedoclusion.v1.DeleteDentistByIdResponse
 */
export const DeleteDentistByIdResponse = proto3.makeMessageType(
  "threedoclusion.v1.DeleteDentistByIdResponse",
  () => [
    { no: 1, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message threedoclusion.v1.LoginRequest
 */
export const LoginRequest = proto3.makeMessageType(
  "threedoclusion.v1.LoginRequest",
  () => [
    { no: 1, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "password", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message threedoclusion.v1.LoginResponse
 */
export const LoginResponse = proto3.makeMessageType(
  "threedoclusion.v1.LoginResponse",
  () => [
    { no: 1, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 4, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "first_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "last_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message threedoclusion.v1.RegisterRequest
 */
export const RegisterRequest = proto3.makeMessageType(
  "threedoclusion.v1.RegisterRequest",
  () => [
    { no: 1, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "password", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "first_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "last_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message threedoclusion.v1.RegisterResponse
 */
export const RegisterResponse = proto3.makeMessageType(
  "threedoclusion.v1.RegisterResponse",
  () => [
    { no: 1, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

