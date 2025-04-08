const express = require("express");
const app = express();
const cookieparser = require("cookie-parser");

app.use(cookieparser());

app.get("/", (req, res) => {
  res.send("Hello Everyone, You know how to check cookies");
});

app.get("/Create-cookies", (req, res) => {
  const maxAge = 4000000;
  const expiresAt = new Date(Date.now() + maxAge).toUTCString();
  res.cookie("user", "Sanjay Kumar", { maxAge, httpOnly: true });
  res.send(`Cookies Created ${expiresAt}`);
});

app.get("/getall", (req, res) => {
  res.send(`${req.cookies.user}`);
});

app.get("/delete", (req, res) => {
  res.clearCookie("user");
  res.status(200).send("Cookies Deleted Succesfully");
});

app.listen(9865, () => {
  console.log("http://localHost:9865");
});
