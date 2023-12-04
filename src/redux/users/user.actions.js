import { LOGIN_USER, LOGOUT_USER } from "./user.types";


export function login_user(data, loggedIn) {
    return {
        type: LOGIN_USER,
        // payload: data
        payload: {
            data: data,
            loggedIn: loggedIn
        }
    }
}


export function logout_user(loggedIn) {

    return {
        type: LOGOUT_USER,
        payload: loggedIn
    }
}