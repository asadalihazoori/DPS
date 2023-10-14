import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'

const Loans = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.innerView}>

                <TouchableOpacity style={styles.taskView} onPress={() => navigation.navigate('LoansAdvances')}>


                    <Text style={styles.text}>Loan Status</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.taskView} onPress={() => navigation.navigate('ApplyForLoans')}>

                    <Text style={styles.text}>Apply For Loans</Text>
                </TouchableOpacity>
            </View >
        </SafeAreaView>
    )
}

export default Loans