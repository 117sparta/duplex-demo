// GENERATED CODE -- DO NOT EDIT!

// package: routeguide
// file: route_guide.proto

import * as route_guide_pb from "./route_guide_pb";
import * as grpc from "@grpc/grpc-js";

interface IRouteGuideService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getFeature: grpc.MethodDefinition<route_guide_pb.Point, route_guide_pb.Feature>;
  listFeatures: grpc.MethodDefinition<route_guide_pb.Rectangle, route_guide_pb.Feature>;
  recordRoute: grpc.MethodDefinition<route_guide_pb.Point, route_guide_pb.RouteSummary>;
  routeChat: grpc.MethodDefinition<route_guide_pb.RouteNote, route_guide_pb.RouteNote>;
}

export const RouteGuideService: IRouteGuideService;

export class RouteGuideClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getFeature(argument: route_guide_pb.Point, callback: grpc.requestCallback<route_guide_pb.Feature>): grpc.ClientUnaryCall;
  getFeature(argument: route_guide_pb.Point, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<route_guide_pb.Feature>): grpc.ClientUnaryCall;
  getFeature(argument: route_guide_pb.Point, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<route_guide_pb.Feature>): grpc.ClientUnaryCall;
  listFeatures(argument: route_guide_pb.Rectangle, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<route_guide_pb.Feature>;
  listFeatures(argument: route_guide_pb.Rectangle, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<route_guide_pb.Feature>;
  recordRoute(callback: grpc.requestCallback<route_guide_pb.RouteSummary>): grpc.ClientWritableStream<route_guide_pb.Point>;
  recordRoute(metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<route_guide_pb.RouteSummary>): grpc.ClientWritableStream<route_guide_pb.Point>;
  recordRoute(metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<route_guide_pb.RouteSummary>): grpc.ClientWritableStream<route_guide_pb.Point>;
  routeChat(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<route_guide_pb.RouteNote, route_guide_pb.RouteNote>;
  routeChat(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<route_guide_pb.RouteNote, route_guide_pb.RouteNote>;
}
