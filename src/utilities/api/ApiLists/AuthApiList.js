import { post_request } from "../requests";

export const LoginApi = async ({ body, navigation, params }) => {
    const data = await post_request({ target: "/web/session/authenticate", body: body, navigation: navigation, params: params });
    return data;
}   