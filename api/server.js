require('dotenv').config()
const express = require('express');
const helmet = require('helmet');
const userRouter = require('../users/user-router')
const authRouter = require('../auth/auth-router')
const recipeRouter = require('../recipes/recipes-router')
const restricted = require('../auth/auth-middleware')

const cors = require('cors')


const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use('/api', authRouter);
server.use('/api', userRouter);
server.use('/api/recipes', restricted, recipeRouter);


server.use((err, req, res, next)=>{
    console.log(err)
    res.status(500).json({
      message: 'Oops something went wrong',
    })
  })


module.exports = server;