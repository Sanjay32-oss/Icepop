const express = require("express");
const app = express();

app.set("view engine", "pug");

app.get("/", (req, res) => {
  const data2 = ["Alice", "Sanjay", "Skyu"];
  const data3 = { Name: "Sanjay", Age: 24, City: "Hamirpur(H.P)" };
  res.render("index1", { message: "Hello Pug", data2, data3 });
});

app.listen(5767, () => {
  console.log("http://localhost:5767");
});
