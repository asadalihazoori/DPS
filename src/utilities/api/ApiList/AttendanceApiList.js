import { post_request } from "../requests";

export const getAttendanceApi = async ({ body, navigation, params }) => {
    const data = await post_request({ target: "/getattendancerep", body: body, navigation: navigation, params: params });
    return data;
}

export const createAttendanceApi = async ({ body, navigation, params }) => {
    const data = await post_request({ target: "/createmannualattendance", body: body, navigation: navigation, params: params });
    return data;
}