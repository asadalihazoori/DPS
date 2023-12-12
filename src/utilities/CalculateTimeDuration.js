import moment from "moment";

export const CalculateTimeDuration = (punchInTime, punchOutTime) => {

    const punchInMoment = moment(punchInTime);
    const punchOutMoment = moment(punchOutTime);
    const duration = moment.duration(punchOutMoment.diff(punchInMoment));
    const hours = Math.floor(duration.asHours());
    const minutes = Math.floor(duration.asMinutes()) % 60;
    // const seconds = Math.floor(duration.asMinutes()) % 60;

    return { hours, minutes }

}
