import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Theme from '../../theme/theme'
import { FontStyle } from '../../theme/FontStyle'
import { COLORS } from '../../theme/colors'

const SmartButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={[styles.container, Theme.Shadow]} onPress={onPress}
            activeOpacity={0.5}>
            <Text style={[FontStyle.Regular10, { color: COLORS.blue, fontWeight: '500' }]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default SmartButton

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        height: 27,
        marginVertical: 4,
        marginHorizontal: 4,
        justifyContent: 'center',
        alignItems: 'center'

    }
})