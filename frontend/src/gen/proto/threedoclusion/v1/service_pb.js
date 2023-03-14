// @generated by protoc-gen-es v1.1.0
// @generated from file threedoclusion/v1/service.proto (package threedoclusion.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

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
  () => [
    { no: 1, name: "table_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message threedoclusion.v1.GetAllTagsResponse
 */
export const GetAllTagsResponse = proto3.makeMessageType(
  "threedoclusion.v1.GetAllTagsResponse",
  () => [
    { no: 1, name: "id_data", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
    { no: 2, name: "bite_data", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
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
    { no: 1, name: "bite", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "id_data", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
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
  () => [
    { no: 1, name: "table_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message threedoclusion.v1.GetAllScansResponse
 */
export const GetAllScansResponse = proto3.makeMessageType(
  "threedoclusion.v1.GetAllScansResponse",
  () => [
    { no: 1, name: "id_data", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
    { no: 2, name: "scan_data", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
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
    { no: 2, name: "scan_data", kind: "scalar", T: 9 /* ScalarType.STRING */ },
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
    { no: 2, name: "scan_data", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 3, name: "scan_dates", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * @generated from message threedoclusion.v1.SendPositionScanRequest
 */
export const SendPositionScanRequest = proto3.makeMessageType(
  "threedoclusion.v1.SendPositionScanRequest",
  () => [
    { no: 1, name: "x", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 2, name: "y", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 3, name: "z", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 4, name: "r_x", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 5, name: "r_y", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 6, name: "r_z", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 7, name: "scan_id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
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
    { no: 1, name: "x", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 2, name: "y", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 3, name: "z", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 4, name: "r_x", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 5, name: "r_y", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 6, name: "r_z", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
  ],
);

