const cartService = require('./cart.service')
const logger = require('../../services/logger.service')


async function getcart(req, res) {
    try {
        const { userId } = req.body
        const cart = await cartService.getcart(userId)
        logger.debug('controller - new cart created')
        res.json(cart)
    } catch (err) {
        logger.error('Failed to creat cart ' + err)
        res.status(500).send({ err: 'Failed to creat cart' })
    }
}


async function addToCart(req, res) {
    try {
        const { userId, productsIds } = req.body
        const saveCart = await cartService.addToCart(userId, productsIds)
        logger.debug('controller - add to cart  succeeded')
        res.json(saveCart)
    } catch (err) {
        logger.error('Failed to add products ' + err)
        res.status(500).send({ err: 'Failed to add products' })
    }
}


module.exports = {
    addToCart,
    getcart,
}