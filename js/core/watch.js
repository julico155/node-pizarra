"use strict";
const io = require("socket.io-client");
const socket = io.connect("http://localhost:8081");
console.log("socket cargado...");

module.exports = {
  io,
  socket,
};
