const express = require("express");
const app = express();

const middleware = async (req, res, next) => {
  await next();
  console.log("middleware");
};

app.use(middleware);

app.get("/", (req, res, next) => {
  console.log("router");
  res.send("hw");
});

app.listen(3000);
