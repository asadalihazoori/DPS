import moment from "moment";
import { PUNCH_IN, PUNCH_OUT, RESET_ATTENDANCE, SYNC_ATTENDANCES } from "./attendance.types";
import { CalculateTimeDuration } from "../../utilities/CalculateTimeDuration";

const initialState = {

    // punchInStatus: null,
    // punchInTime: null,
    // punchInformTime: null,
    // punchOutStatus: null,
    // punchOutTime: null,
    // punchOutformTime: null,
    // todayAttendance: false,

    asyncPunches: [],
    attendanceRecords: [],
    punchStatus: "Punch-In",
    lastUpdatedDate: null,


}

export const AttendanceReducer = (state = initialState, action) => {

    switch (action.type) {
        // case PUNCH_IN:
        //     return {
        //         ...state,
        //         punchInStatus: action.payload.punchInStatus,
        //         punchInTime: action.payload.punchInTime,
        //         punchInformTime: action.payload.punchInformTime,
        //         lastUpdatedDate: moment().format("YYYY-MM-DD")

        //     }


        case PUNCH_IN:
            console.log("redcucer", action.payload)
            return {
                ...state,
                attendanceRecords: [
                    ...state.attendanceRecords,
                    {
                        punchInStatus: action.payload.punchInStatus,
                        punchInTime: action.payload.punchInTime,
                        punchInformTime: action.payload.punchInformTime,
                    },
                ],
                punchStatus: "Punch-Out",
                lastUpdatedDate: moment().format("YYYY-MM-DD"),
                // asyncPunches: action.payload.async ? [...state.asyncPunches] : [...state.asyncPunches, action.payload.apiBody],
                asyncPunches: action.payload.asyncPunch
                    ? [...state.asyncPunches, action.payload.apiBody]
                    : state.asyncPunches,

            };




        case PUNCH_OUT:
            // return {
            //     ...state,
            //     punchOutStatus: action.payload.punchOutStatus,
            //     punchOutTime: action.payload.punchOutTime,
            //     punchOutformTime: action.payload.punchOutformTime,
            //     todayAttendance: true,
            //     lastUpdatedDate: moment().format("YYYY-MM-DD")
            // }
            console.log("redcucer", action.payload)

            const updatedRecords = state.attendanceRecords.map((record, index) => {
                if (index === state.attendanceRecords.length - 1 && record.punchInStatus === true) {
                    const duration = CalculateTimeDuration(record.punchInTime, action.payload.punchOutTime)
                    return {
                        ...record,
                        punchOutStatus: action.payload.punchOutStatus,
                        punchOutTime: action.payload.punchOutTime,
                        punchOutformTime: action.payload.punchOutformTime,
                        // todayAttendance: true,
                        duration: duration,
                    };
                }
                return record;
            });

            return {
                ...state,
                attendanceRecords: updatedRecords,
                punchStatus: "Punch-In",
                lastUpdatedDate: moment().format("YYYY-MM-DD"),
                asyncPunches: action.payload.asyncPunch
                    ? [...state.asyncPunches, action.payload.apiBody]
                    : state.asyncPunches,

            };



        case RESET_ATTENDANCE:
            // return {
            //     ...state,
            //     punchInStatus: null,
            //     punchInTime: null,
            //     punchInformTime: null,
            //     punchOutStatus: null,
            //     punchOutTime: null,
            //     punchOutformTime: null,
            //     todayAttendance: null,
            //     lastUpdatedDate: moment().format("YYYY-MM-DD"),
            // }

            return {
                attendanceRecords: [],
                punchStatus: "Punch-In",
                lastUpdatedDate: null,
                asyncPunches: [],
            }

        case SYNC_ATTENDANCES:
            return {
                ...state,
                asyncPunches: state.asyncPunches.filter(
                    (punch) => punch !== action.payload.body || punch === null
                ),
            };


        default:
            return state;
    }




}