const INITIAL_STATE = {
    loggedinUser: null,
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
        default:
            return state
    }
}