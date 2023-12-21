import { Alert, Linking, Platform } from "react-native";
import { getCoordinatesServices, getPermissionJust } from "../../screens/Attendance/Location/AccessLocation";
import { SET_USER_LOCATION } from "./location.types";

export const setUserLocation = ({ lat, lng }) => ({
    type: SET_USER_LOCATION,
    payload: {
        lat,
        lng
    }
})

export const requestAndGetLocation = () => async dispatch => {
    getPermissionJust()
        .then(() => {

            getCoordinatesServices()
                .then((position) => {
                    if (position) {
                        dispatch(setUserLocation({
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        }));
                    }

                }).catch((error) => {
                    console.log("Error while getting location,", error);
                })
        })
        .catch((error) => {
            // Make it a confirmation box for getting permission again., on Yes get permission again, otherwise just cancel
            Alert.alert("WillU need access to your location", "Allow location Permission otherwise User won't be able to Punch.",
                [{
                    text: "OK", onPress: () => {
                        // dispatch(requestAndGetLocation())
                        // Linking.openSettings();

                        if (Platform.OS === 'ios') {
                            Linking.openURL('app-settings:');
                            
                        } else {
                            Linking.openSettings();
                        }
                    }
                }],
                { cancelable: false }
            );

        })
}