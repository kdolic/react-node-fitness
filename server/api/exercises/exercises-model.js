const db = require('../../data/db-config')

const find = () => {
    return db('exercises as e')
        .select('e.exercise_name', 'e.sets', 'e.reps')
}

const findBy = (filter) => {
    return db('exercises as e')
        .select('e.exercise_name', 'e.sets', 'e.reps')
        .where(filter)
        .orderBy('id')
}

const addExercise = async (exercise) => {
    const [id] = await db('exercises').insert(exercise, 'id')
    return findById(id)
}

const updateExercise = (id, exercise) => {
    const exerciseId = id
    return db('exercises')
        .where('id', id)
        .update(exercise)
        .then(() => {
            return db('exercises')
                .where('id', exerciseId)
                .first()
        })
}

const removeExercise = (id) => {
    return db("exericses")
        .where("id", id)
        .del()
        .then(() => {
            return db("exericses")
        })
}

const findById = (id) => {
    return db('exercises as e')
        .select('e.exercise_name', 'e.sets', 'e.reps')
        .where('e.id', id)
        .first()
}

module.exports = {
    find,
    findBy,
    addExercise,
    updateExercise,
    removeExercise
}