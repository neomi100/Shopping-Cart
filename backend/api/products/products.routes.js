const express = require('express')
const { getProducts, getByIds} = require('./products.controller')

const router = express.Router()
router.get('/', getProducts)
// router.put('/saveCart', saveCart)
router.post('/getByIds', getByIds)

module.exports = router