import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'

const Leaves = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.innerView}>

                <TouchableOpacity style={styles.taskView} onPress={() => navigation.navigate('LeaveStatus')}>


                    <Text style={styles.text}>Leave Status</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.taskView} onPress={() => navigation.navigate('LeaveSubmission')}  >


                    <Text style={styles.text}>Apply Leave</Text>
                </TouchableOpacity>
            </View >
        </SafeAreaView>
    )
}

export default Leaves