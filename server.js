const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const http = require("http");
const path = require("path");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "dist")));

// CORS - Cross Origin Resource Sharing
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

const port = process.env.PORT || "3100";
app.set("port", port);

const server = http.createServer(app);

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

// server.listen(port);
server.listen(port, function() {
  console.log("Running on " + app.get("port"));
});
