const { findBy } = require('../exercises/exercises-model')

const checkExerciseExists = (req, res, next) => {
    const { exercise_name } = req.body
    const checkExercise = findBy({ findBy }).first()
    if(checkExercise.exercise_name === exercise_name) {
        res.status(401).json({ message: 'Exercise already exists '})
    } else {
        next()
    }
}

module.exports = {
    checkExerciseExists
}