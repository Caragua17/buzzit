const server = Bun.serve<string>({
  fetch(req, server) {
    // upgrade the request to a WebSocket
    if (server.upgrade(req)) {
      return; // do not return a Response
    }
    return new Response("Upgrade failed :(", { status: 500 });
  },
  websocket: {
    message(ws, message) {
      console.log(message);
      ws.send("Je t'ai vu");
    },
    open(ws) {
      console.log("new socket", ws);
    },
  }, // handlers
});

console.log(`Listening on ${server.hostname}:${server.port}`);
