const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const morgan = require("morgan");
const path = require("path");

// Create an Express application
const app = express();

// Security middleware
app.disable("x-powered-by");
app.use(helmet());
app.use(cors());
// Rate limiter: limit repeated requests
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100, // Limit each IP to 100 requests per windowMs
  standardHeaders: "draft-8",
  legacyHeaders: false,
});
app.use(limiter);

// Prevent large payloads
// Limit the size of incoming requests to 10kb
app.use(express.json({ limit: "10kb" }));

// Logging
app.use(morgan("combined"));

// Handle graceful shutdown of existing connections
app.use((req, res, next) => {
  if (process.env.SHUTTING_DOWN) {
    res.setHeader("Connection", "close");
  }
  next();
});

// Serve the HTML file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

module.exports = app;
