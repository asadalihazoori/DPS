import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'

const MedicalClaim = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.innerView}>

                <TouchableOpacity style={styles.taskView} onPress={() => navigation.navigate('MedicalClaims')}>


                    <Text style={styles.text}>Medical claim Status</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.taskView} onPress={() => navigation.navigate('ApplyForMedicalClaims')}>


                    <Text style={styles.text}>Apply For Medical claim</Text>
                </TouchableOpacity>

            </View >
        </SafeAreaView>
    )
}

export default MedicalClaim