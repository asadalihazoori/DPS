
import moment from "moment";

export function getCurrentDateTime() {

    const now = moment();
    const localTime = now.format('hh:mm A');
    const utcDate = now.utc().format('YYYY-MM-DD');
    const utcDateTime = now.utc().format('YYYY-MM-DD hh:mm:ss');

    return {
        timeString: now,
        date: utcDate,
        dateTime: utcDateTime,
        time: localTime,
    };

}

export function getJustCurrentDate() {
    const dateObject = new Date();
    const dateTime = dateObject.toISOString().split('.');
    const [date, time] = dateTime[0].split('T');

    // console.log(`${date} ${time}`)
    return date;

}