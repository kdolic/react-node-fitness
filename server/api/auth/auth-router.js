const express = require('express')
const router = express.Router()
const Auth = require('./auth-model')
const bcrypt =  require('bcryptjs')
const jwt = require('jsonwebtoken')
const { jwtSecret } = require('../../config/secrets')

router.post("/register", (req,res) => {

})

router.post("/login", (req,res) => {

})