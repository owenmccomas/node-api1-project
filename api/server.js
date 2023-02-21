// BUILD YOUR SERVER HERE

// 'import' or 'require' express
const express = require('express')

const User = require('./users/model')

// define server using express
const server = express()

server.get('/api/users', (req, res) => {
    User.find()
        .then(users => {
            res.json(users)
        })
        .catch(err => {
            res.status(500).json({
                message: 'error getting users',
                err: err.message,
                stack: err.stack,
            })
        })
})

server.get('/api/users/:id', (req, res) => {
        User.findById(req.params.id)
        .then(user => {
            res.json(user)
        })
        .catch(err => {
            res.status(500).json({
                message: 'error getting user',
                err: err.message,
                stack: err.stack,
            })
        })
})

// port defined
const port = 8000

server.use('*', (req, res) => {
    res.status(404).json({
        message: 'not found'
    })
})

server.get('/', (req, res) => {

})

module.exports = server; // EXPORT YOUR SERVER instead of {}