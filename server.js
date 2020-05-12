const express = require('express');
//car router
const carRouter = require('./carRouter.js');

const server = express();
server.use(express.json());

server.use('/cars', carRouter);


module.exports = server;