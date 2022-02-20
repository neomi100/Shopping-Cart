const cartService = require('./cart.service')
const logger = require('../../services/logger.service')


// async function getcart(req, res) {
//     try {
//         // console.log(req.body);
//         const { userId } = req.body
//         // console.log('userId', userId)
//         const cart = await cartService.getcart(userId)
//         logger.debug('controller - new cart created')
//         // console.log('cart controller', cart)
//         res.json(cart)
//     } catch (err) {
//         logger.error('Failed to creat cart ' + err)
//         res.status(500).send({ err: 'Failed to creat cart' })
//     }
// }


async function addToCart(req, res) {
    try {
        const { userId, productsIds } = req.body
        // console.log(userId, productsIds);
        const saveCart = await cartService.addToCart(userId, productsIds)
        logger.debug('controller - add to cart  succeeded')
        console.log('saveCart', saveCart)
        res.json(saveCart)
    } catch (err) {
        logger.error('Failed to add products ' + err)
        res.status(500).send({ err: 'Failed to add products' })
    }
}


// async function updateProductInCart(req, res) {
//     try {
//         const {product, userId } = req.body
//         const updateCart = await cartService.updateProductInCart(userId, product)
//         logger.debug('controller - update product to cart  succeeded')
//         res.json(updateCart)
//     } catch (err) {
//         logger.error('Failed to add products ' + err)
//         res.status(500).send({ err: 'Failed to add products' })
//     }
// }







module.exports = {
    addToCart,
    // getcart,
    // updateProductInCart
}