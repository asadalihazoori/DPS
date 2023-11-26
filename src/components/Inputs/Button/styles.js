import { StyleSheet } from 'react-native'
import { COLORS } from '../../../theme/colors'
import Theme from '../../../theme/theme'

export const styles = StyleSheet.create({
    main: {
        paddingVertical: 12,
        backgroundColor: COLORS.buttonBack,
        alignItems: 'center',
        borderRadius: 8,
        // ...Theme.Shadow,
        elevation: 4,
    },


})