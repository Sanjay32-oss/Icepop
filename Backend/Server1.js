// const http= require("http")
// http.createServer(function (req, res) {
// res.writeHead(200, {'Content-Type': 'text/html'});
// res.end('<h1>Hello Sanjay! How are you</h1>');
// })
// .listen(8080);
// console.log("http://localhost:8080")

// var http = require('http');
// var dt = require('./myfirstmodule');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write("The date and time is currently: " + dt.myDateTime());
//   res.end();
// }).listen(8080);

// const http= require("http");
// const fs=require("fs")
// http.createServer(function(req, res){
// fs.readFile("new.html", (err, data)=>{
// if (err) return err;
// res.writeHead(200,{"content-type":"text/html"});
// res.write(data)
// res.end()
// })
// })
// .listen(9090);
// console.log("http://localhost:9090")

// const http= require("http");
// const fs=require("fs")
// http.createServer(function(req, res){
// fs.writeFile("new.html", "Hello evryone, Good morinig to all of you, I'm Sky",(err)=>{
// if (err) return err;
// res.writeHead(200,{"content-type":"text/html"});
// res.write("data")
// res.end()
// })
// })
// .listen(9090);
// console.log("http://localhost:9090")

// const http=require("http");
// const fs=require("fs");
// http.createServer(function(req, res){
// fs.open("Third.html", "w",(err, file)=>{
// if(err) return err;
// res.writeHead(200,{"content-type":"text/html"})
// res.write("File Is Created")
// res.end()
// })
// })
// .listen(9090);
// console.log("http://localhost:9090")

// const http=require("http");
// const fs=require("fs");
// http.createServer(function(req, res){
// fs.appendFile("Third.html", "Hello Everyone, I'm Rohan Joshi from Mumbai",(err)=>{
// if(err) return err;
// res.writeHead(200,{"content-type":"text/html"})
// res.write("File Is Created and Updated")
// res.end()
// })
// })
// .listen(9090);
// console.log("http://localhost:9090")

// const http=require("http");
// const fs=require("fs");
// http.createServer(function(req, res){
// fs.appendFile("Fourth.html", "Hello Everyone, I'm Rohan Joshi from Mumbai",(err)=>{
// if(err) return err;
// res.writeHead(200,{"content-type":"text/html"})
// res.write("File Is Created and Updated")
// res.end()
// .listen(9090);
// console.log("http://localhost:9090")

const http = require("http");
const fs = require("fs");
http
  .createServer(function (req, res) {
    fs.readFile("third.html", (err, data) => {
      if (err) return err;
      res.writeHead(200, { "content-type": "text/html" });
      res.write(data);
      res.end();
    });
  })
  .listen(9090);
console.log("http://localhost:9090");
