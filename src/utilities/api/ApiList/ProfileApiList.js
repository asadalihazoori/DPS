import { post_request } from "../requests";

export const getEmployeeProfileApi = async ({ body, navigation, params }) => {
    const data = await post_request({ target: "/getUserProfile", body: body, navigation: navigation, params: params });
    return data;
}

export const UpdateEmployeeProfileApi = async ({ body, navigation, params }) => {
    const data = await post_request({ target: "/web/dataset/call_kw/", body: body, navigation: navigation, params: params });
    return data;
}