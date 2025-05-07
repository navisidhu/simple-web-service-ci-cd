const express = require("express");
const path = require("path");

const app = express();

// Serve the HTML file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

module.exports = app;
