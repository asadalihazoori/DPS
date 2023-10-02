import { Alert } from "react-native";
import { LoginApi } from "../../../utilities/api/apiController";
import { DATABASE } from "../../../utilities/api/instance";
import { login_user } from "../user.actions";


export const siginin = ({ navigation, inputs }) => {

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

            if (response?.data?.result?.uid) {
                dispatch(login_user(response.data.result));
                navigation.replace('DrawerNavigation')
            }
            else {
                Alert.alert("Invalid Username and Password");
            }
        }

        catch (error) {
            console.log(error, "SignIn ")
        }

    }


}