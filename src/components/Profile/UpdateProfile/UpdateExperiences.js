import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'

const UpdateExperiences = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Working</Text>

        </SafeAreaView>
    )
}

export default UpdateExperiences


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // borderWidth: 1,
        borderColor: 'green',
        backgroundColor: 'white'

    }

});