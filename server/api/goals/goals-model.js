const db = require('../../data/db-config')

const find = () => {
    return db('goals as g')
        .select('g.goals')
}

const findBy = (filter) => {
    return db('goals as g')
        .select('g.goal_name')
        .where(filter)
        .orderBy('id')
}

const addGoal = async (goal) => {
    const [id] = await db('goals').insert(goal, 'id')
    return findById(id)
}

const removeGoal = (id) => {
    return db("goals")
        .where("id", id)
        .del()
        .then(() => {
            return db("goals")
        })
}

const findById = (id) => {
    return db('goals as g')
        .select('g.goal_name')
        .where('g.id', id)
        .first()
}

module.exports = {
    find,
    findBy,
    addGoal,
    removeGoal
}