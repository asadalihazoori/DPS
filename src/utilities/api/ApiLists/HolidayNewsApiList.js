import { post_request } from "../requests";

export const getHolidayNewsApi = async ({ body, navigation, params }) => {
    const data = await post_request({ target: "/getholidays", body: body, navigation: navigation, params: params });
    return data;
}