const express = require("express");
const app = express();
const path = require("path");

app.get("/", (req, res) => {
  res.send("Hello Skyu");
});

app.get("/filesend", (req, res) => {
  res.sendFile(path.join(__dirname, "new12.html"));
});

app.get("/download", (req, res) => {
  const filepath = path.join(__dirname, "new12.html");
  res.download(filepath, (err) => {
    if (err) {
      console.log("File is not Found", err);
      res.status(500).send("Error File is not download");
    }
  });
});

app.listen(5676, () => {
  console.log("Http://LocalHost:5676");
});
