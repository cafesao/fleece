import { Socket } from 'socket.io-client';

export function socketEmitConnected(socket: Socket, event: string, data: any) {
  if (socket.connected) {
    socket.emit(event, data);
  }
}
