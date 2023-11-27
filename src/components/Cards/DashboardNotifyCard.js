import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FontStyle } from '../../theme/FontStyle'
import { COLORS } from '../../theme/colors'
import Theme from '../../theme/theme'

const DashboardNotifyCard = ({ data }) => {

    let state = ''
    let status = ''
    let color = ''


    switch (data?.state) {
        case 'confirm':
            status = 'Pending'
            state = 'Cancel'
            color = COLORS.yellow
            break;

        case 'refuse':
            status = 'Rejected'
            state = 'Rejected'
            color = COLORS.red1
            break;

        case 'validate':
            status = 'Accepted'
            state = 'Approved'
            color = COLORS.green

            break;




        default:
            break;
    }


    return (
        <View style={styles.container}>

            <View style={{ flex: 1 }}>


                <Text style={[styles.typeText]}>Casual Leave</Text>
                {/* <Text style={[styles.typeText, { marginVertical: 8 }]}>{data?.leaves_type}</Text> */}
                <Text style={styles.dateText}>01 Dec - 15 Dec 2023</Text>
                {/* <Text style={styles.dateText}>{data?.date_from_ecube} - {data?.date_to_ecube}</Text> */}
                <Text style={styles.remarksText}>20,000/- has been approved </Text>
            </View>
            <View style={{ justifyContent: 'center' }}>
                <View style={[styles.statusView, { backgroundColor: COLORS.green, justifyContent: 'center' }]}>
                    <Text style={styles.statusText}>Approved</Text>
                </View>
            </View>

        </View>

    )
}


export default DashboardNotifyCard

const styles = StyleSheet.create({
    container: {
        // borderRadius: 8,
        backgroundColor: '#FFF',
        paddingHorizontal: 8,
        paddingVertical: 8,
        marginBottom: 12,

        ...Theme.Shadow,
        borderWidth: 0,


        marginHorizontal: 4,
        // marginTop: 2,

        flexDirection: 'row',
        // borderBottomColor: '#B2BBBB',
        // borderBottomWidth: 1,
        // borderWidth: 1,
    },

    statusView: {
        // paddingHorizontal: 10,
        paddingVertical: 8,
        backgroundColor: COLORS.red1,
        borderRadius: 8,
        width: 86,

        alignItems: 'center',
        // borderWidth: 1

    },

    statusText: {
        ...FontStyle.Regular14_500,
        color: COLORS.white
    },

    typeText: {
        ...FontStyle.Regular14,
        color: COLORS.darkBlack,
    },

    dateText: {
        ...FontStyle.Regular12,
        // fontWeight: '500',
        color: COLORS.grey4,
        // marginVertical: 8,
        marginTop: 4,
    },

    remarksText: {
        ...FontStyle.Regular12,
        color: COLORS.darkBlack,
        marginTop: 12,
    }
})