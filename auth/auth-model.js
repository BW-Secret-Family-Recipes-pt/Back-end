const db = require("../data/dbConfig")
const bcrypt = require("bcryptjs")


const add = async (user) => {
    user.password = await bcrypt.hash(user.password, 12);
    const [id] = await db("users").insert(user);

    return findById(id);
}

const find = () => {
    return db("users")
        .select("id", "username", "email")
}

 function findRecipe(id){
    return db('recipes')
    .join('users', 'users.id', 'recipes.user_id')
    .where({ user_id: id})
    .select('title', 'source', 'ingredients', 'instructions', "category")
}

async function adduserRecipe(userId, recipe){
    const [id] = await db('recipes')
    .join('users', 'users.id', 'recipes.user_id')
    .insert(recipe)
    .select('*')
    .where(userId, recipe.user_id)

    return findByRecipeId(id);
}

function findByRecipeId(id) {
    return db('recipes')
        .where({ id })
        .first()
}

const findBy = (filter) => {
    return db("users")
        .select("id", "username", "password", "email")
        .where(filter)
}

const findById = (id) => {
    return db("users")
        .select("id", "username", "email", "password")
        .where({ id })
        .first()
}

function update(id, changes) {
    return db('users')
      .where({ id })
      .update(changes);
  }

  function remove(id) {
    return db('users')
      .where({ id })
      .del();
  }


module.exports = {
    add,
    find,
    findBy,
    findById,
    update,
    remove,
    findRecipe,
    adduserRecipe,
}