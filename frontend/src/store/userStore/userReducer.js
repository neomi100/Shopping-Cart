const INITIAL_STATE = {
    loggedinUser: null,
    systemMsg: ''
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
        case 'SET_ERROR':
            return {
                ...state,
                systemMsg: action.systemMsg
            }
        default:
            return state
    }
}