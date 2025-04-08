const http = require("http");
const formidable = require("formidable");
const fs = require("fs");
const path = require("path");

http
  .createServer((req, res) => {
    if (req.url === "/fileupload") {
      const form = new formidable.IncomingForm();

      form.parse(req, (err, fields, files) => {
        if (err) {
          res.write("Error parsing form");
          return res.end();
        }
        console.log(files);

        const file = files.filetoupload;

        if (!file || !file[0] || !file[0].filepath) {
          res.write("No file uploaded or invalid file structure.");
          return res.end();
        }

        const oldpath = file[0].filepath;
        const fileExt = path.extname(file[0].originalFilename).toLowerCase();
        const allowedExtensions = [".pdf", ".jpg", ".jpeg", ".png"];
        if (!allowedExtensions.includes(fileExt)) {
          res.write("Only PDF, JPG, and PNG files are allowed.");
          return res.end();
        }
        const uploadDir = "C:/Users/Public";
        const newpath = path.join(uploadDir, file[0].originalFilename);
        fs.rename(oldpath, newpath, (err) => {
          if (err) {
            res.write("Error moving file");
            return res.end();
          }
          res.write("File uploaded and moved successfully");
          res.end();
        });
      });

      return;
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`
      <form action='/fileupload' method='post' enctype="multipart/form-data">
        <input type="file" name="filetoupload"/>
        <input type="submit" value="Upload File"/>
      </form>
    `);
    return res.end();
  })
  .listen(9191);

console.log("Server running at http://localhost:9191");
