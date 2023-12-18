import { View, SafeAreaView, Alert, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Theme from '../../../theme/theme'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { styles } from './styles'
import { getCoordinates } from './AccessLocation'
import { useDispatch, useSelector } from 'react-redux'
import { createPunchIn } from '../../../redux/attendance/actions/createPunchIn'
import { createPunchOut } from '../../../redux/attendance/actions/createPunchOut'
import { getCurrentDateTime } from '../../../utilities/CurrentTime'
import { checkAttendanceLocationApi } from '../../../utilities/api/apiController'
import Loader from '../../../components/Loader'
import { SvgXml } from 'react-native-svg'
import GeneralHeader from '../../../components/Headers/GeneralHeader'
import { COLORS } from '../../../theme/colors'
import Swipe from '../../../components/Swipe'
import SwipeReverse from '../../../components/SwipeReverse'

const LocationOld = ({ navigation, route }) => {

    const { punchStatus, lat, long } = route?.params;

    const [latitude, setLatitude] = useState(lat);
    const [longitude, setLongitude] = useState(long);
    const [loading, setLoading] = useState(true);// true
    const [freeze, setFreeze] = useState(false);
    const [title, setTitle] = useState('Verifying Location...');

    const dispatch = useDispatch();
    const uid = useSelector((state) => state.signin.uid);
    const employeeID = useSelector((state) => state.employeeProfile.employeeID);

    const employeeCode = useSelector((state) => state.employeeProfile.employeeCode);
    const department = useSelector((state) => state.employeeProfile.department);


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
            employeeCode,
            department,

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
            employeeCode,
            department,
            setTitle,
            setFreeze
        }))
    }


    const checkAttendance = async () => {

        try {
            const body = {
                "params": {
                    "model": "attendance.location.wags",// attendance.location.wags, //pos.location.wags
                    "method": "check_locations",
                    "args": [
                        [
                            {
                                "user_id": uid,  //uid
                                "latitude": latitude, //latitude
                                "longitude": longitude //longitude
                            }
                        ]
                    ],
                    "kwargs": {}
                }
            }

            const response = await checkAttendanceLocationApi({ body, navigation });
            console.log("apiRespose", response?.data);
            setLoading(false);

            if (response?.data?.result?.message == "True") {
                setFreeze(true);
            }

            else if (response?.data?.result?.message == "False") {
                Alert.alert("Warning", `You are not allowed to Punching at this location.`);
                setTitle('Punching Not Allowed Here');
                setFreeze(false);
            }

            else {

                setFreeze(true);
                if (response?.data?.error) {
                    if (response?.data?.error?.message == "Odoo Session Expired") {
                        navigation.replace("Login")
                    }
                    // Alert.alert(response?.data?.error?.message, response?.data?.error?.data?.message)
                }

                else if (response == 'AxiosError: Request failed with status code 404') {
                    // Alert.alert("Session Expired", `Please Login Again`);
                }

                else if (response == "AxiosError: Network Error") {
                    // Alert.alert("Internet Connection Failed", "Try to connect with Wifi or Mobile Network");
                }
                else {
                    Alert.alert("Error", "Try Again");

                }
            }

        }

        catch (error) {
            Alert.alert(error);
            setLoading(false);
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
            })
            .catch((error) => console.log(error))

        // setFreeze(true); //remove zrori
    }, [])

    return (
        <SafeAreaView style={Theme.SafeArea}>

            <GeneralHeader title={punchStatus} navigation={navigation} />

            <View style={styles.mapView}>

                <MapView
                    style={{ flex: 1 }}

                    initialRegion={{
                        latitude: 32.03983860, // riyad 24.7136,
                        longitude: 72.71208540,//riyad 46.6753,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01

                    }}

                    region={{
                        latitude: latitude ? latitude : 32.03983860,//24.7136,
                        longitude: longitude ? longitude : 72.71208540,//46.6753,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01

                    }}

                    // showsUserLocation={true}
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
                {/* <TouchableOpacity
                    activeOpacity={0.5}
                    style={{
                        position: 'absolute',
                        top: 20,
                        left: 20,
                        height: 45,
                        width: 45,
                        borderRadius: 22.5,
                        borderWidth: 1,
                        backgroundColor: COLORS.white,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>

                    <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="21" height="19" viewBox="0 0 21 19" fill="none">
                            <path d="M9.49947 1.64694L1.57867 9.51494L9.44667 17.4357M1.57867 9.51494L19.623 9.57528L1.57867 9.51494Z" stroke="black" stroke-width="2.25556" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>`} />

                </TouchableOpacity> */}
            </View>


            <View style={styles.container}>

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