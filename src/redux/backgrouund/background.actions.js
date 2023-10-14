import { GET_BACKGROUND_IMAGE } from "./background.types";

export function get_background_image(data) {
    return {
        type: GET_BACKGROUND_IMAGE,
        payload: data
    }
}