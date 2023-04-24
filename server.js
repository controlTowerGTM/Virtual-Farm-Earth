const express = require("express");
const bodyParser = require("body-parser");

const app = express();
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

// Home entry point
app.get("/", (req, res) => {
  res.send("Farm Tracker API 🍃 by Go to mars 4D Labs");
});

router(app);

const port = config.httpPort;
app.listen(port, () => console.log(`Server running 🚀 on port: ${port}... `));
