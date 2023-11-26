import { StyleSheet } from 'react-native'
import { COLORS } from '../../../theme/colors'

export const styles = StyleSheet.create({

    container: {
        borderWidth: 1,
        marginHorizontal: 16,
        flex: 1
    },

    skipView: {
        marginTop: 48,
        alignItems: 'flex-end',
    },

    mainView: {
        alignItems: 'center',
    },

    frameView: {
        marginTop: 44,
        borderRadius: 145.5,
        overflow: 'hidden',
    },

    textView: {
        marginTop: 48,
        marginHorizontal: 24,
        alignItems: 'center',
        width: 291,
    },

    bottomView: {
        justifyContent: 'flex-end',
        flex: 1,
        marginBottom: 24,

    },


})