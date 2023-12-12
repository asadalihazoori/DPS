import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Theme from '../../theme/theme'
import { SvgXml } from 'react-native-svg'
import { Icons } from '../../assets/SvgIcons/Icons'
import { FontStyle } from '../../theme/FontStyle'
import { COLORS } from '../../theme/colors'

const LoanCard = ({
    data
}) => {

    let color = ''


    switch (data?.state) {
        case 'Adjusted':
            color = COLORS.yellow
            break;

        case 'cancelled':
            color = COLORS.notify
            break;

        case 'Validated':
            color = COLORS.green

            break;

        default:
            color = 'grey'
            break;
    }

    const TextView = ({ title, value }) => (
        <View style={{ flex: 1 }}>
            <Text style={[FontStyle.Regular14_500, { color: COLORS.darkBlack, letterSpacing: 0.2 }]}>{title}</Text>
            <Text style={[styles.headerText, { color: COLORS.grey4, marginTop: 4, letterSpacing: 0.2 }]}>{value}</Text>
        </View>
    )


    const [detail, setOPenDetail] = useState(false);

    return (
        <View style={[styles.outerContainer, {
            backgroundColor: detail ? COLORS.white : 'transparent'
        }]}>

            <TouchableOpacity style={styles.container}
                activeOpacity={0.95}
                onPress={() => setOPenDetail(!detail)}>
                <View style={styles.headerView}>
                    <Text style={styles.headerText}>{data?.type}</Text>
                    <Text style={styles.dateText}>{data?.date}</Text>

                </View>
                <View style={styles.iconView} >
                    <SvgXml xml={detail ? Icons.downArrow : Icons.greaterArrow} />
                </View>
            </TouchableOpacity>

            {detail &&
                <View style={styles.detailView}>

                    <View style={{ flexDirection: 'row', }}>
                        <TextView title={'Amount'} value={data?.amount} />
                        <TextView title={'Type'} value={data?.type} />
                        <TextView title={'Date'} value={data?.date} />


                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 12, }}>
                        <TextView title={'Remaining'} value={data?.remaining} />
                        <TextView title={'Status'} value={data?.state} />
                        <TextView title={''} value={''} />


                    </View>
                    <View style={[styles.statusView, { backgroundColor: color, marginTop: 16 }]}>
                        <Text style={styles.statusText}>{data?.state}</Text>
                    </View>


                </View>
            }
        </View>
    )
}

export default LoanCard

const styles = StyleSheet.create({

    outerContainer: {
        ...Theme.Shadow,
        marginBottom: 10,
        // borderRadius: 8,
        // borderWidth: 0,
        marginHorizontal: 4,
        marginTop: 2,
        borderWidth: 0,
        backgroundColor: COLORS.white
        // borderWidth:1
    },

    container: {
        ...Theme.Shadow,
        borderWidth: 0,
        padding: 8,
        flexDirection: 'row'
    },

    headerView: {
        flex: 1,
        // borderWidth: 1
    },

    iconView: {
        justifyContent: 'center'
    },

    headerText: {
        ...FontStyle.Regular12,
        fontWeight: '500',
        color: COLORS.darkBlack
    },

    dateText: {
        marginTop: 4,
        ...FontStyle.Regular10,
        fontWeight: '400',
        color: COLORS.grey4

    },

    detailView: {
        marginTop: 8,
        paddingVertical: 8,
        paddingHorizontal: 20,
        // borderWidth: 1,

    },

    statusView: {
        borderRadius: 8,
        width: 88,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
        ...Theme.Shadow,
        borderWidth: 0,

        backgroundColor: COLORS.red1,
        alignSelf: 'flex-end',
        // borderWidth: 1

    },

    statusText: {
        ...FontStyle.Regular14,
        fontWeight: '700',
        color: COLORS.white
    },

})