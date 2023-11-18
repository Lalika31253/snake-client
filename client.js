const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //print a message to the screen when the connection is successfully established
  conn.on("connect", () => {
    console.log("Successfully connected to game server!");
    conn.write("Name: PAM"); // apply name to the snake
  });

  return conn;
};

console.log("Connecting ...");

module.exports = { connect };


