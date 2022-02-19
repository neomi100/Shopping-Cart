
const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId
const logger = require('../../services/logger.service')
const bcrypt = require('bcrypt')

async function login(username, password) {
    console.log('service');
    try {
        logger.debug(`service - login with username: ${username}`)
        const collection = await dbService.getCollection('users')
        const user = await collection.findOne({ username })
        console.log('user1')
        if (!user) return Promise.reject('Invalid username or password')
        // console.log('user2', user)
        // console.log('user666', password, user.password)
        const match = await bcrypt.compare(password, user.password)
        console.log('user3')
        if (!match) return Promise.reject('Invalid username or password')
        delete user.password
        return user
    } catch (err) {
        logger.error(`while finding user ${username}`, err)
        throw err
    }

}

async function signup(username, password, fullname, imgUrl) {
    try {
        logger.debug(`signup.service - signup with username: ${username}, fullname: ${fullname}`)
        // if (!username || !password || !fullname || !imgUrl) return Promise.reject('fullname, username and password are required!')

        const saltRounds = 10
        const hash = await bcrypt.hash(password, saltRounds)
        const userToSave = {
            username,
            password: hash,
            fullname,
            imgUrl: imgUrl || ('https://robohash.org/' + _makeId() + '?set=set5'),
            productsInCart: []
        }
        const collection = await dbService.getCollection('users')
        await collection.insertOne(userToSave)
        return userToSave
    } catch (err) {
        logger.error('cannot insert user', err)
        throw err
    }
}

function _makeId(length = 5) {
    var text = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}

module.exports = {
    signup,
    login
}




