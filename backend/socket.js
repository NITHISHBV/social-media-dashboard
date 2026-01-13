const socketio = require("socket.io");

module.exports = (server) => {
  const io = socketio(server, {
    cors: { origin: "*" }
  });

  io.on("connection", socket => {
    console.log("User connected:", socket.id);

    socket.on("sendMessage", data => {
      io.emit("receiveMessage", data);
    });

    socket.on("disconnect", () => {
      console.log("User disconnected");
    });
  });
};
