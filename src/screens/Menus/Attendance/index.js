import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'

const Attendance = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.innerView}>

                <TouchableOpacity style={styles.taskView} onPress={() => navigation.navigate('AttendanceReport')}>


                    <Text style={styles.text}>Attendance Report</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.taskView} onPress={() => navigation.navigate('AttendanceRequest')}  >


                    <Text style={styles.text}>Attendance Request</Text>
                </TouchableOpacity>
            </View >
        </SafeAreaView>
    )
}

export default Attendance