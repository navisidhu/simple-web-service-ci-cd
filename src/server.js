const express = require("express");
const app = require("./app");

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Function to handle graceful shutdown
function gracefulShutdown() {
  console.log("Shutting down gracefully...");
  process.env.SHUTTING_DOWN = true;
  server.close((err) => {
    if (err) {
      console.error("Error shutting down server:", err);
      process.exit(1);
    }
    console.log("Server shut down gracefully.");
    process.exit(0);
  });
}

// Graceful Shutdown on SIGTERM and SIGINT
process.on("SIGTERM", gracefulShutdown);
process.on("SIGINT", gracefulShutdown);
