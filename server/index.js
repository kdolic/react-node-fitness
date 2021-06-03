require('dotenv').config()

const path = require('path');
const express = require("express");

const PORT = process.env.PORT || 3001;

const server = require('./api/server');

// Have Node serve the files for our built React app
server.use(express.static(path.join(__dirname, '../client/build')));

server.get("/api", (req, res) => {
  res.json({ message: "*** react-node-fitness: API running ***" });
});

// All other GET requests not handled before will return our React app
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});