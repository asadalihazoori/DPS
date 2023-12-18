import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SvgXml } from 'react-native-svg'
import { FontStyle } from '../../theme/FontStyle'
import { COLORS } from '../../theme/colors'
import Theme from '../../theme/theme'

const DashboardCard = ({
    icon,
    title,
    onPress,
    notify,
}) => {

    return (
        <View style={styles.conatiner}>
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={onPress}
                style={[Theme.Shadow, styles.buttonView]}
            >

                <View style={{
                    width: 12, height: 12,
                    backgroundColor: notify ? COLORS.notify : 'transparent', borderRadius: 6, marginTop: 8, marginLeft: 8
                }}></View>

                <View style={styles.iconView}>
                    <SvgXml xml={icon} />
                </View>

                <View style={{ marginTop: 8, alignItems: 'center', marginBottom: 23 }}>
                    <Text style={[FontStyle.Regular14, { color: COLORS.primaryColor, fontWeight: '500' }]}>{title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default DashboardCard

const styles = StyleSheet.create({
    conatiner: {
        // borderWidth: 1

    },

    buttonView: {
        // height: 95,
        backgroundColor: COLORS.white,
        width: Dimensions.get('window').width * 0.42,
        borderRadius: 10,
        borderWidth: 0.6,
        borderColor: '#C1C1C1'
    },

    iconView: {
        marginTop: 3,
        alignItems: 'center'
    }
})