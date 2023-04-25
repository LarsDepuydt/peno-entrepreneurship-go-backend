// @generated by protoc-gen-connect-query v0.1.1 with parameter "target=ts"
// @generated from file threedoclusion/v1/service.proto (package threedoclusion.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { createQueryService } from "@bufbuild/connect-query";
import { MethodKind } from "@bufbuild/protobuf";
import { AddDentistRequest, AddDentistResponse, AddPatientRequest, AddPatientResponse, AddScanRequest, AddScanResponse, AddTagRequest, AddTagResponse, DeleteDentistByIdRequest, DeleteDentistByIdResponse, DeletePatientByIdRequest, DeletePatientByIdResponse, DeleteScanByIdRequest, DeleteScanByIdResponse, DeleteTagByIdRequest, DeleteTagByIdResponse, GetAllDentistsRequest, GetAllDentistsResponse, GetAllPatientsRequest, GetAllPatientsResponse, GetAllScansRequest, GetAllScansResponse, GetAllTagsRequest, GetAllTagsResponse, GetDentistByIdRequest, GetDentistByIdResponse, GetPatientByIdRequest, GetPatientByIdResponse, GetPatientByNameRequest, GetPatientByNameResponse, GetScanByIdRequest, GetScanByIdResponse, GetTagByIdRequest, GetTagByIdResponse, LoginRequest, LoginResponse, RegisterRequest, RegisterResponse, SendVRRequest, SendVRResponse, UpdateDentistByIdRequest, UpdateDentistByIdResponse, UpdatePatientByIdRequest, UpdatePatientByIdResponse } from "./service_pb.js";

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
 * @generated from rpc threedoclusion.v1.ScanService.DeleteScanById
 */
export const deleteScanById = createQueryService({
  service: {
    methods: {
      deleteScanById: {
        name: "DeleteScanById",
        kind: MethodKind.Unary,
        I: DeleteScanByIdRequest,
        O: DeleteScanByIdResponse,
      },
    },
    typeName: "threedoclusion.v1.ScanService",
  },
}).deleteScanById;

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
 * @generated from rpc threedoclusion.v1.ScanService.GetScanById
 */
export const getScanById = createQueryService({
  service: {
    methods: {
      getScanById: {
        name: "GetScanById",
        kind: MethodKind.Unary,
        I: GetScanByIdRequest,
        O: GetScanByIdResponse,
      },
    },
    typeName: "threedoclusion.v1.ScanService",
  },
}).getScanById;

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
 * @generated from rpc threedoclusion.v1.ScanService.DeleteTagById
 */
export const deleteTagById = createQueryService({
  service: {
    methods: {
      deleteTagById: {
        name: "DeleteTagById",
        kind: MethodKind.Unary,
        I: DeleteTagByIdRequest,
        O: DeleteTagByIdResponse,
      },
    },
    typeName: "threedoclusion.v1.ScanService",
  },
}).deleteTagById;

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
 * @generated from rpc threedoclusion.v1.ScanService.GetTagById
 */
export const getTagById = createQueryService({
  service: {
    methods: {
      getTagById: {
        name: "GetTagById",
        kind: MethodKind.Unary,
        I: GetTagByIdRequest,
        O: GetTagByIdResponse,
      },
    },
    typeName: "threedoclusion.v1.ScanService",
  },
}).getTagById;

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
 * @generated from rpc threedoclusion.v1.ScanService.DeletePatientById
 */
export const deletePatientById = createQueryService({
  service: {
    methods: {
      deletePatientById: {
        name: "DeletePatientById",
        kind: MethodKind.Unary,
        I: DeletePatientByIdRequest,
        O: DeletePatientByIdResponse,
      },
    },
    typeName: "threedoclusion.v1.ScanService",
  },
}).deletePatientById;

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
 * @generated from rpc threedoclusion.v1.ScanService.GetPatientById
 */
export const getPatientById = createQueryService({
  service: {
    methods: {
      getPatientById: {
        name: "GetPatientById",
        kind: MethodKind.Unary,
        I: GetPatientByIdRequest,
        O: GetPatientByIdResponse,
      },
    },
    typeName: "threedoclusion.v1.ScanService",
  },
}).getPatientById;

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

/**
 * @generated from rpc threedoclusion.v1.ScanService.UpdatePatientById
 */
export const updatePatientById = createQueryService({
  service: {
    methods: {
      updatePatientById: {
        name: "UpdatePatientById",
        kind: MethodKind.Unary,
        I: UpdatePatientByIdRequest,
        O: UpdatePatientByIdResponse,
      },
    },
    typeName: "threedoclusion.v1.ScanService",
  },
}).updatePatientById;

/**
 * @generated from rpc threedoclusion.v1.ScanService.AddDentist
 */
export const addDentist = createQueryService({
  service: {
    methods: {
      addDentist: {
        name: "AddDentist",
        kind: MethodKind.Unary,
        I: AddDentistRequest,
        O: AddDentistResponse,
      },
    },
    typeName: "threedoclusion.v1.ScanService",
  },
}).addDentist;

/**
 * @generated from rpc threedoclusion.v1.ScanService.DeleteDentistById
 */
export const deleteDentistById = createQueryService({
  service: {
    methods: {
      deleteDentistById: {
        name: "DeleteDentistById",
        kind: MethodKind.Unary,
        I: DeleteDentistByIdRequest,
        O: DeleteDentistByIdResponse,
      },
    },
    typeName: "threedoclusion.v1.ScanService",
  },
}).deleteDentistById;

/**
 * @generated from rpc threedoclusion.v1.ScanService.GetAllDentists
 */
export const getAllDentists = createQueryService({
  service: {
    methods: {
      getAllDentists: {
        name: "GetAllDentists",
        kind: MethodKind.Unary,
        I: GetAllDentistsRequest,
        O: GetAllDentistsResponse,
      },
    },
    typeName: "threedoclusion.v1.ScanService",
  },
}).getAllDentists;

/**
 * @generated from rpc threedoclusion.v1.ScanService.GetDentistById
 */
export const getDentistById = createQueryService({
  service: {
    methods: {
      getDentistById: {
        name: "GetDentistById",
        kind: MethodKind.Unary,
        I: GetDentistByIdRequest,
        O: GetDentistByIdResponse,
      },
    },
    typeName: "threedoclusion.v1.ScanService",
  },
}).getDentistById;

/**
 * @generated from rpc threedoclusion.v1.ScanService.UpdateDentistById
 */
export const updateDentistById = createQueryService({
  service: {
    methods: {
      updateDentistById: {
        name: "UpdateDentistById",
        kind: MethodKind.Unary,
        I: UpdateDentistByIdRequest,
        O: UpdateDentistByIdResponse,
      },
    },
    typeName: "threedoclusion.v1.ScanService",
  },
}).updateDentistById;

/**
 * @generated from rpc threedoclusion.v1.ScanService.Login
 */
export const login = createQueryService({
  service: {
    methods: {
      login: {
        name: "Login",
        kind: MethodKind.Unary,
        I: LoginRequest,
        O: LoginResponse,
      },
    },
    typeName: "threedoclusion.v1.ScanService",
  },
}).login;

/**
 * @generated from rpc threedoclusion.v1.ScanService.Register
 */
export const register = createQueryService({
  service: {
    methods: {
      register: {
        name: "Register",
        kind: MethodKind.Unary,
        I: RegisterRequest,
        O: RegisterResponse,
      },
    },
    typeName: "threedoclusion.v1.ScanService",
  },
}).register;
