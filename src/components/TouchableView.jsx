import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const TouchableView = ({ text, header, handleModal }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={handleModal}>
            <Text style={styles.text}>{text ? text : header}</Text>
        </TouchableOpacity>
    )
}

export default TouchableView

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        // borderRadius: 16,
        padding: 15,
        // width: 380,
        height: 50,
        marginTop: 24,
    },

    text: {
        color: 'black',
    }
})