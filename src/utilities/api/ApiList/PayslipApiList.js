import { post_request } from "../requests";

export const getEmployeePayslipApi = async ({ body, navigation, params }) => {
    const data = await post_request({ target: "/GetSalarySlipReport", body: body, navigation: navigation, params: params });
    return data;
}

export const getEmployeePayslipApiWags = async ({ body, navigation, params }) => {
    const data = await post_request({ target: "/web/dataset/call_kw/", body: body, navigation: navigation, params: params });
    return data;
}