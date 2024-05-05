require("dotenv").config();
const { createServer } = require("node:http");
const { Server } = require("socket.io");

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type","text/plain")
  res.end("running");
});

const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT || "http://localhost:5173"
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

server.listen(port, () => {
  console.log(`Server running ${port}`);
});
