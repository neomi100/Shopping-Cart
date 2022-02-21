import { userService } from "../../services/userService.js"


export function signupUser(credentials) {
    return async dispatch => {
        try {
            const user = await userService.signin(credentials)
            dispatch({ type: 'SIGNUP', user })
        } catch (error) {
            console.log('error', error)
        }
    }
}
export function loginUser(credentials) {
    return async dispatch => {
        try {
            const loguser = await userService.login(credentials)
            dispatch({ type: 'LOGIN', user: loguser })
        } catch (error) {
            console.log('error', error)
        }
    }
}

export function logout() {
    return async dispatch => {
        try {
            userService.logout()
            dispatch({ type: 'LOGOUT' })
        } catch (error) {
            console.log('error', error)
        }
    }
}
