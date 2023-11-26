import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontStyle } from '../../../theme/FontStyle'
import { styles } from './styles'

const NextButton = ({
    title,
    onPress,
    marginTop
}) => {

    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.5}
            style={[styles.main, { marginTop: marginTop }]}
        >
            <Text style={FontStyle.Regular14}>{title}</Text>
        </TouchableOpacity>
    )
}

export default NextButton