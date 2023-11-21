import { StyleSheet } from 'react-native'
import { COLORS } from '../../../theme/colors';
import { FontStyle } from '../../../theme/FontStyle';

export const styles = StyleSheet.create({
    container: {
        // borderWidth: 1,
        padding: 20,
        flex: 1,

        // flex:1,
    },

    leaveText: {
        ...FontStyle.Regular16_500,
        lineHeight: 18,
        color: COLORS.greyDesign,
        marginBottom: 14,
    },
});