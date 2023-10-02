import { post_request } from "../requests";

export const getDiseasesListApi = async ({ body, navigation, params }) => {
    const data = await post_request({ target: "/getDiseasesList", body: body, navigation: navigation, params: params });
    return data;
}