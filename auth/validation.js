const Users = require('./auth-model')

async function validateUserId(req, res, next) {
    
    const user = await Users.findById(req.params.id)

    if(!user){
        res.status(400).json({message: 'invalid user id'})
    }
    try {
        req.user = user
        next()
    } catch (error) {
        next(error)
    }
    
  }
  
  

  module.exports = {validateUserId}