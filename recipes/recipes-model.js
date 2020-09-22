const db = require('../data/dbConfig')

function find() {
    return db('recipes')
}

function findById(id) {
    return db('recipes')
        .where({ id })
        .first()
}

async function add(recipe) {
    const [id] = await db('recipes')
        .insert(recipe)
    return findById(id)
}

async function update(id, changes) {
    const recipe = await db('recipes')
        .where({ id })
        .update(changes)
    return findById(recipe)
}

function remove(id) {
    return db('recipes')
        .where({ id })
        .del()
}
module.exports = {
    find,
    findById,
    add,
    update,
    remove,
}