const express = require('express');
const router = express.Router();
const knex = require('../data/dbConfig')

router.get('/', (req, res) => {
    knex
        .select('*')
        .from('accounts')
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

router.post('/', (req, res) => {
    knex
        .insert(req.body, 'id')
        .into('accounts')
        .then(added => {
            res.status(200).json(added)
        })
        .catch(err => {
            res.status(400).json(err)
        })
})

router.delete('/:id', (req, res) => {
    knex('accounts')
        .where({ id: req.params.id })
        .del()
        .then(delet => {
            res.status(200).json(delet)
        })
        .catch(err => {
            res.status(400).json(err)
        })
})

router.put('/:id', (req, res) => {
    const postContent = req.body;
    knex('accounts')
        .where({ id: req.params.id })
        .update(postContent)
        .then(update => {
            res.status(200).json(update)
        })
        .catch(err => {
            res.status(400).json(err)
        })


})



module.exports = router;