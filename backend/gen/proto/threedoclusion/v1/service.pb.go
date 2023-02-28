// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        (unknown)
// source: threedoclusion/v1/service.proto

package threedoclusionv1

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type ScanRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *ScanRequest) Reset() {
	*x = ScanRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_threedoclusion_v1_service_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ScanRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ScanRequest) ProtoMessage() {}

func (x *ScanRequest) ProtoReflect() protoreflect.Message {
	mi := &file_threedoclusion_v1_service_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ScanRequest.ProtoReflect.Descriptor instead.
func (*ScanRequest) Descriptor() ([]byte, []int) {
	return file_threedoclusion_v1_service_proto_rawDescGZIP(), []int{0}
}

func (x *ScanRequest) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

type ScanResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
}

func (x *ScanResponse) Reset() {
	*x = ScanResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_threedoclusion_v1_service_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ScanResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ScanResponse) ProtoMessage() {}

func (x *ScanResponse) ProtoReflect() protoreflect.Message {
	mi := &file_threedoclusion_v1_service_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ScanResponse.ProtoReflect.Descriptor instead.
func (*ScanResponse) Descriptor() ([]byte, []int) {
	return file_threedoclusion_v1_service_proto_rawDescGZIP(), []int{1}
}

func (x *ScanResponse) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

type TagRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *TagRequest) Reset() {
	*x = TagRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_threedoclusion_v1_service_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *TagRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TagRequest) ProtoMessage() {}

func (x *TagRequest) ProtoReflect() protoreflect.Message {
	mi := &file_threedoclusion_v1_service_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TagRequest.ProtoReflect.Descriptor instead.
func (*TagRequest) Descriptor() ([]byte, []int) {
	return file_threedoclusion_v1_service_proto_rawDescGZIP(), []int{2}
}

func (x *TagRequest) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

type TagResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id    string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Color string `protobuf:"bytes,2,opt,name=color,proto3" json:"color,omitempty"`
	Text  string `protobuf:"bytes,3,opt,name=text,proto3" json:"text,omitempty"`
}

func (x *TagResponse) Reset() {
	*x = TagResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_threedoclusion_v1_service_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *TagResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TagResponse) ProtoMessage() {}

func (x *TagResponse) ProtoReflect() protoreflect.Message {
	mi := &file_threedoclusion_v1_service_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TagResponse.ProtoReflect.Descriptor instead.
func (*TagResponse) Descriptor() ([]byte, []int) {
	return file_threedoclusion_v1_service_proto_rawDescGZIP(), []int{3}
}

func (x *TagResponse) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *TagResponse) GetColor() string {
	if x != nil {
		return x.Color
	}
	return ""
}

func (x *TagResponse) GetText() string {
	if x != nil {
		return x.Text
	}
	return ""
}

var File_threedoclusion_v1_service_proto protoreflect.FileDescriptor

