import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'

const Reports = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.innerView}>

                <TouchableOpacity style={styles.taskView} onPress={() => navigation.navigate('EmployeePayslip')}>

                    <Text style={styles.text}>Payslip</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.taskView} onPress={() => navigation.navigate('TardinesReport')}>

                    <Text style={styles.text}>Tardines Report</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.taskView} onPress={() => navigation.navigate('TaxCertificate')}>

                    <Text style={styles.text}>Tax Certificate</Text>
                </TouchableOpacity>
            </View >
        </SafeAreaView>
    )
}

export default Reports