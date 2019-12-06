const express = require("express");

const helmet = require("helmet");

const server = express();

server.use(express.json());
server.use(helmet());

server.get("/", (req, res) => {
  res.status(200).json({ message: "The server is running 🤙" });
});

// server.use("/api/projects");
// server.use("/api/actions");

module.exports = server;
