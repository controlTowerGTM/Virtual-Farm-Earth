const express = require("express");
const mission = require("../components/mission/network");

const routes = (server) => {
  server.use("/api/mission", mission);
};

module.exports = routes;
