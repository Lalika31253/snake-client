const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //handle incoming data from server
  conn.on("data", () => {
    console.log("You ded cuz yoy idled!");
  });

  return conn;
};

console.log("Connecting ...");
connect();