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

const host = "localhost";
const port = 3000;

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});

server.on("error", err => {
  console.error("Server error:", err);
});
