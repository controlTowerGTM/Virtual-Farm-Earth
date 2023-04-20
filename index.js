const express = require("express");

var app = express();

app.use('/', (req, res) => {
  res.send('Hello!');
});

var port = 3000;
app.listen(port, () => console.log(`Server running 🚀 on port: ${port}... `));
