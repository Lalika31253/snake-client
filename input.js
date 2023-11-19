const { MOVES } = require('./constants');
// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin
const setupInput = (conn) => {
  connection = conn; //accept an object that lets interact with the server 
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
//check if the pressed key has a corresponding move in the MOVES object 
  if (MOVES[key]) {
    connection.write(MOVES[key]);
  };

  if (key === '\u0003') { // \u0003 maps to ctrl+c input
    console.log("Game over! Adios!!!");
    process.exit();
  };

};


module.exports = { setupInput };