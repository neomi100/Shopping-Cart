import axios from 'axios'

const BASE_URL = process.env.NODE_ENV === 'production' ?
    '/api/' :
    '//localhost:3030/api/'
export const cartService = {
    addToCart,
    getCart,
    // getCartWithProducts,
    // updateProductInCart
}

const cart = JSON.parse(localStorage.getItem('CART')) || {userId:null, productsIds:[]};

async function addToCart(productsIds, userId) {

    // console.log(productsIds, userId, 'ggg');
    if (userId) { //user logged in
       const cartUser= await axios.post(`${BASE_URL}carts/addToCart`, { productsIds, userId });
       console.log('cartUser from back', cartUser)
    //    localStorage.setItem('CART', JSON.stringify(cartUser))
    return cartUser.data.value
    } else { // no user
        // צריך לחלץ את הפרודקט מתוך המערך
        productsIds.forEach(productId => {
            cart.productsIds.push(productId)
        });
        // cart.push(productId)
        localStorage.setItem('CART', JSON.stringify(cart) || []);
        return cart
    }
}


async function getCart(userId) {
    console.log('userId', userId)
    const res = await axios.post(`${BASE_URL}carts/getCart`, {userId})
    console.log(res.data,'data');
    return res.data
}

// async function updateProductInCart(product, userId){
//     if(userId) await axios.put(`${BASE_URL}carts/updateProductInCart`,{product, userId})
//     else {
//         const idx= cart.findIndex(productInCart=>productInCart===product._id)
//         cart.splice(idx, 1, product._id)
//         localStorage.setItem('CART', JSON.stringify(cart))
//     }
// }

// async function getCart(userId) {
//     console.log('userId', userId)
//     const res = await axios.get(`${BASE_URL}carts/addToCart`, userId)
//     console.log(res.data,'data');
//     return res.data
// }

// function getCartWithProducts(cart) {
//     const producrsId = cart.map((product) => product._id)
//     addToCart(producrsId,)
// }


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