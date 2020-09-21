const express = require('express');
const Recipes = require('./recipes-model')
const router = express.Router()
const {validateRecipeId} = require('./recipeValidation')

router.get('/recipes', async(req, res, next) => {
    
    try {
        const recipes = await Recipes.find()
            res.status(200).json(recipes)
    } catch (error) {
        next(error)
    }
})

router.get('/recipes/:id', async(req, res, next) => {
    try {
        const recipe = await Recipes.findRecipeById(req.params.id)
        if(recipe){
            res.status(201).json(recipe)
        }else{
            res.status(404).json({message: 'could not find recipe with selected id'})
        }
    } catch (error) {
        next(error)
    }
})

router.get('/recipes/:id/ingredients',  async(req, res, next) => {
    const {id} = req.params
    try {
        const ingredients = await Recipes.findIngredientsByRecipe(id)
        if(ingredients){
            res.status(201).json(ingredients)
        }else{
            res.status(404).json({message: 'could not find ingredients with selected recipe id'})
        }
    } catch (error) {
        next(error)
    }
})

router.post('/recipes/:id/ingredients/', async(req, res, next) => {
    
    try {
        const ingredient = await Recipes.addIngredients(req.body)
        res.status(201).json(ingredient)
    } catch (error) {
        next(error)
    }
})

router.post('/recipes', async(req, res, next)=> {
    try {
        const recipe = await Recipes.add(req.body)
        console.log(recipe)
        res.status(201).json(recipe)
    } catch (error) {
        next(error)
    }

    
})

router.put('/recipes/:id', validateRecipeId, async(req, res, next) => {
    try {
        const recipe = await Recipes.update(req.params.id, req.body)
        if(recipe){
            res.status(200).json(recipe)
        }else{
            res.status(404).json({ message: 'Could not find recipe with provided recipe ID' })
        }
    } catch (error) {
        next(error)
    }
})

router.delete('/recipes/:id', validateRecipeId, async(req, res, next) => {
    try {
        const count = await Recipes.remove(req.params.id)
        if(count > 0){
            res.status(200).json({message: 'Recipe was terminated'})
        }else{
            res.status(400).json({message: 'Could not find recipe'})
        }
    } catch (error) {
        next(error)
    }
})





module.exports = router;