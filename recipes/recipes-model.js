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
        .join('recipes', 'recipes.id', 'ingredients.recipe_id')
        .where({ recipe_id: recipe_id })
        .select('recipe_id', 'recipe_name', 'ingredient_name')
}

async function add(recipe) {
    const [id] = await db('recipes').insert(recipe, 'id')
    return findRecipeById(id)
}

async function update(id, changes) {
    const count = await db('recipes')
        .where({ id })
        .update(changes)

    return count ? findRecipeById(id) : undefined;
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