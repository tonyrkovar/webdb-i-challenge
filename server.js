const express = require('express');

const db = require('./data/dbConfig.js');

const projectRouter = require('./endpoints/projectRouter')

const server = express();


server.get('/', (req, res) => {
    res.status(200).json("Get runn right")
})

server.use(express.json());
server.use('/api/router', projectRouter)


module.exports = server;