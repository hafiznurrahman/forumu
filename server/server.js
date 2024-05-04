require("dotenv").config();
const { createServer } = require("node:http");
const { Server } = require("socket.io");

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Server is running");
});

const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

io.on("connection", socket => {
  console.log("User connected");
  socket.on("message", data => {
    socket.broadcast.emit("message", data);
  });
  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server running at ${port}`);
});

server.on("error", err => {
  console.error("Server error:", err);
});
