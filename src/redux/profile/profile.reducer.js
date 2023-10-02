import { GET_EMPLOYEE_PROFILE } from "./profile.types"


const initialState = {
    data: null,
    employeeID: null,
    name: null,
    shifts: null,
    holidayStatus: null,
    loanTypeList: null,

}

export const ProfileReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_EMPLOYEE_PROFILE:
            return {
                ...state,
                data: action.payload,
                name: action.payload.name,
                shifts: action.payload.shifts,
                employeeID: action.payload.employee_id,
                loanTypeList: action.payload.loan_type_list,
                holidayStatus: action.payload.holiday_status,
            }

        default:
            return state;
    }




}