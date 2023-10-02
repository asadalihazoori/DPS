import axios from "axios";
import { ApiStatus } from "./ApiValidation";
import { RequestHeaders } from "./RequestHeader";
import { baseURL } from "./instance";

const put_request = async ({ target, body, params, navigation, formData = false }) => {

    try {

        const headers = RequestHeaders(formData)

        const instance = axios.create({
            baseURL: baseURL,
            params: params,
            headers: headers,
        });

        const response = await instance.put(target, body)
            .catch((error) => {
                ApiStatus(error, navigation)
                return error
            }
            )
        return response

    } catch (e) {
        return e
    }
}

const post_request = async ({ target, body, params, navigation, formData = false, checkUrl = null }) => {

    try {

        const headers = RequestHeaders(formData)

        const instance = axios.create({
            baseURL: baseURL,
            params: params,
            headers: headers,
        });

        const response = await instance.post(target, body)
            .catch((error) => {
                ApiStatus(error, navigation)
                return error
            }
            )
        return response

    } catch (e) {
        return e
    }
}



const get_request = async ({ target, body, navigation, params }) => {

    try {

        const headers = RequestHeaders()

        const instance = axios.create({
            baseURL: baseURL,
            headers: headers,
            params: params,
        });

        const response = await instance.get(target, body)
            .catch((error) => {
                ApiStatus(error, navigation)
                return error
            }
            )
        return response
    } catch (error) {
        return error
    }
}

const delete_request = async ({ target, body, navigation }) => {

    try {

        const headers = RequestHeaders()

        const instance = axios.create({
            baseURL: baseURL,
            headers: headers,
        });

        const response = await instance.delete(target, body)
            .catch((e) => {
                ApiStatus(e, navigation)
                return e
            }
            )
        return response
    } catch (error) {
        return e
    }
}



export { post_request, get_request, put_request, delete_request }
