import { post_request } from "../requests";

export const getLoansApi = async ({ body, navigation, params }) => {
    const data = await post_request({ target: "/getloandetailed", body: body, navigation: navigation, params: params });
    return data;
}

export const createLoanApi = async ({ body, navigation, params }) => {
    const data = await post_request({ target: "/getcreateloan", body: body, navigation: navigation, params: params });
    return data;
}