import { cartService } from "../../services/cartService";

export function addToCart(product, loggedinUser) {
    return async dispatch => {
      try {
        const userId= loggedinUser ? loggedinUser._id : null
        const productToSave={...product, amount:0}
        const productId=productToSave._id
        // console.log('productToSend', productToSave, userId)
         await cartService.addToCart(productId, userId)
        dispatch({ type: 'ADD_TO_CART', productToSave })
      } catch (err) {
        console.log(err);
      }
    }
  }
export function updateProduct(product) {
    return async dispatch => {
      try {
         await cartService.updateProductInCart(product)
        dispatch({ type: 'UPDATE_PRODUCT_IN_CART', product })
      } catch (err) {
        console.log(err);
      }
    }
  }
// export function setCartToShow(cartToShow) {
//     return async dispatch => {
//       try {
//         console.log('cartToShowOnAction', cartToShow);
//         dispatch({ type: 'SET_CART_TO_SHOW', cartToShow })
//       } catch (err) {
//         console.log(err);
//       }
//     }
//   }
  export function setCartToShow(cartToShow) {
    return async dispatch => {
      try {
        console.log('cartToShowOnAction', cartToShow);
        dispatch({type: 'S', cartToShow})
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