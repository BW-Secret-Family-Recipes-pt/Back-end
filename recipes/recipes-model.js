const db = require('../data/dbConfig')

function find() {
    return db('recipes')
}

function findRecipeById(id) {
    return db('recipes')
        .where({ id })
        .first()
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

// Ingredients
function findIngredientsByRecipe(recipe_id) {
    return db('ingredients')
        .join('recipes', 'recipes.id', 'ingredients.recipe_id')
        .where({ recipe_id: recipe_id })
        .select('recipe_id', 'recipe_name', 'ingredient_name')
}

function findIngredients() {
    return db('ingredients')
}

function findIngredientsByRecipe(recipe_id) {
    return db('ingredients')
        .join('recipes', 'recipes.id', 'ingredients.recipe_id')
        .where({ recipe_id: recipe_id })
        .select('recipe_id', 'recipe_name', 'ingredient_name')
}

function findIngredientById(id) {
    return db('ingredients').where({ id }).first()
}

async function addIngredients(ingredient) {

    const [id] = await db('ingredients').insert(ingredient, 'id')
   return findIngredientById(id)

}


async function updateIngredients(id, changes) {
   const count = await db('ingredients')
       .where({ id })
       .update(changes)

   return count ? findRecipeById(id) : undefined;
}

function removeIngredients(id) {
   return db('ingredients')
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
    addIngredients,
    removeIngredients,
    findIngredients,
    findIngredientById,
    updateIngredients,
}