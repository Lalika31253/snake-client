const net = require("net");
const { connect } = require('./client');
const { setupInput } = require('./input');

const connection = connect();

setupInput(connection);

