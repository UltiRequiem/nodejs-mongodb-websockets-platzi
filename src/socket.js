import socketIO from "socket.io";

export const socket = {};

export function connect(server) {
  socket.io = socketIO(server);
}
