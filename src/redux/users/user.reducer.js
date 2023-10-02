import { LOGIN_USER } from "./user.types";


const initialState = {
    uid: null,
    data: null
}

export const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            console.log(action.payload);
            return {
                ...state,
                uid: action.payload.uid,
                data: action.payload,
            }

        default:
            return state;
    }
}