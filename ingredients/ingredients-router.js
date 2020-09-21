const express = require('express');
const validateRecipeId = require('./validateRecipeId')
const Ingredients = require('./ingredients-model');


const router = express.Router();



// GET Ingredients
router.get('/ingredients', async (req, res, next) => {
    try {
        const ingredients = await Ingredients.find()
        res.status(200).json(ingredients)
    } catch (error) {
        next(error)
    }
})


// GET Ingredients by id
router.get('/ingredients/:id', async(req, res, next) => {
    
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
router.post('/ingredients', async(req, res, next) => {
    
    try {
        const ingredient = await Ingredients.add(req.body)
        res.status(201).json(ingredient)
    } catch (error) {
        next(error)
    }
})

// PUT Ingredient
router.put('/ingredients/:id', validateRecipeId, async(req, res, next) => {
    
    try {
        const changes = Ingredients.update(req.params.id, req.body)
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
router.delete('/ingredients/:id', validateRecipeId, async(req, res, next) => {
    try {
        const count = Ingredients.remove(req.params.id)
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