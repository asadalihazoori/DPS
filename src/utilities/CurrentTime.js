// export function getCurrentTime() {
//     const currentTime = new Date();
//     return currentTime.toLocaleTimeString();
// }

import moment from "moment";

export function getCurrentDateTime() {
    // const dateObject = new Date();
    // const dateTime = dateObject.toISOString().split('.');
    // const [date, time] = dateTime[0].split('T');


    // // const formattedTime = dateObject.toLocaleTimeString('en-US', {
    // //     hour: 'numeric',
    // //     minute: '2-digit',
    // //     hour12: true,
    // // });

    // const currentTime = moment();

    // return {
    //     dateTime: `${date} ${time}`,
    //     // time: formattedTime,
    //     time: currentTime,
    //     date: date
    // };

    const now = moment();

    // Get UTC time
    // const utcTimeString = now.toISOString();

    // Get UTC date
    const localTime = now.format('hh:mm A');
    const utcDate = now.utc().format('YYYY-MM-DD');
    // const utcDateTime = now.format('YYYY-MM-DD hh:mm:ss');

    const utcDateTime = now.utc().format('YYYY-MM-DD hh:mm:ss');

    // console.log(localTime)

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