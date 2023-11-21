import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../../theme/colors'

const TouchableView = ({ text, header, handleModal, label, error }) => {
    return (
        <View>

            {label &&
                <Text style={styles.label}>{label}</Text>
            }
            <View style={styles.container}>

                <TouchableOpacity style={[styles.touchableView,
                {
                    borderColor: error ? COLORS.red : COLORS.black
                }]} onPress={handleModal}>
                    <Text style={styles.text}>{text ? text : header}</Text>
                </TouchableOpacity>
                {error && (
                    <Text style={{ marginTop: 5, marginLeft: 4, color: COLORS.red, fontSize: 12 }}>
                        {error}
                    </Text>
                )}
            </View>
        </View>
    )
}

export default TouchableView

const styles = StyleSheet.create({
    container: {
        // borderWidth: 1,
        // borderRadius: 16,
        // padding: 15,
        // width: 380,
        // height: 50,
        marginTop: 16,
        // borderRadius: 10,
    },

    touchableView: {
        borderWidth: 1,
        borderRadius: 10,
        height: 50,
        padding: 15,
        // flexDirection: 'row',
        justifyContent: 'space-between'
    },

    text: {
        color: COLORS.black,
    },

    label: {
        color: COLORS.black,
        marginBottom: -10,
        marginLeft: 3,
        fontWeight: '600',
        marginTop: 15,

    },
})