import { StyleSheet } from 'react-native'
import { COLORS } from '../../../theme/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 16,
        // borderWidth: 1
    },

    headerView: {
        marginTop: 140,
        // borderWidth: 1
    },

    headerCaption: {
        marginTop: 4
    },

    mainView: {
        // borderWidth: 1,
        marginTop: 40,
        flex: 1
    },

    forgetView: {
        marginTop: 4,
        paddingVertical: 3,
        // borderWidth: 1,
        alignSelf: 'flex-end'
    },

    forgetText: {
        letterSpacing: 0.16,
    },

    header: {
        fontSize: 30,
        textAlign: 'center',
        color: COLORS.black,
        fontWeight: 'bold'
    },

    inputField: {
        borderWidth: 1,
        marginVertical: 15

    },

    bottomView: {
        justifyContent: 'flex-end',
        paddingBottom: 24,
        backgroundColor: COLORS.background  
        // borderWidth: 1,
    },



});