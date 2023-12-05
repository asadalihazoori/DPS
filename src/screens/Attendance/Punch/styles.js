import { StyleSheet } from 'react-native'
import { COLORS } from '../../../theme/colors';
import { FontStyle } from '../../../theme/FontStyle';
import Theme from '../../../theme/theme';

export const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,
        // marginTop: 24,
        // borderWidth: 1,
        flex: 1,
    },

    welcomeText: {
        ...FontStyle.Regular12_400,
        color: COLORS.grey4,
        lineHeight: 14,
        letterSpacing: 0
    },

    nameText: {
        ...FontStyle.Regular14,
        color: COLORS.darkBlack,
        lineHeight: 20,
        letterSpacing: 0
    },

    dateText: {
        ...FontStyle.Regular12,
        fontWeight: '500',
        color: COLORS.grey5
        // lineHeight: 18,

    },

    weekView: {

        marginLeft: 32,
        // justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },

    timeSheetText: {
        ...FontStyle.Regular16,
        lineHeight: 20,
    },

    weekText: {
        ...FontStyle.Regular14,
        color: COLORS.grey4,
        // lineHeight: 20,
        // letterSpacing: 0
    },



    buttonsView: {
        marginTop: 24,
        marginBottom: 34,
        // borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
        // justifyContent: 'space-between'
    },



    button: {
        // flexDirection: 'row',
        // borderWidth: 1,
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 16,
        backgroundColor: COLORS.green,
        // marginHorizontal: 32,
        elevation: 4,

        // marginLeft: 10,

    },

    buttonText: {
        ...FontStyle.Regular14,
        color: COLORS.white
    },

    cardView: {
        ...Theme.Shadow,
        borderWidth: 0,
        // marginHorizontal: 4,
        elevation: 3,
        // paddingVertical: 8,
        // borderRadius: 8,
        // backgroundColor: '#FFF',
        // elevation: 4,
        // borderBottomWidth: 1,
        // borderBottomColor: '#B2BBBB',
        // paddingHorizontal: 18,
        // paddingBottom: 4,
        // marginBottom: 24,

        // flexDirection: 'row',

        // marginHorizontal: 4,
        // marginTop: 24,
    },

    itemRow: {
        flexDirection: 'row',
        // borderWidth: 1,
        // justifyContent: 'space-between',
        // marginBottom: 8,
        // marginVertical: 12,
        // paddingHorizontal: 44,


    },

    rowText: {
        ...FontStyle.Regular16,
        fontWeight: '400',
        lineHeight: 18,
        color: COLORS.black,


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

    percentageText: {
        ...FontStyle.Regular12_400,
        color: COLORS.darkBlack,
        // lineHeight: 16,
        // letterSpacing: 0,
        // alignSelf: 'center',
    },


    bottomView: {
        justifyContent: 'flex-end',
        marginBottom: 24,
        // borderWidth: 1,
        flex: 1,
    },







});