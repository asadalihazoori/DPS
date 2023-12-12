import { GET_EMPLOYEE_PROFILE } from "./profile.types"


const initialState = {
    data: null,
    employeeID: null,
    name: null,
    employeeCode: null,
    department: null,

    // shifts: null,
    // holidayStatus: null,
    // loanTypeList: null,
    // familyInfo: null,

}

export const ProfileReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_EMPLOYEE_PROFILE:

            return {
                ...state,
                data: action.payload.data,
                employeeID: action.payload.data.id,
                name: action.payload.data.name,
                department: action.payload.data.department_id,
                employeeCode: action.payload.data.employee_code,
                // shifts: action.payload.data.shifts,
                // loanTypeList: action.payload.data.loan_type_list,
                // holidayStatus: action.payload.data.holiday_status,
                // familyInfo: action.payload.familyInfo
            }

        default:
            return state;
    }




}