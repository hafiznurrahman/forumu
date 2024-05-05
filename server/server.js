require("dotenv").config();
const { createServer } = require("node:http");
const { Server } = require("socket.io");

const server = createServer();

const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT || "*"
  }
});

io.on("connection", socket => {
  console.log("User connected");
  socket.on("msgData", (username, message, time) => {
    socket.broadcast.emit("msgData", username, message, time);
  });
  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

const port = process.env.PORT || 3000;

io.listen(port, () => {
  console.log(`Server running ${port}`);
});

io.on("error", err => {
  console.error("Server error:", err);
});
