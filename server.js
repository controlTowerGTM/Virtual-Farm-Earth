const express = require("express");
const cors = require("cors");
const { config } = require("./src/config");
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require("./src/api/middlewares/error.handler");

const connect2mongo = require("./src/db/connection");
const routerApi = require("./src/api/routes");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.set("trust proxy", true);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Cors config
app.all("/", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST,GET,PUT,DELETE");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

connect2mongo();

// Home entry point
app.get("/", (req, res) => {
  res.send("Farm Tracker API 🍃 by Go to mars 4D Labs");
});

routerApi(app);

// Error handlers
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

const port = config.httpPort;
app.listen(port, () => console.log(`Server running 🚀 on port: ${port}... `));
