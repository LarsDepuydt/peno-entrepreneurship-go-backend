// @generated by protoc-gen-connect-query v0.1.1 with parameter "target=ts"
// @generated from file threedoclusion/v1/service.proto (package threedoclusion.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { createQueryService } from "@bufbuild/connect-query";
import { MethodKind } from "@bufbuild/protobuf";
import { AddPatientRequest, AddPatientResponse, AddScanRequest, AddScanResponse, AddTagRequest, AddTagResponse, DeletePatientRequest, DeletePatientResponse, DeleteScanRequest, DeleteScanResponse, DeleteTagRequest, DeleteTagResponse, GetAllPatientsRequest, GetAllPatientsResponse, GetAllScansRequest, GetAllScansResponse, GetAllTagsByTypeRequest, GetAllTagsByTypeResponse, GetAllTagsRequest, GetAllTagsResponse, GetPatientByIDRequest, GetPatientByIDResponse, GetPatientByNameRequest, GetPatientByNameResponse, GetScanByDateRequest, GetScanByDateResponse, GetScanByIDRequest, GetScanByIDResponse, GetTagByIDRequest, GetTagByIDResponse, SendVRRequest, SendVRResponse } from "./service_pb.js";

export const typeName = "threedoclusion.v1.ScanService";

/**
 * @generated from rpc threedoclusion.v1.ScanService.SendVR
 */
export const sendVR = createQueryService({
  service: {
    methods: {
      sendVR: {
        name: "SendVR",
        kind: MethodKind.Unary,
        I: SendVRRequest,
        O: SendVRResponse,
      },
    },
    typeName: "threedoclusion.v1.ScanService",
  },
}).sendVR;

/**
 * @generated from rpc threedoclusion.v1.ScanService.AddScan
 */
export const addScan = createQueryService({
  service: {
    methods: {
      addScan: {
        name: "AddScan",
        kind: MethodKind.Unary,
        I: AddScanRequest,
        O: AddScanResponse,
      },
    },
    typeName: "threedoclusion.v1.ScanService",
  },
}).addScan;

/**
 * @generated from rpc threedoclusion.v1.ScanService.DeleteScan
 */
export const deleteScan = createQueryService({
  service: {
    methods: {
      deleteScan: {
        name: "DeleteScan",
        kind: MethodKind.Unary,
        I: DeleteScanRequest,
        O: DeleteScanResponse,
      },
    },
    typeName: "threedoclusion.v1.ScanService",
  },
}).deleteScan;

/**
 * @generated from rpc threedoclusion.v1.ScanService.GetAllScans
 */
export const getAllScans = createQueryService({
  service: {
    methods: {
      getAllScans: {
        name: "GetAllScans",
        kind: MethodKind.Unary,
        I: GetAllScansRequest,
        O: GetAllScansResponse,
      },
    },
    typeName: "threedoclusion.v1.ScanService",
  },
}).getAllScans;

/**
 * @generated from rpc threedoclusion.v1.ScanService.GetScanByID
 */
export const getScanByID = createQueryService({
  service: {
    methods: {
      getScanByID: {
        name: "GetScanByID",
        kind: MethodKind.Unary,
        I: GetScanByIDRequest,
        O: GetScanByIDResponse,
      },
    },
    typeName: "threedoclusion.v1.ScanService",
  },
}).getScanByID;

/**
 * @generated from rpc threedoclusion.v1.ScanService.GetScanByDate
 */
export const getScanByDate = createQueryService({
  service: {
    methods: {
      getScanByDate: {
        name: "GetScanByDate",
        kind: MethodKind.Unary,
        I: GetScanByDateRequest,
        O: GetScanByDateResponse,
      },
    },
    typeName: "threedoclusion.v1.ScanService",
  },
}).getScanByDate;

/**
 * @generated from rpc threedoclusion.v1.ScanService.AddTag
 */
export const addTag = createQueryService({
  service: {
    methods: {
      addTag: {
        name: "AddTag",
        kind: MethodKind.Unary,
        I: AddTagRequest,
        O: AddTagResponse,
      },
    },
    typeName: "threedoclusion.v1.ScanService",
  },
}).addTag;

