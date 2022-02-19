const dbService = require('../../services/db.service')
// const ObjectId = require('mongodb').ObjectId
const logger = require('../../services/logger.service')

async function getcart(userId) {
    try {
        const collection = await dbService.getCollection('carts')
         const cart = (userId)? await collection.findOne({ userId }): null
        if (!cart) {
            const cart = {
                productsIds: [],
                userId: null
            }
            await collection.insertOne(cart)
        }
        console.log('cart', cart)
        return cart
    } catch (err) {
        logger.error('cannot get cart', err)
        throw err
    }
}


async function addToCart(userId, productIds) {
    try {
        const collection = await dbService.getCollection('carts')
        return collection.findOneAndUpdate(
            { userId },
            {
                $setOnInsert: { userId },
                $push: { productsIds: { $each: productIds } }
            },
            { upsert: true }
        ).then(() => {
            return collection.findOne({ userId })
        })
    } catch (err) {
        logger.error(`cannot update user ${user._id}`, err)
        throw err
    }
}


module.exports = {
    getcart,
    addToCart
}