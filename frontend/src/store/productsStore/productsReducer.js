const INITIAL_STATE = {
  products: null,
  cart: []
}
export function productsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
        products: action.products
      }
    default:
      return state
  }
}