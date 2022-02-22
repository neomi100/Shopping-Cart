const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')

async function getcart(userId) {
    try {
        const collection = await dbService.getCollection('carts')
        const cart = await collection.findOne({ userId })
        if (cart) return cart
        if (!cart) {
            const newCart = {
                productsIds: [],
                userId: userId
            }
            await collection.insertOne(newCart)
            return newCart
        }
    } catch (err) {
        logger.error('cannot get cart', err)
        throw err
    }
}


async function addToCart(userId, productsIds) {
    try {
        const collection = await dbService.getCollection('carts')
        return collection.findOneAndUpdate(
            { userId },
            {
                $setOnInsert: { userId },
                $push: { productsIds: { $each: productsIds } }
            },
            { upsert: true }
        )
    } catch (err) {
        logger.error(`cannot add to cart ${user._id}`, err)
        throw err
    }
}

module.exports = {
    getcart,
    addToCart,
}