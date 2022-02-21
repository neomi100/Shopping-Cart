import axios from 'axios'

const BASE_URL = process.env.NODE_ENV === 'production' ?
    '/api/' :
    '//localhost:3030/api/'

export const cartService = {
    addToCart,
    getCart,
}

const cart = JSON.parse(localStorage.getItem('CART')) || { userId: null, productsIds: [] };

async function addToCart(productsIds, userId) {
    if (userId) {
        const cartUser = await axios.post(`${BASE_URL}carts/addToCart`, { productsIds, userId });
        return cartUser.data.value
    } else {
        productsIds.forEach(productId => {
            cart.productsIds.push(productId)
        });
        localStorage.setItem('CART', JSON.stringify(cart) || []);
        return cart
    }
}


async function getCart(userId) {
    const res = await axios.post(`${BASE_URL}carts/getCart`, { userId })
    return res.data
}
