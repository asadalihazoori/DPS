import { StyleSheet } from 'react-native'
import { COLORS } from '../../../theme/colors';
import { FontStyle } from '../../../theme/FontStyle';
import Theme from '../../../theme/theme';

export const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,
        flex: 1,
    },

    dateText: {
        ...FontStyle.Regular12,
        fontWeight: '500',
        color: COLORS.grey5

    },

    cardView: {
        ...Theme.Shadow,
        borderWidth: 0,
        elevation: 3,
        flexDirection: 'row',
        paddingVertical: 20,
        paddingHorizontal: 8,
        justifyContent: 'space-around'
    },

    punchText: {
        ...FontStyle.Regular14_500,
        textAlign: 'auto',
        fontWeight: '500',
        color: COLORS.black
    },

    percentageText: {
        ...FontStyle.Regular12_400,
        color: COLORS.darkBlack,
    },


    bottomView: {
        justifyContent: 'flex-end',
        marginBottom: 12,
        // flex: 1,
        // borderWidth: 1,
    },







});