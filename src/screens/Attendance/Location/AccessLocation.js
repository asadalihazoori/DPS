
import { PermissionsAndroid, Platform } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { isLocationEnabled, promptForEnableLocationIfNeeded } from 'react-native-android-location-enabler';

export async function getPermissionJust() {
  if (Platform.OS === 'android') {

    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Location Permission',
        message: 'This app needs to access your location',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      }
    )
      .then(async (granted) => {
        console.log("grant", granted)
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {


          const checkEnabled = await isLocationEnabled();

          if (!checkEnabled) {
            try {
              await promptForEnableLocationIfNeeded();
            } catch (error) {
              if (error instanceof Error) {
                console.error(error.message);
                reject('Failed to enable location');
                return;
              }
            }
          }


        } else {
          reject('Location permission denied');
        }
      });
  }

}


export function getCoordinates() {
  return new Promise(async (resolve, reject) => {

    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log(latitude, longitude)
        resolve({ latitude, longitude });
      },
      (error) => {
        reject(error);
      },
      {
        enableHighAccuracy: true,
        //  maximumAge: 3000 
        // timeout: 15000, 
        // maximumAge: 10000
      }
    );
  }).catch((error) => {
    // Handle the promise rejection here
    getPermissionJust();
    console.log("Error getting coordinates:", error);
  });
}