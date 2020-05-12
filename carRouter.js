const express = require('express');

const router = express.Router();

const db = require('./data/dbConfig.js');

router.post('/', (req,res) => {
    db('cars').insert(req.body)
        .then(cars => {
            console.log("cars: ", cars)
            res.status(201).json(cars)
        })
        .catch(error => {
            res.status(500).json(error)
        })

})

router.get('/', (req,res) => {
    db('cars')
        .then(cars => {
            console.log(cars)
            res.status(201).json(cars)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

module.exports = router;