/**
 * @generated from rpc threedoclusion.v1.ScanService.DeleteTag
 */
export const deleteTag = createQueryService({
  service: {
    methods: {
      deleteTag: {
        name: "DeleteTag",
        kind: MethodKind.Unary,
        I: DeleteTagRequest,
        O: DeleteTagResponse,
      },
    },
    typeName: "threedoclusion.v1.ScanService",
  },
}).deleteTag;

/**
 * @generated from rpc threedoclusion.v1.ScanService.GetAllTags
 */
export const getAllTags = createQueryService({
  service: {
    methods: {
      getAllTags: {
        name: "GetAllTags",
        kind: MethodKind.Unary,
        I: GetAllTagsRequest,
        O: GetAllTagsResponse,
      },
    },
    typeName: "threedoclusion.v1.ScanService",
  },
}).getAllTags;

/**
 * @generated from rpc threedoclusion.v1.ScanService.GetTagByID
 */
export const getTagByID = createQueryService({
  service: {
    methods: {
      getTagByID: {
        name: "GetTagByID",
        kind: MethodKind.Unary,
        I: GetTagByIDRequest,
        O: GetTagByIDResponse,
      },
    },
    typeName: "threedoclusion.v1.ScanService",
  },
}).getTagByID;

/**
 * @generated from rpc threedoclusion.v1.ScanService.GetAllTagsByType
 */
export const getAllTagsByType = createQueryService({
  service: {
    methods: {
      getAllTagsByType: {
        name: "GetAllTagsByType",
        kind: MethodKind.Unary,
        I: GetAllTagsByTypeRequest,
        O: GetAllTagsByTypeResponse,
      },
    },
    typeName: "threedoclusion.v1.ScanService",
  },
}).getAllTagsByType;

/**
 * @generated from rpc threedoclusion.v1.ScanService.AddPatient
 */
export const addPatient = createQueryService({
  service: {
    methods: {
      addPatient: {
        name: "AddPatient",
        kind: MethodKind.Unary,
        I: AddPatientRequest,
        O: AddPatientResponse,
      },
    },
    typeName: "threedoclusion.v1.ScanService",
  },
}).addPatient;

/**
 * @generated from rpc threedoclusion.v1.ScanService.DeletePatient
 */
export const deletePatient = createQueryService({
  service: {
    methods: {
      deletePatient: {
        name: "DeletePatient",
        kind: MethodKind.Unary,
        I: DeletePatientRequest,
        O: DeletePatientResponse,
      },
    },
    typeName: "threedoclusion.v1.ScanService",
  },
}).deletePatient;

/**
 * @generated from rpc threedoclusion.v1.ScanService.GetAllPatients
 */
export const getAllPatients = createQueryService({
  service: {
    methods: {
      getAllPatients: {
        name: "GetAllPatients",
        kind: MethodKind.Unary,
        I: GetAllPatientsRequest,
        O: GetAllPatientsResponse,
      },
    },
    typeName: "threedoclusion.v1.ScanService",
  },
}).getAllPatients;

/**
 * @generated from rpc threedoclusion.v1.ScanService.GetPatientByID
 */
export const getPatientByID = createQueryService({
  service: {
    methods: {
      getPatientByID: {
        name: "GetPatientByID",
        kind: MethodKind.Unary,
        I: GetPatientByIDRequest,
        O: GetPatientByIDResponse,
      },
    },
    typeName: "threedoclusion.v1.ScanService",
  },
}).getPatientByID;

/**
 * @generated from rpc threedoclusion.v1.ScanService.GetPatientByName
 */
export const getPatientByName = createQueryService({
  service: {
    methods: {
      getPatientByName: {
        name: "GetPatientByName",
        kind: MethodKind.Unary,
        I: GetPatientByNameRequest,
        O: GetPatientByNameResponse,
      },
    },
    typeName: "threedoclusion.v1.ScanService",
  },
}).getPatientByName;
