const express = require('express');
const router = express.Router();

const Recipes = require('./recipes-model')

router.get('/', async(req, res, next)=> {
    try {
        const recipes = await Recipes.find();
        res.status(200).json(recipes);
    } catch (error) {
        next(error)
    }
})

router.get('/:id', async(req, res, next)=> {
    try {
        const recipe = await Recipes.findById(req.params.id);
        if(recipe){
            res.status(201).json(recipe);
        }else{
            res.status(404).json({message: 'Could not find recipe with provided ID'})
        }
    } catch (error) {
        next(error)
    }
})

router.post('/', async(req, res, next) =>{
    try {
        const recipe = await Recipes.add(req.body)
        res.status(201).json(recipe)
    } catch (error) {
        next(error)
    }
})

router.put('/:id', async(req, res, next) => {
    try {
        const recipe = await Recipes.update(req.params.id, req.body)
        if(recipe){
            res.status(201).json(recipe)
        }else{
            res.status(400).json({message: 'Could not update selected recipe'})
        }
    } catch (error) {
        next(error)
    }
})

router.delete('/:id', async(req, res, next) => {
    try {
        const count = await Recipes.remove(req.params.id)
        if(count > 0){
            res.status(201).json({message: "Selected recipe has been terminated"})
        }else{
            res.status(400).json({message: "Couldn't find the recipe"})
        }
    } catch (error) {
        next(error)
    }
})


module.exports = router;