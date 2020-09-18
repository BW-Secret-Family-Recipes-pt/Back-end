const express = require('express');
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const Users = require("./auth-model")
const restricted = require('./auth-middleware')
const {validateUserId} = require('./validation')

const router = express.Router();

router.get('/users', async(req, res, next) => {
    

    try {
        const users = await Users.find()
        res.json(users)
    } catch (error) {
        next(error)
    }
})

router.get('/users/:id', async(req, res, next) => {
    

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

router.put('/users/:id', validateUserId, async(req, res, next) => {
    try {
        const user = await Users.update(req.params.id, req.body)
        
        res.status(201).json({message: 'Updated users information successfully', user})
        
    } catch (error) {
        next(error)
    }
})

router.delete('/users/:id', validateUserId, async(req, res, next) => {
    try {
        const user = await Users.remove(req.params.id)
        res.status(200).json({message: "User has been terminated", user})
    } catch (error) {
        next(error)
    }
})

router.post("/register", async (req, res, next) => {
    const { username, password, email } = req.body
  
    if (!username || !password || !email) {
      return res.status(400).json({ message: "Enter username, password and email!" })
    }
  
    try {
      const user = await Users.findBy({ username }).first()
  
      if (user) {
        res.status(409).json({ message: "This username is not available" })
      }
      res.json(await Users.add(req.body))
    }
    catch (err) {
      next(err)
    }
  })

  router.post('/login', async (req, res, next) => {
    // implement login
    try {
      const { username } = req.body
      const user = await Users.findBy({ username: username }).first()
  
      console.log(user)
      if (!user) {
        res.status(401).json({ message: "Invalid username" })
      }
  
      const { password } = req.body
      const validPassword = await bcrypt.compareSync(password, user.password)
  
      if (!validPassword) {
        res.status(401).json({ message: "Invalid password" })
      }
  
      const token = {
        userId: user.id,
        username: user.username
      }
  
      res.json({
        message: `Welcome ${user.username}!`,
        token: jwt.sign(token, process.env.JWT_SECRET),
      });
    }
    catch (err) {
      console.log(err)
      next(err)
    }
  });



module.exports = router;