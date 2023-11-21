import { StyleSheet } from 'react-native'
import { COLORS } from '../../../theme/colors';

export const stylesO = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },

    profileView: {
        backgroundColor: COLORS.background,
        height: 220,
        justifyContent: 'center',
        alignItems: 'center',
    },

    image: {
        alignItems: 'center',
        position: 'absolute',
        justifyContent: 'center'

    },

    iconView: {
        position: 'absolute',
        right: 0,
        marginRight: 10,
        marginTop: 10

    },

    title: {
        fontSize: 16,
        marginTop: 6,
        fontWeight: 'bold',
        // borderWidth: 1,
        color: COLORS.black,
        // flex:1
    },
    caption: {
        marginTop: 2,
        fontSize: 14,
        // lineHeight: 10,
        // borderWidth: 1
    },

    text: {
        color: COLORS.black,
        marginVertical: 7
    },

    mainView: {
        marginTop: 15,
        backgroundColor: 'white',
        // paddingTop: 20,
        flex: 1,
        // borderWidth: 1,
        borderColor: 'green',
        borderTopLeftRadius: 28,
        borderTopRightRadius: 28,
        // paddingHorizontal: 24,
        // marginBottom: 15,

    },

    innerView: {
        borderWidth: 0.5,
        borderRadius: 10,
        marginVertical: 8,
        borderColor: COLORS.grey
    },

    touchableView: {
        padding: 14,
        // justifyContent: 'center',
        flexDirection: 'row',

        alignItems: 'center'
    },

    headerText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: COLORS.black,
        flex: 1
    },





    header: {
        marginTop: '3%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    ordersView: {
        // marginHorizontal: scale(7),
        marginHorizontal: 7,
        // marginBottom: verticalScale(50)
        marginBottom: 50
    },



    TabViewCreateContainer: {
        backgroundColor: COLORS.background1,
        // borderWidth: 1,
        // paddingVertical: 12,
        marginTop: 12,
        marginHorizontal: 16,
        elevation: 0

    },
    TabViewIndicator: {
        backgroundColor: COLORS.green,
        borderRadius: 16,
        // marginLeft: 2,
        // width: '24%',
        // marginHorizontal: 10,
        // borderWidth: 1,
    },




















});