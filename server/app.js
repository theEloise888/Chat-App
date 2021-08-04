require("dotenv").config();
const moment = require("moment");
const cors = require("cors");
const express = require("express");
// const app = express();
const http = require("http");
const port = process.env.PORT || 5000;
const socketIO = require("socket.io");

//Auditing PWA with Lighthouse
let app = express();

let server = http.createServer(app);
let io = socketIO(server);

// Enable reverse proxy support in Express. This causes the
// the "X-Forwarded-Proto" header field to be trusted so its
// value can be used to determine the protocol. See
// http://expressjs.com/api#app-settings for more details.
app.enable("trust proxy");
// Add a handler to inspect the req.secure flag (see
// http://expressjs.com/api#req.secure). This allows us
// to know whether the request was via http or https.
app.use((req, res, next) => {
  req.secure
    ? // request was via https, so do no special handling
      next()
    : // request was via http, so redirect to https
      res.redirect("https://" + req.headers.host + req.url);
});

//In prod, ensure the static middleware has been set up so these files can be served
app.use(express.static("public"));

const socketHandlers = require("./socketHandlers");

//for non prod
app.use(cors());

// main socket routine
io.on("connection", (socket) => {
  console.log("new connection established");
  socket.emit("allrooms", socketHandlers.getRooms());
  console.log(`rooms: ${socketHandlers.getRooms()}`);

  // scenario 1 - client sends server 'join' message using room to join
  socket.on("join", (client) => {
    if (socketHandlers.userExists(client.chatName)) {
      socket.emit("nameexists", {
        text: `name exists.`,
      });
    } else {
      client.name = client.chatName;
      socket.room = client.roomName;

      // use the room property to create a room
      socket.join(client.roomName);
      socket.join(client.chatName);

      socketHandlers.handleJoin(client.chatName, socket.room);

      socketHandlers.handleAddRoom(client.roomName);

      io.in(socket.room).emit(
        "allusers",
        socketHandlers.getUsers(),
        socketHandlers.getColour(client.from)
      );

      socketHandlers.handleGetRoomsAndUsers(socket.room, client.chatName);

      console.log("handleGetRoomsAndUsers");

      console.log(
        socketHandlers.handleGetRoomsAndUsers(socket.room, client.chatName)
      );

      // send message to joining client
      socket.emit("welcome", {
        room: socket.room,
        from: "Admin",
        colour: "pink",
        text: `welcome ${client.name}`,
      });
      //console.log(`${client.name} has joined ${socket.room}`);

      // send message to rest of the room the client just joined
      socket.to(socket.room).emit("someonejoined", {
        room: socket.room,
        from: "Admin",
        colour: "pink",
        text: `${client.name} has joined the ${socket.room} room!`,
      });
    }

    // scenario 2 - client disconnects from server
    socket.on("disconnect", function () {
      console.log("user disconnected");
      if (socketHandlers.userExists(client.chatName)) {
        socketHandlers.handleDisconnect(socket);

        io.in(socket.room).emit(
          "allusers",
          socketHandlers.getUsers(),
          socketHandlers.getColour(client.from)
        );
        socketHandlers.handleGetRoomsAndUsers(socket.room, client.chatName);

        console.log("handleGetRoomsAndUsers");

        console.log(
          socketHandlers.handleGetRoomsAndUsers(socket.room, client.chatName)
        );

        socket.to(socket.room).emit("someoneleft", {
          room: socket.room,
          from: "Admin",
          colour: "pink",
          text: `${client.name} has left room ${socket.room}`,
        });
      }
    });

    // scenario 3 - client starts typing
    socket.on("typing", (client) => {
      socketHandlers.handleTyping(socket, client);
      socket.to(socket.room).emit("someoneistyping", {
        from: socket.room,
        colour: "#2e7d32",
        text: `${client.from} is typing`,
      });
    });

    //scenario 4 - client sends messages
    socket.on("message", (client) => {
      io.in(socket.room).emit("newmessage", {
        room: socket.room,
        from: `${client.from}`,
        text: `${client.text}`,
        colour: `${socketHandlers.getColour(client.from)}`,
      });
    });

    //scenario 5- client stops typing
    socket.on("stoppedtyping", (client) => {
      socketHandlers.handleStoppedTyping(socket, client);
      socket.to(socket.room).emit("someoneistyping", {
        from: socket.room,
        colour: "#2e7d32",
      });
    });
  });
});

// will pass 404 to error handler
app.use((req, res, next) => {
  const error = new Error("No such route found");
  error.status = 404;
  next(error);
});

// error handler middleware
app.use((error, req, res, next) => {
  res.status(error.status || 500).send({
    error: {
      status: error.status || 500,
      message: error.message || "Internal Server Error",
    },
  });
});

server.listen(port, () => console.log(`starting on port ${port}`));
