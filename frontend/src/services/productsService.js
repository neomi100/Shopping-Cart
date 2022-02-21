import axios from 'axios'

const BASE_URL = process.env.NODE_ENV === 'production' ?
    '/api/' :
    '//localhost:3030/api/'
export const productsService = {
    query,
    getProductsByIds
}

async function query() {
    const res = await axios.get(`${BASE_URL}products`)
    return res.data
}

async function getProductsByIds(productsIds) {
    const res = await axios.post(`${BASE_URL}products/getByIds`, { productsIds })
    const products = res.data
    productsIds.forEach(pId => {
        products.forEach(product => {
            if (pId === product._id)
                product.amount++
        })
    });
    return products
} 
