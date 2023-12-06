import { punchAttendanceApi } from "../../../utilities/api/apiController";
import { Alert } from "react-native";
import { punch_out } from "../attendance.action";


export const createPunchOut = ({ uid, navigation, time, latitude, longitude, date, setTitle, setFreeze, employeeID }) => {

    return async (dispatch) => {

        try {

            const body = {
                "params": {
                    "model": "raw.attendance.wags",
                    "method": "create_raw_attendance",
                    "args": [
                        [
                            {
                                "user_id": uid,
                                "latitude": latitude,
                                "longitude": longitude,
                                "date": time.date,
                                "checkout": time.dateTime,
                                "employee_id": employeeID,
                                // "attendance_status": "Checkout"

                            }
                        ]
                    ],
                    "kwargs": {}
                }
            }

            const response = await punchAttendanceApi({ body, navigation });
            console.log(response?.data?.result)


            if (response?.data?.result == true) {
                dispatch(punch_out({
                    punchOutStatus: true,
                    punchOutTime: time.timeString,
                    punchOutformTime: time?.time
                }))
                setFreeze(false)
                setTitle(`Punched Out at ${time?.time}`);
                navigation.goBack();
                // setTitle(`Punched Out at ${time?.time.format('h:mm A')}`);

            }
            else if (response?.data?.error) {
                Alert.alert(response?.data?.error?.message, `${response?.data?.error?.data?.message}`);
            }

            else if (response == 'AxiosError: Request failed with status code 404') {
                Alert.alert("Session Expired", `Please Login Again`);
            }

            else if (response == "AxiosError: Network Error") {
                Alert.alert("Internet Connection Failed", "Try to connect with Wifi or Mobile Network");
            }
            else {
                Alert.alert("Error", "Try Again");

            }
        }

        catch (error) {
            console.log(error, "error")
        }

    }
}