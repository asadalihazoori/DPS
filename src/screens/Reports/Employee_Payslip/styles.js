import { StyleSheet } from 'react-native'
import { COLORS } from '../../../theme/colors';
import { FontStyle } from '../../../theme/FontStyle';


export const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,
        // borderWidth: 1,
        flex: 1,
    },

    ScrollView: {},

    detailsView: {
        // borderWidth: 1,
        marginTop: 24,
        marginBottom: 16,
        flexDirection: 'row',
        marginLeft: 4
    },

    detailTextView: {
        // borderWidth: 1,
        flex: 1

    },

    detailstext: {
        ...FontStyle.Regular14,
        fontWeight: '400',
        color: COLORS.darkBlack,
        lineHeight: 15,
    },

    iconView: {
        padding: 4,
        marginRight: 12,

    }



});