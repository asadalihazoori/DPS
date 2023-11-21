import { launchImageLibrary } from 'react-native-image-picker';
import { get_background_image } from "../background.actions";

export const getBackgroundImage = () => {

    return async (dispatch) => {

        try {

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
                    dispatch(get_background_image(image))
                }
            });

        }

        catch (error) {
            console.log(error, "SignIn ")
        }

    }


}