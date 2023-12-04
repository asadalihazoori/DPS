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
            console.log(action);
            // return {
            //     ...state,
            //     uid: action.payload.uid,
            // }

            return {
                ...state,
                uid: action.payload.data.uid,
                loggedIn: action.payload.loggedIn,
                firstLogin: true,
            }

        case LOGOUT_USER:
            console.log("reducer logout", action.payload)
            return {
                ...state,
                loggedIn: action.payload
            }

        default:
            return state;
    }
}