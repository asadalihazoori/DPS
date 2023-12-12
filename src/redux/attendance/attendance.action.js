import { PUNCH_IN, PUNCH_OUT, RESET_ATTENDANCE, SYNC_ATTENDANCES } from "./attendance.types";

export function punch_in(data) {
    return {
        type: PUNCH_IN,
        payload: data
    }
}

export function punch_out(data) {
    return {
        type: PUNCH_OUT,
        payload: data
    }
}

export function reset_attendance(data) {
    return {
        type: RESET_ATTENDANCE,
        payload: data
    }
}

export function sync_attendances(data) {
    return {
        type: SYNC_ATTENDANCES,
        payload: data
    }
} 