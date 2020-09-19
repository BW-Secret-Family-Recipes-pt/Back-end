const Recipes = require('./recipes-model')


async function validateRecipeId(req, res, next) {
    const { id } = req.params;
 
    

    try {
        const recipe = await Recipes.findRecipeById(id)
        if(recipe){
            req.recipe = recipe
            next();
        }else{
            res.status(400).json({ message: 'Recipe ID not validated' })
        }
    } catch (error) {
        next(error)
    }
 }

 module.exports = {validateRecipeId};