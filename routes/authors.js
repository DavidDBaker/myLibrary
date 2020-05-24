const express = require('express')
const router = express.Router()

// AUTHORS ROUTES
router.get('/', (req, res) => {
    res.render('authors/index')
})

// NEW AUTHOR ROUTEgit status
router.get('/new', (req, res) => {
    res.render('authors/new')
})

// CREATE AUTHOR ROUTE
router.post('/', (req, res) => {
    res.render('Create')
})

module.exports = router