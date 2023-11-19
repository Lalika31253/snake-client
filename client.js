const net = require("net");
const { IP, PORT } = require('./constants');

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //print a message to the screen when the connection is successfully established
  conn.on("connect", () => {
    console.log("Successfully connected to game server!");
    conn.write("Name: PAM"); // apply name to the snake
  });

  //connection event handler in case of succes/failure
  conn.on("data", () => {
    console.log("You ded cuz you idled");
  });

  return conn;
};

console.log("Connecting ...");

module.exports = { connect };


