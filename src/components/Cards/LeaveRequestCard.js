import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FontStyle } from '../../theme/FontStyle'
import { COLORS } from '../../theme/colors'
import Theme from '../../theme/theme'

const LeaveRequestCard = ({ data }) => {

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
            <View style={[styles.statusView, { alignSelf: 'flex-start', backgroundColor: color }]}>
                {/* <Text style={styles.statusText}>Rejected</Text> */}
                <Text style={styles.statusText}>{status}</Text>
            </View>

            {/* <Text style={[styles.typeText, { marginVertical: 8 }]}>Casual Leave</Text> */}
            <Text style={[styles.typeText, { marginVertical: 8 }]}>{data?.leaves_type}</Text>
            {/* <Text style={styles.dateText}>01 Dec -15 Dec 2023</Text> */}
            <Text style={styles.dateText}>{data?.date_from_ecube} - {data?.date_to_ecube}</Text>

            <View style={styles.bottomView}>
                <View>

                    <Text style={styles.dateText}>{status}</Text>
                    <Text style={[styles.typeText, { marginTop: 4 }]}>John Doe</Text>
                </View>

                {state == 'Cancel' ?
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={[styles.statusView, styles.buttomStatusView, { backgroundColor: COLORS.grey4 }]}>
                        <Text style={styles.statusText}>{state}</Text>
                    </TouchableOpacity>
                    :
                    <View style={[styles.statusView, styles.buttomStatusView, { backgroundColor: color }]}>
                        <Text style={styles.statusText}>{state}</Text>
                    </View>


                }
            </View>
        </View>

    )
}


export default LeaveRequestCard

const styles = StyleSheet.create({
    container: {
        // borderRadius: 8,
        // borderBottomWidth: 1,
        // borderBottomColor: '#B2BBBB',
        // backgroundColor: '#FFF',
        paddingHorizontal: 12,
        paddingVertical: 16,
        marginBottom: 12,

        // flexDirection: 'row',
        // elevation: 4,

        marginHorizontal: 4,
        marginTop: 2,
        ...Theme.Shadow,
        borderWidth: 0,

        // borderWidth: 1,
    },

    statusView: {
        // paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: COLORS.red1,
        borderRadius: 16,
        width: 70,
        alignItems: 'center',
        // borderWidth: 1

    },

    statusText: {
        ...FontStyle.Regular12,
        fontWeight: '700',
        color: COLORS.white
    },

    typeText: {
        ...FontStyle.Regular14,
        fontWeight: '500',
        color: COLORS.darkBlack,
        // marginVertical: 8,
    },

    dateText: {
        ...FontStyle.Regular12,
        // fontWeight: '500',
        color: COLORS.grey4,
        // marginVertical: 8,
    },

    bottomView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // borderWidth: 1,
        marginTop: 18,
    },

    buttomStatusView: {
        elevation: 8,
        alignSelf: 'flex-end',
        paddingVertical: 8,
        // paddingHorizontal: 14
    }
})