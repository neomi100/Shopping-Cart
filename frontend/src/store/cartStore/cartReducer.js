
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


        // case 'ADD_TO_CART':
        //     console.log(action)
        //     return {
        //         ...state,
        //         // cart: action.cart,
        //      cart: [...state.cart, action.product._id],
        //        // cart:action.product._id
        //         // cart: [...state.cart.productsIds, action.product._id],
        //         // cartToShow:  action.cart
        //         cartToShow: [...state.cartToShow, action.product]
        //     }
        
           // case 'ADD_TO_CART_UPDATE_PRODUCT':
        //     return {
        //         ...state,
        //         cart: [...state.cart, action.product._id],
        //         cartToShow: [...state.cartToShow, action.product]
        //     }
        // case 'UPDATE_PRODUCT_IN_CART':
        //     return {
        //         ...state,
        //         cartToShow: state.cart.map((product) => (product._id === action.product._id) ?
        //             action.product
        //             : product
        //         )
        //     }
        // case 'UPDATE_PRODUCT_IN_CART':
        //   const productToShow= state.cartToShow.find((productInCart) =>productInCart._id === action.productToSave._id)
        //   productToShow.amount++

        // return {
        //     ...state,
        //     cartToShow: state.cartToShow.filter(product => product._id !== action.productToSave._id)                  
        // }
        // case 'UPDATE_PRODUCT_IN_CART':
        //   let productToShow= state.cartToShow.find((productInCart) =>productInCart._id === action.product._id)
        //   productToShow.amount++     
        //     return {
        //         ...state,
        //         cartToShow:(productToShow)? state.cartToShow.filter(anotherProduct => anotherProduct._id !== productToShow._id):productToShow ,
        //         // cartToShow: [...state.cartToShow, cartToShow]                  
        //     }
        // case 'SET_CART_TO_SHOW':
        //     return {
        //         ...state,
        //         cartToShow: action.cartToShow
        //     }