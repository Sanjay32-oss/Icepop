// Node.js Email -------------------------------------------------------------------------
const http = require("http");
const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  Service: "Gmail",
  Auth: {
    user: "User12@gmail.com",
    password: "15678",
  },
});

const mailoption = {
  from: "User12@gmail.com",
  To: "Sanjaykumar40638@gmail.com",
  Subject: "Skyway Profession",
  Text: "I am a Skyway",
};

transport.sendMail(mailoption, (err, info) => {
  if (err) {
    console.log(err);
  } else {
    console.log("E-mail sent" + info.response);
  }
});

http
  .createServer(function (req, res) {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>Hello</h1>");
    res.end();
  })
  .listen(2027, () => {
    console.log("http://localhost:2027");
  });
