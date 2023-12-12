import { punchAttendanceApi } from "../../../utilities/api/apiController";
import { Alert } from "react-native";
import { punch_in } from "../attendance.action";


export const createPunchIn = ({ uid, navigation, time, latitude, longitude, setTitle, setFreeze, employeeID, employeeCode, department, }) => {

    return async (dispatch) => {

        // console.log(employeeCode,
        //     department,)


        try {

            const body = {
                "params": {
                    "model": "raw.attendance.wags",
                    "method": "create_raw_attendance",
                    "args": [
                        [
                            {
                                "user_id": uid,
                                "employee_id": employeeID,
                                "latitude": latitude,
                                "longitude": longitude,
                                "date": time.date,
                                "checkin": time.dateTime,
                                "machine_id": employeeCode,
                                "department_id": department?.[0],
                                "server_date": time.dateTime,
                                "date_wags": time.dateTime,
                                // "attendance_status": "checkin"

                            }
                        ]
                    ],
                    "kwargs": {}
                }
            }

            const response = await punchAttendanceApi({ body, navigation });
            console.log(response?.data)


            if (response?.data?.result == true) {
                dispatch(punch_in({
                    punchInStatus: true,
                    punchInTime: time.timeString,
                    punchInformTime: time?.time
                }));
                setFreeze(false)
                setTitle(`Punched In at ${time?.time}`);
                navigation.goBack();

            }
            else {

                console.log("heeeeeeeere")

                dispatch(punch_in({
                    punchInStatus: true,
                    punchInTime: time.timeString,
                    punchInformTime: time?.time,
                    apiBody: body,
                    asyncPunch: true,
                }));
                setFreeze(false)
                setTitle(`Punched In at ${time?.time}`);
                navigation.goBack();

                if (response?.data?.error) {
                    // Alert.alert(response?.data?.error?.message, `${response?.data?.error?.data?.message}`);
                }

                else if (response == 'AxiosError: Request failed with status code 404') {
                    // Alert.alert("Session Expired", `Please Login Again`);
                }

                else if (response == "AxiosError: Network Error") {
                    // Alert.alert("Internet Connection Failed", "Try to connect with Wifi or Mobile Network");
                }
                else {
                    // Alert.alert("Error", "Try Again");

                }
            }
        }

        catch (error) {
            console.log(error, "error")
        }

    }
}