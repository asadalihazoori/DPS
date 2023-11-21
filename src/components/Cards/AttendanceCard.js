import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../theme/colors'
import { FontStyle } from '../../theme/FontStyle'
import { SvgXml } from 'react-native-svg'
import { Icons } from '../../assets/SvgIcons/Icons'

const AttendanceCard = ({ navigation }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => navigation.navigate('Punch')} >


            <View style={styles.container}>
                <View style={styles.dateView}>
                    <Text style={styles.dateText}>20</Text>
                    <Text style={styles.dateText}>Mon</Text>

                </View>

                <View style={{ flexDirection: 'row', flex: 1, }}>


                    <View style={styles.punchInView}>
                        <Text style={[styles.punchText, { color: COLORS.darkBlack }]}>Punch-In</Text>
                        <Text style={[styles.punchText, { color: '#9E9EA0', }]}>8:30 AM</Text>

                    </View>

                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <SvgXml xml={Icons.verticalLine} />
                    </View>

                    <View style={styles.punchInView}>
                        <Text style={[styles.punchText, { color: COLORS.darkBlack }]}>Punch-Out</Text>
                        <Text style={[styles.punchText, { color: '#9E9EA0', }]}>9:30 PM</Text>

                    </View>

                </View>
            </View>
        </TouchableOpacity>
    )
}

export default AttendanceCard

const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#B2BBBB',
        backgroundColor: '#FFF',
        paddingHorizontal: 8,
        paddingVertical: 12,
        marginBottom: 12,

        flexDirection: 'row',
        elevation: 4,

        marginHorizontal: 4,
        marginTop: 2,

        // borderWidth: 1,
    },

    dateView: {
        padding: 8,
        borderRadius: 8,
        elevation: 4,
        alignItems: 'center',
        backgroundColor: '#F2F2F2',
    },

    dateText: {
        ...FontStyle.Regular12,
        fontWeight: '500',
        lineHeight: 16,
        color: COLORS.darkBlack,
        textAlign: 'center'
    },

    punchInView: {
        // borderWidth: 1,
        alignItems: 'center',
        paddingTop: 4,
        flex: 1,
    },

    punchText: {
        ...FontStyle.Regular14,
        lineHeight: 20,
        letterSpacing: 0,
        textAlign: 'center',


        // color: COLORS.darkBlack
    }

})