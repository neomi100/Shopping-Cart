const dbService = require('../../services/db.service')
// const ObjectId = require('mongodb').ObjectId
const logger = require('../../services/logger.service')

// async function getcart(userId) {
//     try {
//         const collection = await dbService.getCollection('carts')
        
//         // console.log('collection', collection)
//          const cart = await collection.findOne({ userId })
//          if(cart)return cart
//         if (!cart) {
//             const newCart = {
//                 productsIds: [],
//                 userId: userId
//             }
//             await collection.insertOne(newCart)
//             return newCart
//         }
//     } catch (err) {
//         logger.error('cannot get cart', err)
//         throw err
//     }
// }


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
        // .then(() => {
        //     console.log(collection.findOne({ userId }));
        //     return collection.findOne({ userId })
        // })
    } catch (err) {
        logger.error(`cannot update user ${user._id}`, err)
        throw err
    }
}


// async function updateProductInCart( product, userId) {
//     const {ProductTitle, Description, ProductImage, PriceLabel, price, amount}=product
//     try {
//         const updateProduct={
//             ProductTitle,
//             Description,
//             ProductImage,
//             PriceLabel,
//             price,
//             amount,
//         }
//         // למצוא את העגלת יוזר ולעדכן את המוצר שכבר קיים אצלו בעגלה
     
//         const collection = await dbService.getCollection('carts')
//         return collection.findOneAndUpdate(
//             { userId },
//             {
//                 $setOnInsert: { userId },
//                 $push: { productsIds: { $each: productIds } }
//             },
//             { upsert: true }
//         ).then(() => {
//             return collection.findOne({ userId })
//         })
//     } catch (err) {
//         logger.error(`cannot update user ${user._id}`, err)
//         throw err
//     }
// }

module.exports = {
    // getcart,
    addToCart,
    // updateProductInCart
}