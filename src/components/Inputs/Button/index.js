import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontStyle } from '../../../theme/FontStyle'
import { styles } from './styles'
import { COLORS } from '../../../theme/colors'

const NextButton = ({
    title,
    onPress,
    marginTop
}) => {

    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.9}
            style={[styles.main, { marginTop: marginTop }]}
        >
            <Text style={[FontStyle.Regular14, { color: COLORS.white }]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default NextButton