const db = require('../../data/db-config')

const find = () => {
    return db('users as u')
        .select('u.id', 'u.username', 'u.first_name', 'u.last_name', 'u.email')
}

const findBy = (filter) => {
    return db('users as u')
        .select('u.id', 'u.username', 'u.password', 'u.first_name', 'u.last_name', 'u.email')
        .where(filter)
}

const addUser = async (user) => {
    const [id] = await db('users').insert(user)
    return findById(id)
}

const findById = (id) => {
    return db('users as u')
        .select('u.id', 'u.username', 'u.password', 'u.first_name', 'u.last_name', 'u.email')
        .where('u.id', id)
        .first()
}

module.exports = {
    find,
    findBy,
    addUser, 
    findById
}