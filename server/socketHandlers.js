let users = [];
let rooms = ["main"];
let isTyping = false;
let timeout = null;
let members = [];
// random colour generator from material design colour file
const matColours = require("./colours.json");

let colours = [];

let memberNameList = [];

//handle the joining of the user name and user room
const handleJoin = (user, room) => {
  let coloridx = Math.floor(Math.random() * matColours.colours.length) + 1;
  //console.log(matColours.colours[coloridx]);
  //get a random colour for the new user
  let userColour = matColours.colours[coloridx];
  const newUser = {
    name: user,
    roomname: room,
    colour: userColour,
  };

  users.push(newUser);

  //console.log(newUser);
  colours[newUser.name] = userColour;

  // console.log("NEWUSER.NAME");
  // console.log(newUser.name);
};

// Get current user
const getCurrentUser = () => {
  return users.find((user) => user.name === user);
};

//check if user exists return true or false
const userExists = (user) => {
  for (let i of users) {
    if (i.name == user) {
      console.log(`name: ${i.name}`);
      return true;
    }
  }
  return false;
};

// check if room name exists
const roomExists = (room) => {
  console.log(room);
  for (let i of rooms) {
    if (i == room) {
      console.log(`If room name exists: ${i}`);
      return true;
    }
  }
  return false;
};

//disconnect the client
const handleDisconnect = (user) => {
  for (let x of users) {
    if (userExists) {
      console.log(`name to remove: ${x.name}`);
      console.log(`remove name: ${users.findIndex((x) => x.name == user, 1)}`);
      return users.splice(users.findIndex((x) => x.name == user, 1));
    }
  }
};

const getColour = (user) => {
  console.log(JSON.stringify(user));
  console.log(colours);
  return colours[user];
};

const performTypingTimeout = () => {
  typing = false;
};

//show client typing
const handleTyping = () => {
  if (isTyping == false) {
    isTyping = true;
    timeout = setTimeout(performTypingTimeout, 1000);
  } else {
    clearTimeout(timeout);
    timeout = setTimeout(performTypingTimeout, 1000);
  }
};

//show client stopped typing

const handleStoppedTyping = () => {
  if (isTyping == true) {
    isTyping = false;
    timeout = setTimeout(performStoppedTypingTimeout, 1000);
  } else {
    clearTimeout(timeout);
    timeout = setTimeout(performStoppedTypingTimeout, 1000);
  }
};

const performStoppedTypingTimeout = () => {
  typing = true;
};

const getRooms = () => {
  return rooms;
};

const handleAddRoom = (roomname) => {
  if (!roomExists(roomname)) {
    rooms.push(roomname);
    // console.log("ROOMS");
    // console.log(rooms);
    // console.log(`included room name: ${roomname}`);
  }
};

const handleGetRoomsAndUsers = (room, user) => {
  rooms.filter((r) => r.roomname == room);

  users.filter((x) => x.name == user);

  console.log("MEMBER LIST");

  members.push(users);

  console.log(users);
};

const getUsers = () => {
  return users;
};

module.exports = {
  handleJoin,
  getCurrentUser,
  userExists,
  handleDisconnect,
  performTypingTimeout,
  performStoppedTypingTimeout,
  getColour,
  getRooms,
  roomExists,
  handleTyping,
  handleStoppedTyping,
  handleAddRoom,
  handleGetRoomsAndUsers,
  getUsers,
};
