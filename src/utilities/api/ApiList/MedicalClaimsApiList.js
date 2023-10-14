import { post_request } from "../requests";

export const getMedicalClaimsApi = async ({ body, navigation, params }) => {
    const data = await post_request({ target: "/getMedicalClaim", body: body, navigation: navigation, params: params });
    return data;
}

export const createMedicalClaimsApi = async ({ body, navigation, params }) => {
    const data = await post_request({ target: "/getCreateMedicalClaim", body: body, navigation: navigation, params: params });
    return data;
}