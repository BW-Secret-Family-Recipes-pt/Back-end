const express = require('express');
const Users = require("../auth/auth-model")
const restricted = require('../auth/auth-middleware')
const {validateUserId} = require('../auth/validation')

const router = express.Router();

router.get('/users',  async(req, res, next) => {
    

    try {
        const users = await Users.find()
        res.json(users)
    } catch (error) {
        next(error)
    }
})

router.get('/users/:id', restricted, async(req, res, next) => {
    

    const user = await Users.findById(req.params.id)
        if(!user){
            res.status(404).json({message: 'Could not find user with given id'})
        }
        
    try {
        res.status(201).json(user)
    } catch (error) {
        next(error)
    }
})

router.put('/users/:id', validateUserId, restricted, async(req, res, next) => {
    try {
        const user = await Users.update(req.params.id, req.body)
        
        res.status(201).json({message: 'Updated users information successfully', user})
        
    } catch (error) {
        next(error)
    }
})

router.delete('/users/:id', validateUserId, restricted, async(req, res, next) => {
    try {
        const user = await Users.remove(req.params.id)
        res.status(200).json({message: "User has been terminated", user})
    } catch (error) {
        next(error)
    }
})

module.exports = router;