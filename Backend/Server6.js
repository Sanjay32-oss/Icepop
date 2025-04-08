const express = require("express");
const app = express();

app.use(express.json()); //req.body={"name":"suraj pathak", "age":20}

const alldata = [];

app.get("/", (req, res) => {
  res.send("Hello Everyone I'm Sanjay Kumar");
});

app.post("/post", (req, res) => {
  const data = [
    { name: "Sanjay", age: 23 },
    { name: "Sanjay1", age: 24 },
    { name: "Sanjay2", age: 25 },
    { name: "Sanjay3", age: 26 },
  ];

  alldata.push(...data);
  res.json({ message: "data added is succesfully", data });
});

app.get("/getall", (req, res) => {
  res.json(alldata);
});

app.put("/put/:name", (req, res) => {
  const UserName = req.params.name; //"Suraj1"
  const User = alldata.find((u) => u.name === UserName);

  if (!User) return res.status(404).json({ message: "User not found" });

  // Update user's name if a new name is provided in the request body
  if (req.body.name) {
    User.name = req.body.name; //Avi
    User.age = req.body.age; //22
  }
  res.json(User);
});

app.listen(4545, () => {
  console.log("http://localhost:4545");
});
