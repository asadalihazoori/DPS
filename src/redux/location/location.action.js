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

        let userCoordinate = null;

        const permisionResult = await getPermissionJust();
        if (permisionResult) {
            try {

                const userCordinate = await getCoordinatesServices();
                if (userCordinate) {
                    userCoordinate = {
                        lat: userCordinate.coords.latitude,
                        lng: userCordinate.coords.longitude
                    };
                    dispatch(setUserLocation(userCordinate));
                }
            } catch (error) {
                console.log(error, "error while getting coordinate");
            }
        }

        return userCoordinate;
    } catch (error) {
        Alert.alert("Location Permission", "User won't be able to punch in because location permission is not allowed.");
        return null;
    }
}