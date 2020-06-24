import * as grpc from '@grpc/grpc-js';
import { RouteGuideClient } from '../proto-api/route_guide_grpc_pb';
import { RouteNote, Point } from '../proto-api/route_guide_pb';

const backendAddr = 'localhost:10000';

function constructClient<T>(Client: {
  new (
    address: string,
    credentials: grpc.ChannelCredentials,
    options?: object
  ): T;
}): T {
  return new Client(backendAddr, grpc.credentials.createInsecure());
}

const routeGuideClient = constructClient<RouteGuideClient>(RouteGuideClient);

console.log(global);


function connectServer() {
  let hasConnect = false;

  const call = routeGuideClient.routeChat();

  const location = new Point();
  location.setLatitude(23);
  location.setLongitude(45);
  const routeNote = new RouteNote();
  routeNote.setLocation(location);
  routeNote.setMessage('233333');

  const pingCall = () => {
    console.log('write');
    call.write(routeNote);
  };

  let intervalPingHandle = setInterval(() => { // It's OK while I write message into duplex stream in node environment by using setInterval. But that seems it will be broken if i use setInterval and write message in renderer process.
    pingCall();
  }, 10000);

  let i = 0;
  call.on('data', (data: RouteNote) => {
    const dataObj: RouteNote.AsObject = data.toObject();
    console.log(dataObj);
    hasConnect = true;
  });
  call.on('end', (e: unknown) => {
    return e;
    // console.log('end', e);
    // The server has finished sending
  });
  call.on('error', (e: Error) => {
    call.end();
    return e;
    // console.log('e', e);
    // An error has occurred and the stream has been closed.
  });
  call.on('status', (status: unknown) => {
    return status;
    // console.log('status', status);
    // process status
  });
}

connectServer();
