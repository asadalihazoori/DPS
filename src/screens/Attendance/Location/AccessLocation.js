
import { PermissionsAndroid, Platform } from 'react-native';
import { isLocationEnabled, promptForEnableLocationIfNeeded } from 'react-native-android-location-enabler';
// import GetLocation, { GetCurrentPositionOptions } from 'react-native-get-location';
// import Geolocation from '@react-native-community/geolocation';


import Geolocation from 'react-native-geolocation-service';

export function getPermissionJust() {
  return new Promise(async (resolve, reject) => {

    console.log("permission function called")
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'This app needs to access your location',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        );

        console.log("Grant:", granted)
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {

          // const checkEnabled = await isLocationEnabled();
          // if (!checkEnabled) {
          //   await promptForEnableLocationIfNeeded();
          // }

          resolve();
        } else {
          reject('Location permission denied');
        }
      } catch (error) {
        console.log(error.message);
        reject('Failed to enable location');
      }
    }
    else if (Platform.OS === "ios") {
      Geolocation.requestAuthorization("whenInUse");
    }

  });
}


export function getCoordinatesServices() {
  return new Promise((resolve, reject) => {
    console.log("Getting Coordinates")
    Geolocation.getCurrentPosition(
      position => {
        console.log(position);
        resolve(position);

      },
      error => {
        console.log(error.code, error.message);
        // getPermissionJust();
        reject(error)
      },
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 0
      },
    );

  });
}
