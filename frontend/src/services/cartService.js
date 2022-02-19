import axios from 'axios'

const BASE_URL = process.env.NODE_ENV === 'production' ?
    '/api/' :
    '//localhost:3030/api/'
export const cartService = {
    addToCart,
    getCart,
    getCartWithProducts
}

const cart = JSON.parse(localStorage.getItem('CART')) || [];

async function addToCart(productId, userId) {
    if (userId) { //user logged in
        await axios.post(`${BASE_URL}carts/addToCart`, { productId, userId });
    } else { // no user
        cart.push(productId)
        localStorage.setItem('CART', JSON.stringify(cart) || []);
    }
}

async function getCart(userId) {
    const res = await axios.get(`${BASE_URL}carts/addToCart`, userId)
    return res.data
}

function getCartWithProducts(cart) {
    const producrsId = cart.map((product) => product._id)
    addToCart(producrsId,)
}

// function createEmptyCart() {
//    const cart={
//         productsIds: [],
//         _id:_makeId(),
//         userId:''
//    }
// gCart.push(cart)
//    return cart
// }

// function findCart(id) {
//     const cart = gCart.find(cart => cart.userId === id)
//     if (!cart) {
//         const cart = {
//             productsIds: [],
//             _id: _makeId(),
//             userId: id
//         }
//         return cart

//     }

//     return cart
// }

// function _makeId(length = 5) {
//     var text = ''
//     var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
//     for (var i = 0; i < length; i++) {
//         text += possible.charAt(Math.floor(Math.random() * possible.length))
//     }
//     return text
// }