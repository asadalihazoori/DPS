import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../theme/colors'

const Button = ({ title, handelSubmit, height }) => {
    return (
        <View style={{ paddingVertical: 16, }}>

            <TouchableOpacity style={[styles.container, { height: height ? height : 50 }]} onPress={handelSubmit}>
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Button

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.primaryPurple,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        // marginVertical: 16,
        // borderWidth: 1,

    },
    text: {
        // padding:15 ,
        color: COLORS.white,
        fontWeight: '700',
        fontSize: 18,
    }
})