const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())

// Handle GET requests to / route
server.get("/", (req, res) => {
    res.json({ message: "*** react-node-fitness: API running ***" });
  });

  server.use((err, req, res) => {
    return res.status(500).json({ 
      error: "ERROR: Problem with communicating to server",
      message: err.message,
      stack: err.stack
     })
  })

  module.exports = server;