import { StyleSheet } from 'react-native'
import { COLORS } from '../../../theme/colors';
import { FontStyle } from '../../../theme/FontStyle';


export const stylesOld = StyleSheet.create({
    container: {
        marginHorizontal: 24,
        // marginTop: 24,
        // borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },

    mapView: {
        width: '100%',
        height: '80%',
        // height: 549,
        // borderWidth: 1,
        overflow: 'hidden', // Add this line to hide overflow content
        // borderRadius: 12,
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
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

    },




    button: {
        backgroundColor: 'lightblue',
        padding: 20,
        marginVertical: 10,
    },
    leftAction: {
        backgroundColor: 'tomato',
        justifyContent: 'center',
        flex: 1,
    },
    actionText: {
        color: 'white',
        fontSize: 16,
        padding: 10,
    },

})