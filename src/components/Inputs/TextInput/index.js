import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { FontStyle } from '../../../theme/FontStyle'
import { styles } from './styles'
import { COLORS } from '../../../theme/colors'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TextInputAuth = ({
    label,
    placeholder,
    value,
    onChangeText,
    marginTop,
    error,
    password,
}) => {

    const [hidePassword, setHidePassword] = useState(password);
    const [isFocused, setIsFocused] = useState(false);

    return (
        <View style={[styles.container, {
            marginTop: marginTop,
        }]}>

            <Text style={styles.label}>
                {label}
            </Text>

            <View style={[styles.inputView, {
                // borderColor: error ? COLORS.red : "#B5B5B5",
                borderColor: error ? COLORS.red : isFocused ? COLORS.primaryColor : '#BEBEBE',
                flexDirection: 'row',

            }]}>

                <TextInput
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    placeholderTextColor={COLORS.grey3 }
                    value={value}
                    style={styles.textInput}
                    autoCapitalize='none'
                    secureTextEntry={hidePassword}
                    onFocus={(focus) => {
                        setIsFocused(true)
                    }}
                    onBlur={() => setIsFocused(false)}
                    cursorColor={COLORS.blue} />

                {password && (
                    <View style={styles.iconView}>
                        <Icon
                            onPress={() => setHidePassword(!hidePassword)}
                            name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
                            style={{ color: COLORS.primaryColor, fontSize: 20 }}
                        />
                    </View>
                )}
            </View>

            <Text style={[styles.label, { color: COLORS.red, marginLeft: 2, fontSize: 12, }]}>{error}</Text>
        </View >
    )
}

export default TextInputAuth