import { LOGIN_USER, LOGOUT_USER } from "./user.types";


const initialState = {
    uid: null,
    loggedIn: null,
    firstLogin: false,
    // data: null
}

export const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:

            return {
                ...state,
                uid: action.payload.data.uid,
                loggedIn: action.payload.loggedIn,
                firstLogin: true,
            }

        case LOGOUT_USER:
            return {
                ...state,
                loggedIn: action.payload
            }

        default:
            return state;
    }
}