const express = require("express");

const helmet = require("helmet");

const server = express();

const projectRouter = require("../projects-router");
const actionsRouter = require("../actions-router");

server.use(express.json());
server.use(helmet());

server.get("/", (req, res) => {
  res.status(200).json({ message: "The server is running 🤙" });
});

server.use("/api/projects", projectRouter);
server.use("/api/actions", actionsRouter);

module.exports = server;
