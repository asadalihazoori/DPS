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

            if (response?.data?.result?.uid) {

                const uid = response?.data?.result?.uid;
                // dispatch(login_user(response?.data?.result))
                dispatch(login_user(response?.data?.result, inputs.loggedIn))
                dispatch(getEmployeeProfile({
                    uid,
                    navigation,
                    setLoading,
                }))
                    .then(() => {

                        setLoading(false)
                        // navigation.reset({
                        //     index: 0,
                        //     routes: [
                        //         {
                        //             name: 'DrawerNavigation',
                        //         },
                        //     ],
                        // });
                    }
                    )
                // navigation.replace('DrawerNavigation')
            }

            else if (response?.data?.error?.data?.message == "Access Denied") {
                Alert.alert("Please Try Again", "Invalid Username and Password");
                setLoading(false)
            }

            else if (response?.data?.error) {
                Alert.alert(response?.data?.error?.message, `${response?.data?.error?.data?.message}`);
                setLoading(false)
            }

            else if (response == "AxiosError: Network Error") {
                setLoading(false);
                Alert.alert("Internet Connection Failed", "Try to connect to Wifi or Mobile Network");
            }
            else {
                setLoading(false);
                Alert.alert("Error", "Try Again");

            }
        }

        catch (error) {
            console.log("SignIn", error)
        }

    }


}