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
            if (loguser) setError()
            dispatch({ type: 'LOGIN', user: loguser })
        } catch (error) {
            dispatch({ type: 'SET_ERROR', systemMsg: "Wrong username or password. Maybe we do not know yet? Please try again or sign up" })
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

export function setError() {
    return { type: 'SET_ERROR', msg: "" }
}

