import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Theme from '../../../theme/theme'
import { styles } from './styles'
import MapView from 'react-native-maps'
import { SvgXml } from 'react-native-svg'
import { Icons } from '../../../assets/SvgIcons/Icons'
import { FontStyle } from '../../../theme/FontStyle'
import { COLORS } from '../../../theme/colors'
import AttendanceCardNew from '../AttendanceCardNew'

const Location = ({ navigation }) => {
    return (
        <View style={{ flex: 1, paddingHorizontal: 16, }}>

            <View>
                <Text style={[FontStyle.Regular12, { color: COLORS.grey5, fontWeight: '500' }]}>23 November 2023</Text>
            </View>


            <View style={styles.mapView}>

                <View style={{
                    width: '100%',
                    height: 200,
                    // height: '70%',
                    overflow: 'hidden',
                    // borderWidth: 1,
                    borderRadius: 8,
                }}>


                    <MapView
                        style={{ flex: 1 }}
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    />
                </View>
                <Text style={[FontStyle.Regular12, { color: COLORS.black, fontWeight: '500', marginTop: 12 }]}>Just Vehicles Solutions</Text>
                <Text style={[FontStyle.Regular12, { color: COLORS.grey5, marginTop: 8 }]}>Walton Road, Lahore</Text>
            </View>

            <View style={{ marginBottom: 24, flex: 1, justifyContent: 'flex-end' }}>

                <AttendanceCardNew date={false} color={true} />
            </View>

        </View>
    )
}

export default Location