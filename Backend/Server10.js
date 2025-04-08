const express = require("express");
const app = express();

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  const data4 = { Name: "Skyu", Age: 100, Address: "Sky" };
  res.render("index2", { message1: "Hello Everyone I'm hbs ", data4 });
});

app.listen(9087, () => {
  console.log("http://localhost:9087");
});
