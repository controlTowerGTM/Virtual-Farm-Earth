const express = require("express");
const router = express.Router();
const response = require("../../network/response");

router.post("/start", (req, res) => {
  response.success(req, res, "Mission started");
});

router.post("/finish", (req, res) => {
  response.success(req, res, "Mission finished");
});

module.exports = router;
