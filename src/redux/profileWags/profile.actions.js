import { GET_EMPLOYEE_PROFILE } from "./profile.types";

export function get_employee_profile(data,) {
    return {
        type: GET_EMPLOYEE_PROFILE,
        payload: {
            data: data,
            // familyInfo: family_info
        }

    }
} 