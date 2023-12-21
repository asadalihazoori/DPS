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

    try {

        let userLocation = null;

        const permisionResult = await getPermissionJust();
        if (permisionResult) {
            try {

                const newCoordinate = await getCoordinatesServices();
                if (newCoordinate) {
                    userLocation = {
                        lat: newCoordinate.coords.latitude,
                        lng: newCoordinate.coords.longitude
                    };
                    dispatch(setUserLocation(userLocation));
                }
            } catch (error) {
                console.log(error, "error while getting coordinate");
            }
        }

        return userLocation;
    } catch (error) {
        Alert.alert("Location Permission", "User won't be able to punch in because location permission is not allowed.");
        return null;
    }
}