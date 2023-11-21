import { StyleSheet } from 'react-native'
import { COLORS } from '../../../theme/colors'

export const styles = StyleSheet.create({
    frameView: {
        marginTop: 28,
        // borderWidth: 1,

    },

    skipView: {
        // borderWidth: 1,
        padding: 8,
        // right: 34
    },
    
    buttonView: {
        // borderWidth: 1,
        alignItems: 'flex-end',
        marginRight: 34,
        marginTop: -410,
        marginBottom: 364
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
        width: 211
        // borderWidth: 1
    }
})