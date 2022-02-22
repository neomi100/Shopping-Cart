
const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')
const bcrypt = require('bcrypt')

async function login(username, password) {
    try {
        logger.debug(`service - login with username: ${username}`)
        const collection = await dbService.getCollection('users')
        const user = await collection.findOne({ username })
        if (!user) return Promise.reject('Invalid username or password')
        const match = await bcrypt.compare(password, user.password)
        if (!match) return Promise.reject('Invalid username or password')
        delete user.password
        return user
    } catch (err) {
        logger.error(`while finding user ${username}`, err)
        throw err
    }

}

async function signup(username, password, imgUrl) {
    try {
        logger.debug(`signup.service - signup with username: ${username}`)
        if (!username || !password) return Promise.reject('username or password are required!')
        const saltRounds = 10
        const hash = await bcrypt.hash(password, saltRounds)
        const userToSave = {
            username,
            password: hash,
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




