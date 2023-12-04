import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontStyle } from '../../theme/FontStyle'
import { COLORS } from '../../theme/colors'

const AttendanceCardNew = ({ date = true, color, punchIn, punchOut }) => {
    return (
        <View style={{ marginTop: 12, }}>

            {date &&
                <Text style={[styles.timeText, { textAlign: 'auto' }]}>24 May</Text>
            }
            <View style={{ marginTop: 4, borderRadius: 8, borderWidth: 0.4, borderColor: color ? '#587CF3' : COLORS.grey4, backgroundColor: color ? 'rgba(88, 124, 243, 0.25)' : COLORS.white }}>
                <View style={styles.itemRow}>

                    <View style={{ flex: 1, padding: 10, borderRightWidth: 0.4, borderColor: COLORS.grey4 }}>

                        <Text style={styles.punchText}>Punch-In</Text>
                        <Text style={styles.timeText}>{punchIn ? punchIn : '----'}</Text>
                    </View>

                    <View style={{ flex: 1, padding: 10, }}>
                        <Text style={styles.punchText}>Punch-Out</Text>
                        <Text style={styles.timeText}>{punchOut ? punchOut : '----'}</Text>
                    </View>

                </View>
            </View>

        </View >
    )
}

export default AttendanceCardNew

const styles = StyleSheet.create({
    itemRow: {
        flexDirection: 'row',
        // borderWidth: 1,
        // justifyContent: 'space-between',
        // marginBottom: 8,
        // marginVertical: 12,
        // paddingHorizontal: 44,


    },
    punchText: {
        ...FontStyle.Regular14_500,
        textAlign: 'center',
        fontWeight: '500',
        // lineHeight: 18,
        color: COLORS.black
    },

    timeText: {
        ...FontStyle.Regular14,
        textAlign: 'center',
        fontWeight: '500',
        // lineHeight: 20,
        color: COLORS.grey4,
        marginTop: 10
    },
})