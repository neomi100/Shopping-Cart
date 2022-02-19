const logger = require('../../services/logger.service')
const productsService =require('./products.service')

async function getProducts(req, res) {
    try {
        const products = await productsService.query()
        res.send(products)
    } catch (err) {
        logger.error('Cannot get products', err)
        res.status(500).send({ err: 'Failed to get products' })
    }
}


async function getByIds(req, res) {
    try {
        const {productsIds} = req.body
        const products = await productsService.getByIds(productsIds)
        console.log('leeeeeee',products);
        res.send(products)
    } catch (err) {
        logger.error('Failed to get products', err)
        res.status(500).send({ err: 'Failed to get products' })
    }
}
// async function saveCart(req, res) {
//     try {
//         const cart = req.body
//         const cartToSave = await userService.save(cart)
//         res.send(cartToSave)
//     } catch (err) {
//         logger.error('Failed to update user', err)
//         res.status(500).send({ err: 'Failed to update user' })
//     }
// }




module.exports = {
    getProducts,
    getByIds 
}
