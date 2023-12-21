import { SET_USER_LOCATION } from "./location.types";

const initialState = {
    lat: 0,
    lng: 0
}

export const locationReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_LOCATION: {

            const { lat, lng } = action.payload;

            return {
                ...state,
                lat: lat,
                lng: lng
            }
        }
        default:
            return state;
    }




}