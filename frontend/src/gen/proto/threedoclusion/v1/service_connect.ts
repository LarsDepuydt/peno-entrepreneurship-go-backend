// @generated by protoc-gen-connect-es v0.8.3 with parameter "target=ts"
// @generated from file threedoclusion/v1/service.proto (package threedoclusion.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { AddScanRequest, AddScanResponse, AddTagRequest, AddTagResponse, DeleteScanRequest, DeleteScanResponse, DeleteTagRequest, DeleteTagResponse, GetAllScansRequest, GetAllScansResponse, GetAllTagsByTypeRequest, GetAllTagsByTypeResponse, GetAllTagsRequest, GetAllTagsResponse, GetScanByDateRequest, GetScanByDateResponse, GetScanByIDRequest, GetScanByIDResponse, GetTagByIDRequest, GetTagByIDResponse, SendVRRequest, SendVRResponse, WaitingRequest, WaitingResponse } from "./service_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service threedoclusion.v1.ScanService
 */
export const ScanService = {
  typeName: "threedoclusion.v1.ScanService",
  methods: {
    /**
     * @generated from rpc threedoclusion.v1.ScanService.SendVR
     */
    sendVR: {
      name: "SendVR",
      I: SendVRRequest,
      O: SendVRResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc threedoclusion.v1.ScanService.Waiting
     */
    waiting: {
      name: "Waiting",
      I: WaitingRequest,
      O: WaitingResponse,
      kind: MethodKind.ServerStreaming,
    },
    /**
     * @generated from rpc threedoclusion.v1.ScanService.AddScan
     */
    addScan: {
      name: "AddScan",
      I: AddScanRequest,
      O: AddScanResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc threedoclusion.v1.ScanService.DeleteScan
     */
    deleteScan: {
      name: "DeleteScan",
      I: DeleteScanRequest,
      O: DeleteScanResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc threedoclusion.v1.ScanService.GetAllScans
     */
    getAllScans: {
      name: "GetAllScans",
      I: GetAllScansRequest,
      O: GetAllScansResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc threedoclusion.v1.ScanService.GetScanByID
     */
    getScanByID: {
      name: "GetScanByID",
      I: GetScanByIDRequest,
      O: GetScanByIDResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc threedoclusion.v1.ScanService.GetScanByDate
     */
    getScanByDate: {
      name: "GetScanByDate",
      I: GetScanByDateRequest,
      O: GetScanByDateResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc threedoclusion.v1.ScanService.AddTag
     */
    addTag: {
      name: "AddTag",
      I: AddTagRequest,
      O: AddTagResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc threedoclusion.v1.ScanService.DeleteTag
     */
    deleteTag: {
      name: "DeleteTag",
      I: DeleteTagRequest,
      O: DeleteTagResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc threedoclusion.v1.ScanService.GetAllTags
     */
    getAllTags: {
      name: "GetAllTags",
      I: GetAllTagsRequest,
      O: GetAllTagsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc threedoclusion.v1.ScanService.GetTagByID
     */
    getTagByID: {
      name: "GetTagByID",
      I: GetTagByIDRequest,
      O: GetTagByIDResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc threedoclusion.v1.ScanService.GetAllTagsByType
     */
    getAllTagsByType: {
      name: "GetAllTagsByType",
      I: GetAllTagsByTypeRequest,
      O: GetAllTagsByTypeResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

