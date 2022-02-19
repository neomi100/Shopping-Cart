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

// async function saveCart(cart){
//     // return await axios.put(`${BASE_URL}products/saveCart/`, cart)
// }
async function getProductsByIds (productsIds) {
  //return products from mongodb
  const res = await axios.post(`${BASE_URL}products/getByIds`, {productsIds})
  return res.data
} 
