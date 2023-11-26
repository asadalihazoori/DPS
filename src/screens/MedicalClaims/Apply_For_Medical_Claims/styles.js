import { StyleSheet } from 'react-native'
import { COLORS } from '../../../theme/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 16,
        // backgroundColor: COLORS.white,
        // padding: 20,
    },

    imagesButtonView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    imagesButton: {
        marginTop: 24,
        padding: 12,
        backgroundColor: COLORS.grey,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center'
    },

    text: {
        color: COLORS.white,
        fontWeight: 'bold',
        fontSize: 14
    }


});