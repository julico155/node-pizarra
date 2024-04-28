"use strict";
const io = require("socket.io-client");
const socket = io.connect("http://18.223.2.7:8081");
console.log("socket cargado...");

module.exports = {
  io,
  socket,
};
