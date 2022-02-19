const express = require('express')
const {addToCart, getcart } = require('./cart.controller')

const router = express.Router()

router.get('/getCart', getcart)
router.post('/addToCart', addToCart)


module.exports = router