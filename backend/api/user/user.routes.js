const express = require('express')
// const {requireAuth, requireAdmin} = require('../../middlewares/requireAuth.middleware')
const {setUser, login, logout} = require('./user.controller')
const router = express.Router()


router.post('/signup', setUser)
router.post('/login', login)
router.post('/logout', logout)


module.exports = router