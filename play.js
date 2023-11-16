const connect = require('./client');

const conn = connect();

//handle incoming data from server
  conn.on("data", () => {
    console.log("You ded cuz yoy idled!");
  });

  


  