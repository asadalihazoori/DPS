import { GET_LEAVES_STATUS } from "./leaves.types";

export function get_leaves_status(data) {
    return {
        type: GET_LEAVES_STATUS,
        payload: data
    }
} 