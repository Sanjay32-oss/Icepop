const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<mark>Welcome To Our profile</mark>");
});

app.get("/Home", (req, res) => {
  res.send("HELLO SKY");
});

app.get("/dkl", (req, res) => {
  res.send("How are You ");
});

app.get("/html", (req, res) => {
  res.send("<h1>HELLO SANJAY</h1>");
});

app.get("/json", (req, res) => {
  res.json({ Name: "Sanjay", Age: 23 });
});

app.get("/login", (req, res) => {
  res.redirect("/");
});

app.get("/query:id", (req, res) => {
  res.send(req.params.id);
});

// app.get("*",(req, res)=>{
// res.send("<h1>Page is not Error 404...<h1/>")
// })

app.listen(9787, () => {
  console.log("http://localhost:9787");
});
