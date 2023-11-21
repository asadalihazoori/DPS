import { GET_LEAVES_STATUS } from "./leaves.types";

const initialState = {

    leaves: null,
    // leaves_availed: null,
    leaves_requested: null,

    // data: null,

}

export const LeavesReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_LEAVES_STATUS:
            console.log("payload", action.payload.leaves_requested)
            return {
                ...state,
                // data: action.payload,
                leaves: action.payload.leaves,
                // leaves_availed: action.payload.leaves_availed,
                leaves_requested: action.payload.leaves_requested,

            }

        default:
            return state;
    }




}