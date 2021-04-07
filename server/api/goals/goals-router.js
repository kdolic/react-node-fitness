const express = require('express')
const router = express.Router()
const Goal = require('./goals-model')

router.get('/', (req, res, next) => {
    Goal.find()
        .then(goal => {
            res.status(200).json(goal)
        })
        .catch(next())
})

router.get('/:id', (req, res, next) => {
    const  { id } = req.params

    Goal.findById(id)
        .then(goal => {
            if(goal) {
                res.status(200).json(goal)
            } else {
                res.status(404).json({ message: 'Could not find goal with given ID '})
            }
        })
        .catch(next())
})

router.post('/', (req, res, next) => {
    Goal.addGoal(req.body)
        .then(([id]) => {
            return Goal.findById(id)
        })
        .then(data => {
            res.status(201).json(data)
        })
        .catch(next())
})

router.delete('/:id', (req, res, next) => {
    const { id } = req.params

    Goal.removeGoal(id)
        .then(deletedGoal => {
            if(deletedGoal) {
                res.json({ removed: deletedGoal })
            } else {
                res.status(404).json({ message: 'Could not find goal with given ID '})
            }
        })
        .catch(next()) 
})

module.exports = router