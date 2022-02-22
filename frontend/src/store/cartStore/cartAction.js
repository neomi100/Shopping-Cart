import { cartService } from "../../services/cartService";

export function addToCart(product, userId) {
  return async dispatch => {
    try {
      const productId = product._id
      const productsToSend = [productId]
      await cartService.addToCart(productsToSend, userId)
      dispatch({ type: 'ADD_TO_CART', productToAdd: productId, productsToShow: product })
    } catch (err) {
      console.log(err);
    }
  }
}
export function setCartToShow(cartToShow) {
  return async dispatch => {
    try {
      dispatch({ type: 'SET_CART_TO_SHOW', cartToShow })
    } catch (err) {
      console.log(err);
    }
  }
}
export function setCart(cart) {
  return async dispatch => {
    try {
      dispatch({ type: 'SET_CART', cart })
    } catch (err) {
      console.log(err);
    }
  }
}
export function getCart(userId) {
  return async dispatch => {
    try {
      const cart = await cartService.getCart(userId)
      dispatch({ type: 'SET_CART', cart })
    } catch (err) {
      console.log(err);
    }
  }
}
