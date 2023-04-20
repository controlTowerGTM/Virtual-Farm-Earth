const express = require("express");
const bodyParser = require("body-parser");

const router = require("./network/routes");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Home entry point
app.get("/", (req, res) => {
  res.send("Farm Tracker API 🍃 by Go to mars 4D Labs");
});

router(app);

const port = 3000;
app.listen(port, () => console.log(`Server running 🚀 on port: ${port}... `));
