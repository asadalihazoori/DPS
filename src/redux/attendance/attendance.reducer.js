import moment from "moment";
import { PUNCH_IN, PUNCH_OUT, RESET_ATTENDANCE } from "./attendance.types";

const initialState = {

    punchInStatus: null,
    punchInTime: null,
    punchInformTime: null,
    punchOutStatus: null,
    punchOutTime: null,
    punchOutformTime: null,
    todayAttendance: false,
    lastUpdatedDate: null,

}

export const AttendanceReducer = (state = initialState, action) => {

    switch (action.type) {
        case PUNCH_IN:
            return {
                ...state,
                punchInStatus: action.payload.punchInStatus,
                punchInTime: action.payload.punchInTime,
                punchInformTime: action.payload.punchInformTime,
                lastUpdatedDate: moment().format("YYYY-MM-DD")

            }
        case PUNCH_OUT:
            return {
                ...state,
                punchOutStatus: action.payload.punchOutStatus,
                punchOutTime: action.payload.punchOutTime,
                punchOutformTime: action.payload.punchOutformTime,
                todayAttendance: true,
                lastUpdatedDate: moment().format("YYYY-MM-DD")
            }

        case RESET_ATTENDANCE:
            return {
                ...state,
                punchInStatus: null,
                punchInTime: null,
                punchInformTime: null,
                punchOutStatus: null,
                punchOutTime: null,
                punchOutformTime: null,
                todayAttendance: null,
                lastUpdatedDate: moment().format("YYYY-MM-DD"),
            }

        default:
            return state;
    }




}