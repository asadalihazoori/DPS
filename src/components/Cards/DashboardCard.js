import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SvgXml } from 'react-native-svg'
import { FontStyle } from '../../theme/FontStyle'
import { COLORS } from '../../theme/colors'
import Theme from '../../theme/theme'

const DashboardCard = ({
    icon,
    title,
    onPress
}) => {

    return (
        <View style={styles.conatiner}>
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={onPress}
                style={[Theme.Shadow, styles.buttonView]}
            >

                <View style={styles.iconView}>
                    <SvgXml xml={icon} />
                </View>

                <View style={{ marginTop: 10, alignItems: 'center' }}>
                    <Text style={[FontStyle.Regular14, { color: COLORS.darkBlack, fontWeight: '500' }]}>{title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default DashboardCard

const styles = StyleSheet.create({
    conatiner: {
        marginHorizontal: 0,
        // marginLeft:14,
        // borderWidth:1
    },

    buttonView: {
        height: 95,
        backgroundColor: COLORS.white,
        width: 140.892,
        borderRadius: 10
    },

    iconView: {
        marginTop: 24,
        alignItems: 'center'
    }
})