const express = require("express");
const app = express();

const middleware = (req, res, next) => {
  console.log("Hello Everyone This is Sanjay Kumar");
  next();
};

app.use(middleware);

app.get("/home1", (req, res) => {
  res.send("Hello, This is a home route");
});

app.listen(8999, () => {
  console.log("http://localhost:8999");
});
