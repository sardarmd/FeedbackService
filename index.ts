const express = require("express");
const app = express();

let PORT = process.env.PORT || 5000

app.get("/", (req, res) => {
  res.send({ "hi": "there" });
});

app.listen(PORT);

