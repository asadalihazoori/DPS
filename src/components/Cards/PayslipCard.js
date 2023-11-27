import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../theme/colors'
import { FontStyle } from '../../theme/FontStyle'
import { SvgXml } from 'react-native-svg'
import { Icons } from '../../assets/SvgIcons/Icons'
import Theme from '../../theme/theme'

const PayslipCard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.iconView}>
                <SvgXml xml={Icons.camera} />

            </View>
            <View style={styles.textView}>

                <View style={styles.monthDateView}>
                    <Text style={styles.monthText}>April</Text>
                    <Text style={styles.dateText}>01/01/2023 - 30/01/2023</Text>
                </View>


                <View style={styles.amountView} >
                    <Text style={styles.amountText}>50,000 Rs</Text>

                </View>

            </View>
        </View>
    )
}

export default PayslipCard

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 8,
        paddingVertical: 8,
        marginBottom: 12,

        flexDirection: 'row',

        marginHorizontal: 4,
        marginTop: 2,
        ...Theme.Shadow,
        // borderWidth: 1,
    },

    iconView: {
        // borderWidth: 1,
        justifyContent: 'center',

    },

    textView: {
        flex: 1,
        marginLeft: 12,
        flexDirection: 'row',
        // borderWidth: 1
    },

    monthDateView: {
        marginLeft: 12,
        flex: 1
    },

    monthText: {
        ...FontStyle.Regular14,
        fontWeight: '400',
        color: COLORS.black,
        lineHeight: 18,
    },

    dateText: {
        ...FontStyle.Regular12,
        color: '#9E9EA0',
        lineHeight: 18,
    },

    amountView: {
        // borderWidth: 1,
        justifyContent: 'flex-end',
        paddingRight: 12,
        marginLeft: 40,
    },

    amountText: {
        ...FontStyle.Regular12,
        color: COLORS.black,
        lineHeight: 20,
    },


})