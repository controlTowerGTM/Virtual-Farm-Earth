const express = require("express");

const missionRouter = require("./mission.routes");

const routerApi = (app) => {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/mission", missionRouter);
};

module.exports = routerApi;
