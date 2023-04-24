const express = require("express");
const apiKeyMiddleware = require("../middlewares/api-key.handler");

const missionRouter = require("./mission.routes");

const routerApi = (app) => {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/mission", apiKeyMiddleware, missionRouter);
};

module.exports = routerApi;
