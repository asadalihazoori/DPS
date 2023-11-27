import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { FontStyle } from '../../../theme/FontStyle'
import { COLORS } from '../../../theme/colors'
import Theme from '../../../theme/theme'

const ProfileTextInput = ({
    label,
    placeholder,
    value,
    onChangeText,
    error,
    editable = true,
    keyboardType,
    marginBottom,
    height,
    multiline,
}) => {

    return (
        <View style={[styles.container, { marginBottom: marginBottom ? marginBottom : 12 }]}>
            <View>
                <Text style={[FontStyle.Regular14, { color: COLORS.darkBlack }]}>{label}</Text>
            </View>

            <View style={[styles.inputView, {
                backgroundColor: !editable ? COLORS.backgroundInput : COLORS.white,
                borderColor: error ? COLORS.red : "#BEBEBE",
                height: height ? height : 45,
            }]}>
                <TextInput
                    placeholder={placeholder}
                    value={value}
                    numberOfLines={multiline && 5}
                    multiline={multiline && true}
                    editable={editable}
                    keyboardType={keyboardType}
                    onChangeText={onChangeText}
                    style={[FontStyle.Regular12_400, {
                        color: COLORS.darkBlack,
                        flex: 1,
                        // borderWidth: 1,
                     
                        padding: 0,
                        margin: 0,
                    }]}
                    placeholderTextColor={{ color: COLORS.grey3 }}
                    cursorColor={COLORS.blue}
                />
            </View>
        </View>
    )
}

export default ProfileTextInput

const styles = StyleSheet.create({
    container: {
        // borderWidth: 1,
        marginHorizontal: 4,
    },

    inputView: {
        ...Theme.Shadow,
        marginTop: 8,
        borderRadius: 8,
        paddingHorizontal: 10,
        // borderWidth: 1,
    }
})