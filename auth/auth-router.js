const express = require('express');
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const Users = require("./auth-model")
const restricted = require('./auth-middleware')
const {validateUserId} = require('./validation')

const router = express.Router();



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

      const user_email = await Users.findBy({email}).first()
      if(user_email){
        res.status(409).json({message: "This email is not available"})
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