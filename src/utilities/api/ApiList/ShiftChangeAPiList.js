import { post_request } from "../requests";

export const createShiftChangeApi = async ({ body, navigation, params }) => {
    const data = await post_request({ target: "/CreateShiftChange", body: body, navigation: navigation, params: params });
    return data;
}