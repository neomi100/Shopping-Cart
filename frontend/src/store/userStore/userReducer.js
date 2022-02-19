const INITIAL_STATE = {
    loggedinUser:null,
    // {
    //     _id:'001',
    //     username:'puki',
    //     password: '1523',
    //     fullname:'puki balila',
    //     imgUrl: ('https://robohash.org/?set=set5'),
    //     productsInCart: []
    // } ,
    // users:null           
}

export function userReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SIGNUP':
            return {
                ...state,
                loggedinUser: action.user
            }
        case 'LOGIN':
            return {
                ...state,
                loggedinUser: action.user
            }
        case 'LOGOUT':
            return {
                ...state,
                loggedinUser: null
            }
            // case 'UPDATE':
            //     return {
            //         ...state,
            //         // loggedinUser: {...state.loggedinUser, productsInCart:action.user.productsInCart}
            //         loggedinUser: action.user
            //     }
                default:
                    return state
            }
}