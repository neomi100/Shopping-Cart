import { cartService } from "../../services/cartService"
import { productsService } from "../../services/productsService"

const INITIAL_STATE = {
    cart: [],
    cartToShow: []

}

export function cartReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_CART':
            return {
                ...state,
                cart: action.cart
            }
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.productToSave._id],
                cartToShow: [...state.cartToShow, action.productToSave]
            }
        case 'UPDATE_PRODUCT_IN_CART':
            return {
                ...state,
                cart: state.cart.map((product) => (product._id === action.product._id) ? { ...product, amount: product.amount + 1 }
                    : product
                )
            }
        case 'SET_CART_TO_SHOW':
            return {
                ...state,
                cartToShow: action.cartToShow
            }
        case 'S':
            return {
                ...state,
                cartToShow: action.cartToShow
            }
        default:
            return state
    }
}

