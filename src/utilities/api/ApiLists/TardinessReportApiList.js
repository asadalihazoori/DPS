import { post_request } from "../requests";

export const getTardinessReportApi = async ({ body, navigation, params }) => {
    const data = await post_request({ target: "/GetEmployeeTardinessReport", body: body, navigation: navigation, params: params });
    return data;
}