import { post_request } from "../requests";

export const getEmployeePayslipApi = async ({ body, navigation, params }) => {
    const data = await post_request({ target: "/GetSalarySlipReport", body: body, navigation: navigation, params: params });
    return data;
}