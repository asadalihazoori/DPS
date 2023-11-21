import { StyleSheet } from 'react-native'
import { COLORS } from '../../../theme/colors'
import Theme from '../../../theme/theme'

export const styles = StyleSheet.create({
    main: {
        paddingVertical: 12,
        backgroundColor: COLORS.buttonBack,
        alignItems: 'center',
        borderRadius: 32,
        ...Theme.Shadow,
    },


})