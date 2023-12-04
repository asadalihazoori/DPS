// import { Component } from 'react';
// import { PermissionsAndroid, Platform } from 'react-native';
// import Geolocation from '@react-native-community/geolocation';
// import { isLocationEnabled, promptForEnableLocationIfNeeded } from 'react-native-android-location-enabler';

// export async function getPermission() {

//   return new Promise((resolve, reject) => {

//     if (Platform.OS === 'android') {
//       PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//         {
//           title: 'Location Permission',
//           message: 'This app needs to access your location',
//           buttonNeutral: 'Ask Me Later',
//           buttonNegative: 'Cancel',
//           buttonPositive: 'OK',
//         }

//       ).then((granted) => {
//         if (granted === PermissionsAndroid.RESULTS.GRANTED) {

//           Geolocation.getCurrentPosition(
//             (position) => {
//               const { latitude, longitude } = position.coords;
//               resolve({ latitude, longitude });
//             },
//             (error) => {
//               reject(error);
//             },
//             { enableHighAccuracy: true, timeout: 15000, maximumAge: 1000 }
//           );
//         } else {
//           reject('Location permission denied');
//         }
//       });
//     } else if (Platform.OS === 'ios') {
//       Geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           resolve({ latitude, longitude });
//         },
//         (error) => {
//           reject(error);
//         },
//         { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//       );
//     }
//   });
// }



// async function IsLocationEnabled() {
//   if (Platform.OS === 'android') {
//     const checkEnabled = await isLocationEnabled();
//     console.log('checkEnabled', checkEnabled)
//   }
// }



// async function enableLocation() {
//   if (Platform.OS === 'android') {
//     try {
//       const enableResult = await promptForEnableLocationIfNeeded();
//       console.log('enableResult', enableResult);
//     } catch (error) {
//       if (error instanceof Error) {
//         console.error(error.message);
//       }
//     }
//   }
// }



// import { Component } from 'react';
import { PermissionsAndroid, Platform } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { isLocationEnabled, promptForEnableLocationIfNeeded } from 'react-native-android-location-enabler';

export async function getPermission() {
  return new Promise(async (resolve, reject) => {
    if (Platform.OS === 'android') {
      // const checkEnabled = await isLocationEnabled();

      // if (!checkEnabled) {
      //   try {
      //     await promptForEnableLocationIfNeeded();
      //   } catch (error) {
      //     if (error instanceof Error) {
      //       console.error(error.message);
      //       reject('Failed to enable location');
      //       return;
      //     }
      //   }
      // }

      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'This app needs to access your location',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      ).then(async (granted) => {
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


          Geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              resolve({ latitude, longitude });
            },
            (error) => {
              reject(error);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 1000 }
          );
        } else {
          reject('Location permission denied');
        }
      });
    } else if (Platform.OS === 'ios') {
      Geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          resolve({ latitude, longitude });
        },
        (error) => {
          reject(error);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    }
  });
}

// async function IsLocationEnabled() {
//   if (Platform.OS === 'android') {
//     const checkEnabled = await isLocationEnabled();
//     console.log('checkEnabled', checkEnabled);
//   }
// }

// async function enableLocation() {
//   if (Platform.OS === 'android') {
//     try {
//       const enableResult = await promptForEnableLocationIfNeeded();
//       console.log('enableResult', enableResult);
//     } catch (error) {
//       if (error instanceof Error) {
//         console.error(error.message);
//       }
//     }
//   }
// }
