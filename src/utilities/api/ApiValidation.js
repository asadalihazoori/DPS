// import Toast from 'react-native-simple-toast';

import store from "../../redux/store";
import { siginOut } from "../../redux/users/actions/signOut";

const ApiStatus = async (error, navigation) => {

    console.log("response");

    // console.log(error, navigation);
    // let errorCode = error?.response?.status;
    // console.log("errorCode", error?.response?.data?.error?.code);

    // if (error?.response?.data?.error?.code == 404) {

    // const uid = store.getState().signin.uid;
    // siginOut({ uid, navigation })

    // }
    // if (error == 'AxiosError: Request failed with status code 404') {
    //     navigation.replace("Login")
    // }



    // if (errorCode >= 400 && errorCode <= 499) {

    //     if (errorCode === 401 || errorCode === 403) {
    //         logout_clearData({ navigation })
    //     }
    //     if (typeof (error?.response?.data?.error) == 'object') {
    //         console.log(error?.response?.data?.error,"error?.response?.data?.error");
    //         Object.values(error?.response?.data?.error).map((val) => {
    //             Toast.show(val, Toast.SHORT)
    //         });
    //     } else {
    //         if (error?.response?.data?.message === 'Invalid Token') {
    //             Toast.show('Token is expired',Toast.SHORT);
    //         }
    //         else {
    //             Toast.show(error?.response?.data?.error ? error?.response?.data?.error : error?.response?.data?.message,Toast.SHORT);
    //         }
    //     }
    // } else if (errorCode >= 500 && errorCode <= 599) {
    //     Toast.show('Something went wrong...',Toast.SHORT);
    // }

}

export { ApiStatus }