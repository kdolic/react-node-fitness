const express = require('express')
const router = express.Router()
const Auth = require('./auth-model')
const bcrypt =  require('bcryptjs')
const jwt = require('jsonwebtoken')
const { jwtSecret } = require('../../config/secrets')
const { checkUsernameExists} = require('../middleware/auth-middleware')

router.post("/register", (req,res, next) => {
    const credentials = req.body

    if(credentials) {
        const rounds = process.env.BCRYPT_ROUNDS || 8

        const hash = bcrypt.hashSync(credentials.password, rounds)

        credentials.password = hash

        Auth.addUser(credentials)
        .then(user => {
            res.status(201).json(user)
        })
        .catch(next())
    } else {
        res.status(400).json({ message: 'Username and password Required'})
    }
})

router.post("/login", checkUsernameExists, (req,res, next) => {
    const user = req.body

    if(user) {
        const { username, password } = req.body

        Auth.findBy({ username: username })
        .then(([user]) => {
            if(user && bcrypt.compareSync(password, user.password)) {
                const token = buildToken(user)
                res.status(200).json({ message: `Welcome, ${user.username}`, token: token})
            }
        })
        .catch(next())
    } else {
        res.status(400).json({ message: 'Please provide username and password'})
    }
})

const buildToken = (user) => {
    const payload = {
        subject: user.id,
        username: user.username,
    }

    const configuration = {
        expiresIn: '8hrs'
    }

    return jwt.sign(payload, jwtSecret, configuration)
}

module.exports = router