import { StyleSheet } from 'react-native'
import { COLORS } from '../../../theme/colors';
import { FontStyle } from '../../../theme/FontStyle';


export const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,
        // marginTop: 24,
        // borderWidth: 1,
        flex: 1,
    },

    mapView: {
        // width: '100%',
        // height: '70%',
        // borderWidth: 1,
        // flex: 1,
        borderRadius: 8,
        padding: 8,
        // overflow: 'hidden',
        marginTop: 16,
        backgroundColor: COLORS.white

        // height: 549,
        // borderRadius: 12,
        // borderBottomLeftRadius: 16,
        // borderBottomRightRadius: 16,
    },

    locationView: {
        marginTop: 16,
        flexDirection: 'row',
        borderRadius: 20,
        backgroundColor: COLORS.backgroundInput,
        padding: 8,
    },

    locationText: {
        justifyContent: 'center',
        marginLeft: 10,
    },

    itemRow: {
        flexDirection: 'row',
        // borderWidth: 1,
        justifyContent: 'space-between',
        // marginBottom: 8,
        // marginVertical: 12,
        marginTop: 24,
        paddingHorizontal: 8,


    },


    punchText: {
        ...FontStyle.Regular12,
        textAlign: 'center',
        fontWeight: '700',
        lineHeight: 18,
        color: COLORS.grey4
    },

    timeText: {
        ...FontStyle.Regular14,
        textAlign: 'center',
        fontWeight: '700',
        lineHeight: 20,
        color: COLORS.darkBlack
    },

    buttonView: {
        flexDirection: 'row',
        borderRadius: 8,
        backgroundColor: COLORS.red1,
        paddingHorizontal: 8,
        // justifyContent: 'flex-end'
        marginBottom: 16
    },

    iconView: {
        borderRadius: 10,
        backgroundColor: COLORS.background1,
        padding: 8,
        marginVertical: 6,
    },

    text: {
        ...FontStyle.Regular14,
        color: COLORS.white,
        // lineHeight: 10

    }

})