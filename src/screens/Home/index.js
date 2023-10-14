import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'

const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            {/* <ScrollView> */}

            <View style={styles.imageView}>
                <Image source={require('../../assets/back1.jpg')} height={20} />
            </View>

            <View style={styles.mainView}>

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'black', fontSize: 18, fontWeight: '800' }}>Pending...</Text>

                </View>


                {/* <View style={styles.functionView}>

                        <Text style={styles.header}>Attendance</Text>
                        <ScrollView style={styles.innerView} horizontal={true} showsHorizontalScrollIndicator={false}>
                            <TouchableOpacity style={styles.taskView} onPress={() => navigation.navigate('AttendanceReport')}>


                                <Text style={styles.text}>Attendance Report</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.taskView} onPress={() => navigation.navigate('AttendanceRequest')}  >


                                <Text style={styles.text}>Attendance Request</Text>
                            </TouchableOpacity>


                        </ScrollView>
                    </View>

                    <View style={styles.functionView}>

                        <Text style={styles.header}>Leaves</Text>
                        <ScrollView style={styles.innerView} horizontal={true} showsHorizontalScrollIndicator={false}>
                            <TouchableOpacity style={styles.taskView} onPress={() => navigation.navigate('LeaveStatus')}>


                                <Text style={styles.text}>Leave Status</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.taskView} onPress={() => navigation.navigate('LeaveSubmission')}  >


                                <Text style={styles.text}>Apply Leave</Text>
                            </TouchableOpacity>


                        </ScrollView>
                    </View>
                    <View style={styles.functionView}>

                        <Text style={styles.header}>Loans / Advances</Text>
                        <ScrollView style={styles.innerView} horizontal={true} showsHorizontalScrollIndicator={false}>
                            <TouchableOpacity style={styles.taskView} onPress={() => navigation.navigate('LoansAdvances')}>


                                <Text style={styles.text}>Loan Status</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.taskView} onPress={() => navigation.navigate('ApplyForLoans')}>

                                <Text style={styles.text}>Apply For Loans</Text>
                            </TouchableOpacity>


                        </ScrollView>
                    </View> */}
                {/* <View style={styles.functionView}>

                        <Text style={styles.header}>Medical Claims</Text>
                        <ScrollView style={styles.innerView} horizontal={true} showsHorizontalScrollIndicator={false}>
                            <TouchableOpacity style={styles.taskView} onPress={() => navigation.navigate('MedicalClaims')}>


                                <Text style={styles.text}>Medical claim Status</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.taskView} onPress={() => navigation.navigate('ApplyForMedicalClaims')}>


                                <Text style={styles.text}>Apply For Medical claim</Text>
                            </TouchableOpacity>


                        </ScrollView>
                    </View> */}



                {/* <View style={styles.functionView}>

                        <Text style={styles.header}>Reports</Text>
                        <ScrollView style={styles.innerView} horizontal={true} showsHorizontalScrollIndicator={false}>
                            <TouchableOpacity style={styles.taskView} onPress={() => navigation.navigate('EmployeePayslip')}>

                                <Text style={styles.text}>Payslip</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.taskView} onPress={() => navigation.navigate('TardinesReport')}>

                                <Text style={styles.text}>Tardines Report</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.taskView} onPress={() => navigation.navigate('TaxCertificate')}>

                                <Text style={styles.text}>Tax Certificate</Text>
                            </TouchableOpacity>


                        </ScrollView>
                    </View> */}

                {/* <Text style={styles.header}>Loans</Text>
                <View style={styles.functionView}>
                
                </View>
                
                <Text style={styles.header}>Medical Claims</Text>
                <View style={styles.functionView}>

                </View>
                
                <Text style={styles.header}>Reports</Text>
                <View style={styles.functionView}>
                
            </View> */}
            </View>
            {/* </ScrollView> */}
        </SafeAreaView >
    )
}

export default Home