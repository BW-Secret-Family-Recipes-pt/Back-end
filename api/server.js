const express = require('express');
const helmet = require('helmet');

const authRouter = require('../auth/auth-router')


const server = express();

server.use(helmet());
server.use(express.json());
server.use('/api', authRouter);

server.use((err, req, res, next)=>{
    console.log(err)
    res.status(500).json({
      message: 'Oops something went wrong',
    })
  })


module.exports = server;