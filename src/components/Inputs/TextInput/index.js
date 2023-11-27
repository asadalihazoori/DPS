import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { FontStyle } from '../../../theme/FontStyle'
import { styles } from './styles'
import { COLORS } from '../../../theme/colors'

const TextInputAuth = ({
    label,
    placeholder,
    value,
    onChangeText,
    marginTop,
    error,
}) => {
    return (
        <View style={[styles.container, {
            marginTop: marginTop,
        }]}>

            <Text style={styles.label}>
                {label}
            </Text>

            <View style={[styles.inputView, {
                borderColor: error ? COLORS.red : "#B5B5B5"
            }]}>

                <TextInput
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    placeholderTextColor={{ color: COLORS.grey3 }}
                    value={value}
                    style={styles.textInput}

                    cursorColor={COLORS.blue} />
            </View>
        </View >
    )
}

export default TextInputAuth