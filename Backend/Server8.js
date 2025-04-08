const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const data = { name: "Sanjay", age: 23, city: "Hamirpur" };
  res.render("index", { data }); // Pass "data" inside an object
});

app.listen(7878, () => {
  console.log("Server running at http://localhost:7878");
});
