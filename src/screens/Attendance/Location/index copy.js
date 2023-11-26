import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Theme from '../../../theme/theme'
import { styles } from './styles'
import MapView from 'react-native-maps'
import { SvgXml } from 'react-native-svg'
import { Icons } from '../../../assets/SvgIcons/Icons'
import { FontStyle } from '../../../theme/FontStyle'
import { COLORS } from '../../../theme/colors'

const Location = ({ navigation }) => {
    return (
        <SafeAreaView style={Theme.SafeArea}>

            <View style={styles.mapView}>

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

            <View style={styles.container}>
                <View style={styles.locationView}>

                    <SvgXml xml={Icons.location} />
                    <View style={styles.locationText}>
                        <Text style={[FontStyle.Regular14, { fontWeight: '400', color: COLORS.grey4 }]}>1076 Block A DHA Lahore</Text>
                    </View>

                </View>


                <View style={styles.itemRow}>

                    <View>

                        <Text style={styles.punchText}>Punch-In</Text>
                        <Text style={styles.timeText}>8:30 AM</Text>
                    </View>

                    <View>
                        <Text style={styles.punchText}>Punch-Out</Text>
                        <Text style={styles.timeText}>9:30 PM</Text>
                    </View>

                </View>
                <View style={{ justifyContent: 'flex-end', flex: 1 }}>

                    <View style={styles.buttonView}>
                        <View style={{ justifyContent: 'center', flex: 1 }}>

                            <Text style={styles.text}>Swipe Left to Punch Out</Text>
                        </View>

                        <View style={styles.iconView}>
                            <SvgXml xml={Icons.punchArrow} />
                        </View>

                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Location