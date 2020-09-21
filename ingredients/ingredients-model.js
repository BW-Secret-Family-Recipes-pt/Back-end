const db = require('../data/dbConfig');


function find() {
     return db('ingredients')
}

function findIngredientById(id) {
     return db('ingredients').where({ id }).first()
}

async function add(ingredient) {

    const [id] = await db('ingredients').insert(ingredient, 'id')
    return findIngredientById(id)

}

function findRecipeById(id) {
     return db('recipes').where({ id }).first()
}

async function update(id, changes) {
    const count = await db('ingredients')
        .where({ id })
        .update(changes)

    return count ? findRecipeById(id) : undefined;
}

function remove(id) {
    return db('ingredients')
    .where({ id })
    .del()
}

module.exports = {
    find,
    add,
    update,
    remove,
    findIngredientById,
    findRecipeById
};