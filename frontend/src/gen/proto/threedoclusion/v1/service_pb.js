// @generated by protoc-gen-es v1.0.0
// @generated from file threedoclusion/v1/service.proto (package threedoclusion.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message threedoclusion.v1.ScanRequest
 */
export const ScanRequest = proto3.makeMessageType(
  "threedoclusion.v1.ScanRequest",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message threedoclusion.v1.ScanResponse
 */
export const ScanResponse = proto3.makeMessageType(
  "threedoclusion.v1.ScanResponse",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

