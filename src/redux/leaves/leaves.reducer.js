import { GET_LEAVES_STATUS } from "./leaves.types";

const initialState = {

    leaves: null,
    leaves_availed: null,
    // data: null,

}

export const LeavesReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_LEAVES_STATUS:
            return {
                ...state,
                // data: action.payload,
                leaves: action.payload.leaves,
                leaves_availed: action.payload.leaves_availed,

            }

        default:
            return state;
    }




}