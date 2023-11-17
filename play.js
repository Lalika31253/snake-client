const connect = require('./client');

const conn = connect();

//handle incoming data from server
conn.on("data", () => {
  console.log("You ded cuz yoy idled!");
});

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};


const handleUserInput = function () {

  process.stdin.on("data", (key) => {
    
    // \u0003 maps to ctrl+c input
    if (key === '\u0003') {
      process.exit();
    };

  });
};

setupInput();
