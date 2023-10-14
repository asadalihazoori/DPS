import { Alert } from "react-native";
import { LoginApi } from "../../../utilities/api/apiController";
import { DATABASE } from "../../../utilities/api/instance";
import { login_user } from "../user.actions";
import { getEmployeeProfile } from "../../profile/actions/getEmployeeProfile";


export const siginin = ({ navigation, inputs, setLoading }) => {

    return async (dispatch) => {

        try {

            const body = {
                "jsonrps": 2.0,
                "params": {
                    "db": DATABASE,
                    "login": inputs.username,
                    "password": inputs.password
                }
            }

            const response = await LoginApi({ body, navigation });
            console.log(response?.data?.result);
            // console.log(response);

            if (response?.data?.result?.uid) {

                const uid = response?.data?.result?.uid;
                dispatch(login_user(response?.data?.result));
                dispatch(getEmployeeProfile({
                    uid,
                    navigation
                })).then(() =>

                    navigation.replace('DrawerNavigation')
                )
            }

            else if (response?.data?.result?.uid == false) {
                Alert.alert("Please Try Again", "Invalid Username and Password");
                setLoading(false)
            }

            else if (response?.data?.error) {
                Alert.alert(response?.data?.error?.message, `${response?.data?.error?.data?.message}`);
                setLoading(false)
            }

            else {
                setLoading(false)
                Alert.alert("Internet Connection Failed", `${response}`);
            }
        }

        catch (error) {
            console.log("SignIn", error)
        }

    }


}