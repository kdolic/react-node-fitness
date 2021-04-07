const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('./auth/auth-router')
const exerciseRouter = require('./exercises/exercises-router')
const goalRouter = require('./goals/goals-router')

const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())

server.use('/api/auth', authRouter)
server.use('/api/exercises', exerciseRouter)
server.use('/api/goals', goalRouter)

// Handle GET requests to / route
server.get("/", (req, res) => {
    res.json({ message: "*** react-node-fitness: API running ***" });
  });

  server.use((err, req, res, next) => {
    return res.status(500).json({ 
      error: "ERROR: Problem with communicating to server",
      message: err.message,
      stack: err.stack
     })
  })

  module.exports = server;