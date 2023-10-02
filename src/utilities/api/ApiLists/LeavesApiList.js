import { post_request } from "../requests";

export const getLeaveStatusApi = async ({ body, navigation, params }) => {
    const data = await post_request({ target: "/getUserleave", body: body, navigation: navigation, params: params });
    return data;
}

export const createLeaveApi = async ({ body, navigation, params }) => {
    const data = await post_request({ target: "/getcreateleave", body: body, navigation: navigation, params: params });
    return data;
}