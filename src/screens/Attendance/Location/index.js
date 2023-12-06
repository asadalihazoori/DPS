import { View, Text, SafeAreaView, PermissionsAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import Theme from '../../../theme/theme'
import { styles } from './styles'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { SvgXml } from 'react-native-svg'
import { Icons } from '../../../assets/SvgIcons/Icons'
import { FontStyle } from '../../../theme/FontStyle'
import { COLORS } from '../../../theme/colors'
import AttendanceCardNew from '../AttendanceCardNew'
import { getCurrentDate } from '../../../utilities/CurretDate'
import SwipeReverse from '../SwipeReverse'
// import Geolocation from '@react-native-community/geolocation';
// import GeneralHeader from '../../../components/Headers/GeneralHeader'
import { getPermission } from './AccessLocation'
import { getCoordinates } from './AccessLocation'
import { useDispatch, useSelector } from 'react-redux'

const Location = ({ navigation }) => {

    const [currentDate, setCurrentDate] = useState('');
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const dispatch = useDispatch();
    const uid = useSelector((state) => state.signin.uid);
    const attendanceData = useSelector((state) => state.attendance);
    const employeeID = useSelector((state) => state.employeeProfile.employeeID);


    const punch = () => {
        dispatch(getLeavesStatus({
            uid,
            navigation
        }))
    }


    useEffect(() => {
        setCurrentDate(getCurrentDate());
        // getPermission()
        //     .then(({ latitude, longitude }) => {
        //         setLatitude(latitude);
        //         setLongitude(longitude);

        //     });

        getCoordinates()
            .then(({ latitude, longitude }) => {
                setLatitude(latitude);
                setLongitude(longitude);

            });
    }, [])

    return (
        <SafeAreaView style={Theme.SafeArea}>
            {/* <GeneralHeader title={'Location'} /> */}

            {/* <View style={{ flex: 1, marginTop: 24, borderWidth: 1, paddingHorizontal: 16, }}> */}

            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={[FontStyle.Regular12, { color: COLORS.grey5, fontWeight: '500' }]}>{currentDate}</Text>
                </View>
                {/* <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => navigation.navigate('AttendaceChangeRequest')}
                    style={{ padding: 4, }}>
                    <SvgXml xml={Icons.rightArrow2} />
                </TouchableOpacity> */}
            </View>


            <View style={styles.mapView}>

                <View style={{
                    width: '100%',
                    flex: 1,
                    // height: 400,
                    // height: '70%',
                    overflow: 'hidden',
                    // borderWidth: 1,
                    borderRadius: 8,
                }}>

                    {/* <Text>{latitude}</Text>
                    <Text>{longitude}</Text> */}

                    <MapView
                        style={{ flex: 1 }}
                        // // initialRegion={{
                        // //     latitude: 37.78825,
                        // //     longitude: -122.4324,
                        // //     latitudeDelta: 0.0922,
                        // //     longitudeDelta: 0.0421,
                        // // }}

                        region={{
                            latitude: latitude,
                            longitude: longitude,
                            latitudeDelta: 0.01,
                            longitudeDelta: 0.01

                        }}

                        showsUserLocation={true}
                        zoomControlEnabled={true}
                        // showsCompass={true}
                        // showsTraffic={true}
                        // style={styles.map}
                        // initialRegion={{
                        //     latitude: latitude,
                        //     longitude: longitude,
                        //     latitudeDelta: 0.01,
                        //     longitudeDelta: 0.01

                        // }}
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
                {/* <Text style={[FontStyle.Regular12, { color: COLORS.black, fontWeight: '500', marginTop: 12 }]}>Just Vehicles Solutions</Text>
                    <Text style={[FontStyle.Regular12, { color: COLORS.grey5, marginTop: 8 }]}>Walton 888888888Road, Lahore</Text> */}
            </View>

            {/* <View style={{ marginBottom: 24, justifyContent: 'flex-end' }}>
                    <AttendanceCardNew date={false} color={true} punchIn={'8:30 AM'} punchOut={'9:30 PM'} />
                </View> */}

            <View style={{ marginBottom: 12, alignItems: 'center' }}>

                <SwipeReverse onSlide={punch} />

            </View>
            {/* </View> */}
        </SafeAreaView>
    )
}

export default Location