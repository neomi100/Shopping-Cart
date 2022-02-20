const express = require('express')
const {addToCart, getcart, updateProductInCart } = require('./cart.controller')

const router = express.Router()

// router.get('/getCart', getcart)
// router.post('/getCart', getcart)
router.post('/addToCart', addToCart)
// router.put('/updateProductInCart', updateProductInCart)


module.exports = router