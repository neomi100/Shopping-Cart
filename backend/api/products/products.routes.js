const express = require('express')
const { getProducts, getByIds } = require('./products.controller')
const router = express.Router()

router.get('/', getProducts)
router.post('/getByIds', getByIds)

module.exports = router