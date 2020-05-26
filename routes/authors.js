const express = require('express')
const router = express.Router()
const Author = require('../models/author').default

// AUTHORS ROUTES
router.get('/', (req, res) => {
    res.render('authors/index')
})

// NEW AUTHOR ROUTE
router.get('/new', (req, res) => {
    res.render('authors/new', { author: new Author() })
})

// CREATE AUTHOR ROUTE
router.post('/', (req, res) => {
    res.render(req.body.name)
})

module.exports = router