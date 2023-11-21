import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { FontStyle } from '../../../theme/FontStyle'
import { COLORS } from '../../../theme/colors'

const ProfileTextInput = ({
    label,
    value,
    editable,
    marginBottom,
}) => {

    return (
        <View
            style={[styles.container, { marginBottom: marginBottom ? marginBottom : 12 }]}>
            <View>
                <Text style={[FontStyle.Regular14, { color: COLORS.darkBlack }]}>{label}</Text>
            </View>

            <View style={styles.inputView}>
                <TextInput
                    value={value}
                    editable={editable}
                    style={[FontStyle.Regular12_400, { color: COLORS.grey3 }]}
                />
            </View>
        </View>
    )
}

export default ProfileTextInput

const styles = StyleSheet.create({
    container: {
        // borderWidth: 1,
    },

    inputView: {
        marginTop: 8,
        borderRadius: 8,
        backgroundColor: COLORS.backgroundInput,
        paddingHorizontal: 8,
        // borderWidth: 1,
        borderColor: 'red'

    }
})