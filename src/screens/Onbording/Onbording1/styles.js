import { StyleSheet } from 'react-native'
import { COLORS } from '../../../theme/colors'

export const styles = StyleSheet.create({
    frameView: {
        marginTop: 40,
        // borderWidth: 1,
        // borderColor: 'green'

    },
    buttonView: {
        // borderWidth: 1,
        alignItems: 'flex-end',
        marginRight: 34,
        marginTop: -395,
        marginBottom: 359
    },

    skipView: {
        // borderWidth: 1,
        padding: 8,
    },

    bottomView: {
        marginTop: 22.26,
        // borderWidth: 1,
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 24,
        borderTopStartRadius: 16,
        borderTopEndRadius: 16,
        backgroundColor: COLORS.lightBlueBck,

    },

    innerBottomView: {
        // borderWidth: 1,
        flex: 1,
        borderColor: 'red'

    },

    textView: {
        flex: 1,
        // borderWidth: 1,
        paddingHorizontal: 16,
        paddingTop: 14,
        paddingBottom: 20,
    },

    startedView: {
        height: 43,
        // borderWidth: 1
    }
})