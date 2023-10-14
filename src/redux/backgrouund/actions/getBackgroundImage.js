import { Alert } from "react-native";
import { GET_BACKGROUND_IMAGE } from "../background.types";
import { launchImageLibrary } from 'react-native-image-picker';
import { get_background_image } from "../background.actions";

export const getBackgroundImage = () => {

    return async (dispatch) => {

        try {

            // const launchLibrary = () => {

            const options = {
                mediaType: 'photo',
                // maxHeight: 2000,
                // maxWidth: 2000,
                includeBase64: true
            };

            launchImageLibrary(options, (response) => {
                if (response.didCancel) {
                    console.log('User cancelled image picker');
                } else if (response.error) {
                    console.log('Image picker error: ', response.error);
                } else {
                    // let imageUri = response.uri || response.assets?.[0]?.uri;
                    let imageBase64 = response.uri || response.assets?.[0]?.base64;
                    let image = `data:image/jpeg;base64,${imageBase64}`
                    console.log(response);
                    // setImage(imageUri);
                    dispatch(get_background_image(image))
                    // onImageSelected(imageBase64);
                }
            });
            // }

            // const body = {
            //     "jsonrps": 2.0,
            //     "params": {
            //         "db": DATABASE,
            //         "login": inputs.username,
            //         "password": inputs.password
            //     }
            // }

            // const response = await LoginApi({ body, navigation });
            // console.log(response?.data?.result);

            // if (response?.data?.result?.uid) {
            //     dispatch(login_user(response.data.result));
            //     navigation.replace('DrawerNavigation')
            // }
            // else {
            //     Alert.alert("Invalid Username and Password");
            // }
        }

        catch (error) {
            console.log(error, "SignIn ")
        }

    }


}