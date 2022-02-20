import { userService } from "../../services/userService.js"


export function signupUser(credentials) {
    return async dispatch => {
        try {
            const user = await userService.signin(credentials)
            // console.log('user', user)
            dispatch({ type: 'SIGNUP', user })
        } catch (error) {
            console.log('error', error)
        }
    }
}
export function loginUser(credentials) {
    // console.log('credentials', credentials)
    return async dispatch => {
        try {
            const loguser = await userService.login(credentials)
            // console.log('user', loguser)
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

// export function updateCart(userTosave) {
//     return async dispatch => {
//       try {
//          await userService.update(userTosave)
//         dispatch({ type:'UPDATE', userTosave })
//       } catch (err) {
//         console.log(err);
//       }
//     }
//   }