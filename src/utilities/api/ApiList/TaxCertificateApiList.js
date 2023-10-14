import { post_request } from "../requests";

export const getTaxCertificateApi = async ({ body, navigation, params }) => {
    const data = await post_request({ target: "/GetSalaryTaxCertificate", body: body, navigation: navigation, params: params });
    return data;
}