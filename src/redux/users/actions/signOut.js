import { Alert } from "react-native";
import { LogoutApi } from "../../../utilities/api/apiController";

export const siginOut = async ({ uid, navigation }) => {

    try {
        const body = {
            "jsonrps": 2.0,
            "params": {
                "employee_id": uid
            }
        };

        const response = await LogoutApi({ body, navigation });
        // console.log(response?.data);

        if (response?.data?.result == "true") {
            navigation.navigate('Login')

        }
        else if (response?.data?.error) {
            Alert.alert(response?.data?.error?.message, `${response?.data?.error?.data?.message}`);
        }

        // else if (response == 'AxiosError: Request failed with status code 404') {
        //     console.log(response);
        //     Alert.alert("Session Expired", `Please Login Again`);
        // }q

        else {
            Alert.alert("Internet Connection Failed", `${response}`);
        }


    } catch (error) {
        console.error(error);
    }


}