const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Everyone I'm Sanjay from Himachal Pradesh");
});

app.get("/Home", (req, res) => {
  res.send("Hello Everyone I'm Rohan Joshi from Haryana Delhi ");
});

app.get("/About", (req, res) => {
  res.send("Hello Everyone I'm Skyu from Sky World");
});

app.listen(9045, () => {
  console.log("http://localhost:9045");
});
