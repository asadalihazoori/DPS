import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FontStyle } from '../../theme/FontStyle'

const TouchableButton = ({
    onPress,
    title,
    container
}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            style={[styles.container, container]}
            onPress={onPress}>
            <Text style={FontStyle.Regular14_500}>{title}</Text>
        </TouchableOpacity>
    )
}

export default TouchableButton

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 8,
        paddingVertical: 4,
    },
})