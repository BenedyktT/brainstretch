const express = require("express");
const app = express();
const util = require("util");

app.get("/", (req, res, next) => {
  res.send("hw");
});
