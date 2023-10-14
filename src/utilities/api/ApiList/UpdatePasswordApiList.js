import { post_request } from "../requests";

export const updatePasswordApi = async ({ body, navigation, params }) => {
    const data = await post_request({ target: "/updatePassword", body: body, navigation: navigation, params: params });
    return data;
}