
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
                cart: [...state.cart, action.product._id],
                cartToShow: [...state.cartToShow, action.product]
            }
        case 'SET_CART_TO_SHOW':
            return {
                ...state,
                cartToShow: action.cartToShow
            }
        default:
            return state
    }
}
