import { View, SafeAreaView, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import Theme from '../../../theme/theme'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { stylesOld } from './stylesOld'
import Swipe from '../Swipe'
import { getCoordinates } from './AccessLocation copy'
import { useDispatch, useSelector } from 'react-redux'
import { createPunchIn } from '../../../redux/attendance/actions/createPunchIn'
import SwipeReverse from '../SwipeReverse'
import { createPunchOut } from '../../../redux/attendance/actions/createPunchOut'
import { getCurrentDateTime } from '../../../utilities/CurrentTime'
import { checkAttendanceLocationApi } from '../../../utilities/api/apiController'
import Loader from '../../../components/Loader'

const LocationOld = ({ navigation, route }) => {

    const { punchStatus, lat, long } = route?.params;

    const [latitude, setLatitude] = useState(lat);
    const [longitude, setLongitude] = useState(long);
    const [loading, setLoading] = useState(true);
    const [freeze, setFreeze] = useState(false);
    const [title, setTitle] = useState('Verifying Location...');

    const dispatch = useDispatch();
    const uid = useSelector((state) => state.signin.uid);
    const employeeID = useSelector((state) => state.employeeProfile.employeeID);


    const punchIn = () => {

        setFreeze(false);
        setTitle('Punching In...')
        const result = getCurrentDateTime()

        dispatch(createPunchIn({
            time: result,
            latitude,
            longitude,
            uid,
            navigation,
            employeeID,
            setTitle,
            setFreeze
        }))
    }

    const punchOut = () => {

        setFreeze(false);
        setTitle('Punching Out...')
        const result = getCurrentDateTime()

        dispatch(createPunchOut({
            time: result,
            latitude,
            longitude,
            uid,
            navigation,
            employeeID,
            setTitle,
            setFreeze
        }))
    }


    const checkAttendance = async () => {

        try {
            const body = {
                "params": {
                    "model": "pos.location.wags",
                    "method": "check_locations",
                    "args": [
                        [
                            {
                                "user_id": uid,  //uid
                                "latitude": 32, //latitude
                                "longitude": 72 //longitude
                            }
                        ]
                    ],
                    "kwargs": {}
                }
            }

            const response = await checkAttendanceLocationApi({ body, navigation });
            console.log(response?.data?.result);
            setLoading(false);

            if (response?.data?.result?.message == "True") {
                setFreeze(true);
            }

            else if (response?.data?.result?.message == "False") {
                Alert.alert("Warning", `You are not allowed to Punching at this location.`);
                setTitle('Punching Not Allowed Here');
                setFreeze(false);
            }

            else if (response?.data?.error) {
                Alert.alert(response?.data?.error?.message, response?.data?.error?.data?.message)
            }

            else if (response == 'AxiosError: Request failed with status code 404') {
                Alert.alert("Session Expired", `Please Login Again`);
            }

            else if (response == "AxiosError: Network Error") {
                Alert.alert("Internet Connection Failed", "Try to connect with Wifi or Mobile Network");
            }
            else {
                Alert.alert("Error", "Try Again");

            }

        }

        catch (error) {
            Alert.alert(error);
            // setLoading(false);
        }
    }

    useEffect(() => {
        getCoordinates()
            .then(({ latitude, longitude }) => {
                setLatitude(latitude);
                setLongitude(longitude);

            })
            .then(() => {
                checkAttendance();
            });
    }, [])

    return (
        <SafeAreaView style={Theme.SafeArea}>

            <View style={stylesOld.mapView}>

                <MapView
                    style={{ flex: 1 }}

                    initialRegion={{
                        latitude: latitude,
                        longitude: longitude,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01

                    }}

                    region={{
                        latitude: latitude,
                        longitude: longitude,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01

                    }}

                    showsUserLocation={true}
                    zoomControlEnabled={true}
                    provider={PROVIDER_GOOGLE}
                >
                    <Marker
                        coordinate={{
                            latitude: latitude,
                            longitude: longitude
                        }}
                        title={'Current Location'}
                    />

                </MapView>
            </View>


            <View style={stylesOld.container}>


                {punchStatus == "Punch-In" ?
                    <Swipe
                        onSlide={punchIn}
                        freeze={freeze}
                        title={title}
                    />
                    :
                    <SwipeReverse onSlide={punchOut}
                        freeze={freeze}
                        title={title} />

                }

            </View>
            <Loader loading={loading} title={'Get your location...'} />
        </SafeAreaView>
    )
}

export default LocationOld