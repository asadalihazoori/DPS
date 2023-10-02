import { LOGIN_USER } from "./user.types";


export function login_user(data) {
    return {
        type: LOGIN_USER,
        payload: data
    }
}