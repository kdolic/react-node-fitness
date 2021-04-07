const express = require('express')
const router = express.Router()
const Exercise = require('./exercises-model')
const { checkExerciseExists } = require('../middleware/exercises-middleware')

router.get('/', (req, res, next) => {
    Exercise.find()
        .then(exercise => {
            res.status(200).json(exercise)
        })
        .catch(next())
})

router.get('/:id', (req, res, next) => {
    const  { id } = req.params

    Exercise.findById(id)
        .then(exercise => {
            if(exercise) {
                res.status(200).json(exercise)
            } else {
                res.status(404).json({ message: 'Could not find exercise with given ID '})
            }
        })
        .catch(next())
})

router.post('/', checkExerciseExists, (req, res, next) => {
    Exercise.addExercise(req.body)
        .then(([id]) => {
            return Exercise.findById(id)
        })
        .then(data => {
            res.status(201).json(data)
        })
        .catch(next())
})

router.put('/:id', (req, res, next) => {
    Exercise.updateExercise(req.params.id, req.body)
        .then(exercise => {
            if(!exercise) {
                res.status(404).json({ message: 'Could not find exercise with given ID '})
            } else {
                return Exercise.findById(req.params.id)
            }
        })
        .then(updatedExercise => {
            res.status(200).json(updatedExercise)
        })
        .catch(next())
})

router.delete('/:id', (req, res, next) => {
    const { id } = req.params

    Exercise.removeExercise(id)
        .then(deletedExercise => {
            if(deletedExercise) {
                res.json({ removed: deletedExercise })
            } else {
                res.status(404).json({ message: 'Could not find exercise with given ID '})
            }
        })
        .catch(next()) 
})

module.exports = router
