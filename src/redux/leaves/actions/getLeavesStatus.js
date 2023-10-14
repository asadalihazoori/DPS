import { getLeaveStatusApi } from "../../../utilities/api/apiController";
import { get_leaves_status } from "../leaves.action";
import { Alert } from "react-native";


export const getLeavesStatus = ({ uid, navigation }) => {

    return async (dispatch) => {

        try {

            const body = {
                "jsonrps": 2.0,
                "params": {
                    "employee_id": uid
                }
            }

            const response = await getLeaveStatusApi({ body, navigation });

            if (response?.data?.result?.status == 200) {
                dispatch(get_leaves_status(response?.data?.result?.response))

            }
            else if (response?.data?.error) {
                Alert.alert(response?.data?.error?.message, `${response?.data?.error?.data?.message}`);
            }

            else if (response == 'AxiosError: Request failed with status code 404') {
                Alert.alert("Session Expired", `Please Login Again`);
            }

            else {
                Alert.alert("Internet Connection Failed", `${response}`);
            }
        }

        catch (error) {
            console.log(error, "error")
        }

    }
}