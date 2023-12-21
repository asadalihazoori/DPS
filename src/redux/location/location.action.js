import { Alert } from "react-native";
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
            Alert.alert("Location Permission", "User won't be able to punch in because location permission is not allowed.");
        })
}