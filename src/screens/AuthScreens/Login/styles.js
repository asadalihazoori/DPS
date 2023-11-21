import { StyleSheet } from 'react-native'
import { COLORS } from '../../../theme/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 16
    },

    headerView: {
        // margin: 8,
        marginTop: 24,
        padding: 8,
        // borderWidth: 1

    },

    headerCaption: {
        marginTop: 2
    },

    frameView: {
        marginVertical: 16,
        // borderWidth: 1
    },

    mainView: {
        // borderWidth: 1,
        flex: 1
    },

    forgetView: {
        paddingVertical: 8,
        // borderWidth: 1
    },

    forgetText: {
        fontWeight: '500',
        letterSpacing: 0.16,
        lineHeight: 22.4,
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

    }



});