var file_threedoclusion_v1_service_proto_rawDesc = []byte{
	0x0a, 0x1f, 0x74, 0x68, 0x72, 0x65, 0x65, 0x64, 0x6f, 0x63, 0x6c, 0x75, 0x73, 0x69, 0x6f, 0x6e,
	0x2f, 0x76, 0x31, 0x2f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x12, 0x11, 0x74, 0x68, 0x72, 0x65, 0x65, 0x64, 0x6f, 0x63, 0x6c, 0x75, 0x73, 0x69, 0x6f,
	0x6e, 0x2e, 0x76, 0x31, 0x22, 0x1d, 0x0a, 0x0b, 0x53, 0x63, 0x61, 0x6e, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x02, 0x69, 0x64, 0x22, 0x22, 0x0a, 0x0c, 0x53, 0x63, 0x61, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f,
	0x6e, 0x73, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x22, 0x1c, 0x0a, 0x0a, 0x54, 0x61, 0x67, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x02, 0x69, 0x64, 0x22, 0x47, 0x0a, 0x0b, 0x54, 0x61, 0x67, 0x52, 0x65, 0x73, 0x70,
	0x6f, 0x6e, 0x73, 0x65, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x02, 0x69, 0x64, 0x12, 0x14, 0x0a, 0x05, 0x63, 0x6f, 0x6c, 0x6f, 0x72, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x05, 0x63, 0x6f, 0x6c, 0x6f, 0x72, 0x12, 0x12, 0x0a, 0x04, 0x74, 0x65,
	0x78, 0x74, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x74, 0x65, 0x78, 0x74, 0x32, 0xa0,
	0x01, 0x0a, 0x0b, 0x53, 0x63, 0x61, 0x6e, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x49,
	0x0a, 0x04, 0x53, 0x63, 0x61, 0x6e, 0x12, 0x1e, 0x2e, 0x74, 0x68, 0x72, 0x65, 0x65, 0x64, 0x6f,
	0x63, 0x6c, 0x75, 0x73, 0x69, 0x6f, 0x6e, 0x2e, 0x76, 0x31, 0x2e, 0x53, 0x63, 0x61, 0x6e, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1f, 0x2e, 0x74, 0x68, 0x72, 0x65, 0x65, 0x64, 0x6f,
	0x63, 0x6c, 0x75, 0x73, 0x69, 0x6f, 0x6e, 0x2e, 0x76, 0x31, 0x2e, 0x53, 0x63, 0x61, 0x6e, 0x52,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x46, 0x0a, 0x03, 0x54, 0x61, 0x67,
	0x12, 0x1d, 0x2e, 0x74, 0x68, 0x72, 0x65, 0x65, 0x64, 0x6f, 0x63, 0x6c, 0x75, 0x73, 0x69, 0x6f,
	0x6e, 0x2e, 0x76, 0x31, 0x2e, 0x54, 0x61, 0x67, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a,
	0x1e, 0x2e, 0x74, 0x68, 0x72, 0x65, 0x65, 0x64, 0x6f, 0x63, 0x6c, 0x75, 0x73, 0x69, 0x6f, 0x6e,
	0x2e, 0x76, 0x31, 0x2e, 0x54, 0x61, 0x67, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22,
	0x00, 0x42, 0xf0, 0x01, 0x0a, 0x15, 0x63, 0x6f, 0x6d, 0x2e, 0x74, 0x68, 0x72, 0x65, 0x65, 0x64,
	0x6f, 0x63, 0x6c, 0x75, 0x73, 0x69, 0x6f, 0x6e, 0x2e, 0x76, 0x31, 0x42, 0x0c, 0x53, 0x65, 0x72,
	0x76, 0x69, 0x63, 0x65, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x64, 0x67, 0x69, 0x74,
	0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x4c, 0x61, 0x72, 0x73, 0x44, 0x65, 0x70, 0x75,
	0x79, 0x64, 0x74, 0x2f, 0x70, 0x65, 0x6e, 0x6f, 0x2d, 0x65, 0x6e, 0x74, 0x72, 0x65, 0x70, 0x72,
	0x65, 0x6e, 0x65, 0x75, 0x72, 0x73, 0x68, 0x69, 0x70, 0x2d, 0x33, 0x64, 0x2d, 0x6f, 0x63, 0x6c,
	0x75, 0x73, 0x69, 0x65, 0x2f, 0x67, 0x65, 0x6e, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x74,
	0x68, 0x72, 0x65, 0x65, 0x64, 0x6f, 0x63, 0x6c, 0x75, 0x73, 0x69, 0x6f, 0x6e, 0x2f, 0x76, 0x31,
	0x3b, 0x74, 0x68, 0x72, 0x65, 0x65, 0x64, 0x6f, 0x63, 0x6c, 0x75, 0x73, 0x69, 0x6f, 0x6e, 0x76,
	0x31, 0xa2, 0x02, 0x03, 0x54, 0x58, 0x58, 0xaa, 0x02, 0x11, 0x54, 0x68, 0x72, 0x65, 0x65, 0x64,
	0x6f, 0x63, 0x6c, 0x75, 0x73, 0x69, 0x6f, 0x6e, 0x2e, 0x56, 0x31, 0xca, 0x02, 0x11, 0x54, 0x68,
	0x72, 0x65, 0x65, 0x64, 0x6f, 0x63, 0x6c, 0x75, 0x73, 0x69, 0x6f, 0x6e, 0x5c, 0x56, 0x31, 0xe2,
	0x02, 0x1d, 0x54, 0x68, 0x72, 0x65, 0x65, 0x64, 0x6f, 0x63, 0x6c, 0x75, 0x73, 0x69, 0x6f, 0x6e,
	0x5c, 0x56, 0x31, 0x5c, 0x47, 0x50, 0x42, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0xea,
	0x02, 0x12, 0x54, 0x68, 0x72, 0x65, 0x65, 0x64, 0x6f, 0x63, 0x6c, 0x75, 0x73, 0x69, 0x6f, 0x6e,
	0x3a, 0x3a, 0x56, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_threedoclusion_v1_service_proto_rawDescOnce sync.Once
	file_threedoclusion_v1_service_proto_rawDescData = file_threedoclusion_v1_service_proto_rawDesc
)

func file_threedoclusion_v1_service_proto_rawDescGZIP() []byte {
	file_threedoclusion_v1_service_proto_rawDescOnce.Do(func() {
		file_threedoclusion_v1_service_proto_rawDescData = protoimpl.X.CompressGZIP(file_threedoclusion_v1_service_proto_rawDescData)
	})
	return file_threedoclusion_v1_service_proto_rawDescData
}

var file_threedoclusion_v1_service_proto_msgTypes = make([]protoimpl.MessageInfo, 4)
var file_threedoclusion_v1_service_proto_goTypes = []interface{}{
	(*ScanRequest)(nil),  // 0: threedoclusion.v1.ScanRequest
	(*ScanResponse)(nil), // 1: threedoclusion.v1.ScanResponse
	(*TagRequest)(nil),   // 2: threedoclusion.v1.TagRequest
	(*TagResponse)(nil),  // 3: threedoclusion.v1.TagResponse
}
var file_threedoclusion_v1_service_proto_depIdxs = []int32{
	0, // 0: threedoclusion.v1.ScanService.Scan:input_type -> threedoclusion.v1.ScanRequest
	2, // 1: threedoclusion.v1.ScanService.Tag:input_type -> threedoclusion.v1.TagRequest
	1, // 2: threedoclusion.v1.ScanService.Scan:output_type -> threedoclusion.v1.ScanResponse
	3, // 3: threedoclusion.v1.ScanService.Tag:output_type -> threedoclusion.v1.TagResponse
	2, // [2:4] is the sub-list for method output_type
	0, // [0:2] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_threedoclusion_v1_service_proto_init() }
func file_threedoclusion_v1_service_proto_init() {
	if File_threedoclusion_v1_service_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_threedoclusion_v1_service_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ScanRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_threedoclusion_v1_service_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ScanResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_threedoclusion_v1_service_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*TagRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_threedoclusion_v1_service_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*TagResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_threedoclusion_v1_service_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   4,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_threedoclusion_v1_service_proto_goTypes,
		DependencyIndexes: file_threedoclusion_v1_service_proto_depIdxs,
		MessageInfos:      file_threedoclusion_v1_service_proto_msgTypes,
	}.Build()
	File_threedoclusion_v1_service_proto = out.File
	file_threedoclusion_v1_service_proto_rawDesc = nil
	file_threedoclusion_v1_service_proto_goTypes = nil
	file_threedoclusion_v1_service_proto_depIdxs = nil
}