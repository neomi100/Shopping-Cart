const prod = require('../../config/prod')
const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId
const logger = require('../../services/logger.service')


async function query(){
    try{
        const collection = await dbService.getCollection('products')
       
        const products = await collection.find().toArray()
        return products
    }catch(er){
        logger.error('cannot find products', err)
        throw err
    }
}

async function getByIds(productsIds = []){
    try{
        // productsIds = productsIds || []
        const productsIdsForMongo = productsIds.map(id => ObjectId(id))
        const collection = await dbService.getCollection('products')
        const products = await collection.find({ 
            _id: { $in: productsIdsForMongo }
        }).toArray()
        return products
    }catch(err){
        // console.log('1111');
        logger.error('cannot find products', err)
        throw err
    }
}


module.exports={
    query,
    getByIds
}