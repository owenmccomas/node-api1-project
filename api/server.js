// BUILD YOUR SERVER HERE

// 'import' or 'require' express
const express = require('express')


// define server using express
const server = express()

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