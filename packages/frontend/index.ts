const socket = new WebSocket("ws://localhost:3000");

// message is received
socket.addEventListener("message", (event) => {
  console.log(event);
});

// socket opened
socket.addEventListener("open", (event) => {
  socket.send("test");
  console.log(event);
});

// socket closed
socket.addEventListener("close", (event) => {
  console.log(event);
});

// error handler
socket.addEventListener("error", (event) => {
  console.log(event);
});
