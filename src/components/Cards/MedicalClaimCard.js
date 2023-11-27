import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Theme from '../../theme/theme'
import { SvgXml } from 'react-native-svg'
import { Icons } from '../../assets/SvgIcons/Icons'
import { FontStyle } from '../../theme/FontStyle'
import { COLORS } from '../../theme/colors'

const MedicalClaimCard = ({
    data
}) => {

    let color = ''


    switch (data?.state) {
        case 'draft':
            color = COLORS.yellow
            break;

        case 'cancel':
            color = COLORS.red1
            break;

        case 'validate':
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
                activeOpacity={0.9}
                onPress={() => setOPenDetail(!detail)}>
                <View style={styles.headerView}>
                    <Text style={styles.headerText}>{data?.name}</Text>
                    <Text style={styles.dateText}>{data?.date}</Text>

                </View>
                <View style={styles.iconView} >
                    <SvgXml xml={detail ? Icons.downArrow : Icons.greaterArrow} />
                </View>
            </TouchableOpacity>

            {detail &&
                <View style={styles.detailView}>

                    <View style={{ flexDirection: 'row', }}>
                        <TextView title={'Claim For'} value={data?.claim_type} />
                        <TextView title={'Name'} value={data?.name} />
                        <TextView title={'Disease'} value={data?.tree[0]?.disease_type} />


                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 12, }}>
                        {/* <TextView title={'Disease'} value={data?.tree[0]?.disease_type} /> */}
                        <TextView title={'Claim Amount'} value={data?.tree?.[0]?.claim_amount} />
                        <TextView title={'Approved Amount'} value={data?.apporve_amount} />


                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 12, }}>
                        <TextView title={'Claim Date'} value={data?.tree?.[0]?.date_claim} />
                        <TextView title={'Approved Date'} value={data?.date} />


                    </View>

                    <View style={{ marginTop: 12 }}>
                        <Text style={[FontStyle.Regular14_500, { color: COLORS.darkBlack, letterSpacing: 0.2 }]}>Description</Text>

                        <View style={[Theme.Shadow, { marginTop: 8, paddingHorizontal: 8, paddingVertical: 12, elevation: 1 }]}>
                            <Text style={FontStyle.Regular12_400}>{data?.tree?.[0]?.description}</Text>
                        </View>
                    </View>

                    <View style={[styles.statusView, { backgroundColor: color }]}>
                        <Text style={styles.statusText}>{data?.state}</Text>
                    </View>


                </View>
            }
        </View>
    )
}

export default MedicalClaimCard

const styles = StyleSheet.create({

    outerContainer: {
        marginBottom: 10,
        // borderWidth:1
        borderRadius: 8,
        ...Theme.Shadow,
        borderWidth: 0,
        marginHorizontal: 4,
        marginTop: 2,
        backgroundColor: COLORS.white
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
        // backgroundColor: COLORS.red1,
        borderRadius: 8,
        width: 88,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
        ...Theme.Shadow,
        borderWidth: 0,
        alignSelf: 'flex-end',
        marginTop: 16,
        // borderWidth: 1

    },

    statusText: {
        ...FontStyle.Regular14,
        fontWeight: '700',
        color: COLORS.white
    },

})