
import { PermissionsAndroid, Platform } from 'react-native';
// import Geolocation from '@react-native-community/geolocation';
import { isLocationEnabled, promptForEnableLocationIfNeeded } from 'react-native-android-location-enabler';

import GetLocation, { GetCurrentPositionOptions } from 'react-native-get-location';

import Geolocation from 'react-native-geolocation-service';

export function getPermissionJust() {
  return new Promise(async (resolve, reject) => {
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

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          const checkEnabled = await isLocationEnabled();

          if (!checkEnabled) {
            await promptForEnableLocationIfNeeded();
          }

          resolve(); // Resolve if everything is successful.
        } else {
          reject('Location permission denied');
        }
      } catch (error) {
        console.error(error.message);
        reject('Failed to enable location');
      }
    }
  });
}



// export async function getPermissionJust() {
//   if (Platform.OS === 'android') {

//     PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//       {
//         title: 'Location Permission',
//         message: 'This app needs to access your location',
//         buttonNeutral: 'Ask Me Later',
//         buttonNegative: 'Cancel',
//         buttonPositive: 'OK',
//       }
//     )
//       .then(async (granted) => {
//         // console.log("grant", granted)
//         if (granted === PermissionsAndroid.RESULTS.GRANTED) {


//           const checkEnabled = await isLocationEnabled();

//           if (!checkEnabled) {
//             try {
//               await promptForEnableLocationIfNeeded();
//             } catch (error) {
//               if (error instanceof Error) {
//                 console.error(error.message);
//                 reject('Failed to enable location');
//                 return;
//               }
//             }
//           }


//         } else {
//           reject('Location permission denied');
//         }
//       });
//   }

// }


// export function getCoordinates(age = 0) {
//   return new Promise(async (resolve, reject) => {



//     Geolocation.getCurrentPosition(
//       (position) => {
//         const { latitude, longitude } = position.coords;
//         console.log(latitude, longitude)
//         resolve({ latitude, longitude });
//       },
//       (error) => {
//         reject(error);
//       },
//       {
//         enableHighAccuracy: true,
//         timeout: 10000,
//         maximumAge: age
//       }
//     );
//   }).catch((error) => {

//     getPermissionJust();
//     console.log("Error getting coordinates:", error);
//     throw (error);
//   });
// }

export function getCoordinates(age = 0) {
  // return new Promise((resolve, reject) => {
  //   Geolocation.getCurrentPosition(
  //     (position) => {
  //       const { latitude, longitude } = position.coords;
  //       console.log(latitude, longitude);
  //       resolve({ latitude, longitude });
  //     },
  //     (error) => {
  //       getPermissionJust();
  //       console.log("Error getting coordinates:", error);
  //       reject(error);
  //     },
  //     {
  //       enableHighAccuracy: true,
  //       timeout: 30000,
  //       maximumAge: age
  //     }
  //   );
  // });

}
export function getCoordinatesNew(age = 0) {
  return new Promise((resolve, reject) => {

    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 60000,

    })
      .then(location => {
        resolve(location);
        console.log(location);
      })
      .catch(error => {
        const { code, message } = error;
        console.log(code, error);
        reject(error);
      })

  })
}

// export function getCoordinatesTest() {
//   return new Promise((resolve, reject) => {
//     // Geolocation.getCurrentPosition(
//     Geolocation.getCurrentPosition(
//       (position) => {
//         const { latitude, longitude } = position.coords;
//         console.log(latitude, longitude);
//         resolve({ latitude, longitude });
//       },
//       (error) => {
//         getPermissionJust();
//         console.log("Error getting coordinates:", error);
//         reject(error);
//       },
//       {
//         enableHighAccuracy: true,
//         timeout: 30000,
//         // maximumAge: age
//       }
//     );
//   });
// }



export function getCoordinatesServices() {
  return new Promise((resolve, reject) => {
    // Geolocation.getCurrentPosition(
    Geolocation.getCurrentPosition(
      position => {
        console.log(position);
        // setLocation(position);
        resolve(position);

      },
      error => {
        // See error code charts below.
        console.log(error.code, error.message);
        // setLocation(false);
        reject(error)
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 0 },
    );
  });
}
