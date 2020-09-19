const db = require('../data/dbConfig')

function find() {
    return db('recipes')
}

function findRecipeById(id) {
    return db('recipes')
        .where({ id })
        .first()
}

function findIngredientsByRecipe(recipe_id) {
    return db('ingredients')
        .join('recipes', 'recipe_id', 'ingredients.recipe_id')
        .where({ recipe_id: recipe_id })
        .select('recipe_name', 'ingredient_name')
}

async function add(recipe) {
    const [id] = await db('recipes').insert(recipe)
    return findRecipeById(id)
}

async function update(id, changes) {
    const [id] = await db('recipes').where({ id }).update(changes)

    return findRecipeById(id)
}

function remove(id) {
    return db('recipes')
        .where({ id })
        .del()
}

module.exports = {
    find,
    findRecipeById,
    findIngredientsByRecipe,
    add,
    update,
    remove,
}