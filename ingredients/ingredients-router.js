const express = require('express');
const validateRecipeId = require('./validateRecipeId')
const Ingredients = require('../recipes/recipes-model');



const router = express.Router();






// GET Ingredients by id
router.get('/recipes/:id/ingredients/:id', async(req, res, next) => {
    
    try {
        const ingredient = await Ingredients.findIngredientById(req.params.id)
        if(ingredient){
            res.status(201).json(ingredient)
        }else{
            res.status(404).json({ message: 'Could not find ingredient with specified ID.' })
        }
    } catch (error) {
        next(error)
    }
})

// POST a new ingredient
router.post('/recipes/:id/ingredients', async(req, res, next) => {
    
    try {
        const ingredient = await Ingredients.addIngredients(req.body)
        res.status(201).json(ingredient)
    } catch (error) {
        next(error)
    }
})

// PUT Ingredient
router.put('/recipes/:id/ingredients/:id', validateRecipeId, async(req, res, next) => {
    
    try {
        const changes = Ingredients.updateIngredients(req.params.id, req.body)
        if(req.body){
            res.status(200).json(req.body)
        }else{
            res.status(404).json({ message: 'Could not find ingredient ID' })
        }
    } catch (error) {
        next(error)
    }
})

// DELETE a ingredient
router.delete('/recipes/:id/ingredients/:id', validateRecipeId, async(req, res, next) => {
    
    // const { id } = req.params;

    // Ingredients.removeIngredients(id)
    //      .then(count => {
    //           if (count > 0) {
    //                res.status(200).json({ message: 'ingredient successfully deleted' });
    //           } else {
    //                res.status(404).json({ message: 'ingredient not found' });
    //           }
    //      })
    //      .catch(err => {
    //           console.log(err)
    //           res.status(500).json({ message: 'Server Error: Failed to delete ingredient' })
    //      })
    
    
    
    try {
        const count = Ingredients.removeIngredients(req.params.id)
        if(count > 0){
            res.status(200).json({ message: 'ingredient successfully deleted' });
        }else{
            res.status(404).json({ message: 'ingredient not found' });
        }
    } catch (error) {
        next(error)
    }
})



module.exports = router;