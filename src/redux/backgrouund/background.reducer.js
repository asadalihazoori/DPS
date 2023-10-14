import { GET_BACKGROUND_IMAGE } from "./background.types";


const initialState = {
    image: null
}

export const BackgroundImageReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BACKGROUND_IMAGE:
            console.log(action.payload);
            return {
                ...state,
                image: action.payload,
                // data: action.payload,
            }

        default:
            return state;
    }
}