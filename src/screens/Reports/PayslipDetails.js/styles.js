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


    buttonsView: {
        marginVertical: 24,
        // borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },

    button: {
        flexDirection: 'row',
        paddingVertical: 4,
        paddingHorizontal: 12,
        borderRadius: 16,
        backgroundColor: '#85BFE8',
        marginLeft: 10,
    },

    circle: {
        width: 200,
        height: 200,
        borderRadius: 100,
        borderWidth: 12,
        borderColor: '#50C03D',


        // backgroundColor: '#50C03D',
        justifyContent: 'center',
        alignItems: 'center',
    },

    iconView: {
        marginLeft: 12,
        // borderWidth: 1,
        justifyContent: 'center'
    },

    circleView: {
        alignItems: 'center',
    },

    payView: {
        // position: 'absolute',
        // justifyContent: 'center',
        // borderWidth: 1

    },

    payText: {
        ...FontStyle.Regular24,
        textAlign: 'center'

    },

    detailsView: {
        marginTop: 24,
        // borderWidth: 1,
        marginHorizontal: 4,
    },

    earningText: {
        ...FontStyle.Regular16_500,
        color: COLORS.black,
        lineHeight: 18,
    },

    cardView: {
        borderRadius: 8,
        backgroundColor: '#FFF',
        elevation: 4,
        borderBottomWidth: 1,
        borderBottomColor: '#B2BBBB',
        paddingHorizontal: 18,
        paddingTop: 12,
        paddingBottom: 4,
        marginBottom: 12,

        // flexDirection: 'row',

        // marginHorizontal: 4,
        marginTop: 24,
    },

    itemRow: {
        flexDirection: 'row',
        // borderWidth: 1,
        justifyContent: 'space-between',
        marginBottom: 8,
    },

    rowText: {
        ...FontStyle.Regular16,
        fontWeight: '400',
        lineHeight: 18,
        color: COLORS.black

    }




});