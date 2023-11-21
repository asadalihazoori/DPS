import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import { styles } from './styles'
import Theme from '../../theme/theme'
import MainHeader from '../../components/Headers/MainHeader'
import { COLORS } from '../../theme/colors'
import { SvgXml } from 'react-native-svg'
import { DashboardIcons } from '../../assets/SvgIcons/DashboardIcons'
import { FontStyle } from '../../theme/FontStyle'
import DashboardCard from '../../components/Cards/DashboardCard'
import { useSelector } from 'react-redux'

const Dashboard = ({ navigation }) => {
    const name = useSelector((state) => state.employeeProfile.data.name);
    return (
        <SafeAreaView style={Theme.SafeArea}>

            <MainHeader navigation={navigation} />

            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>

                <View style={styles.textView}>
                    <Text style={FontStyle.Regular16_500}>Hello {name},</Text>
                </View>

                <View style={styles.featureView}>

                    <View style={styles.row}>

                        <DashboardCard
                            icon={DashboardIcons.Leaves}
                            title={'Leaves Report'}
                            onPress={() => { }}
                        />

                        <DashboardCard
                            icon={DashboardIcons.attendance}
                            title={'Attendance'}
                            onPress={() => { }}
                        />

                    </View>

                    <View style={styles.row}>

                        <DashboardCard
                            icon={DashboardIcons.medical}
                            title={'Medical Claims'}
                            onPress={() => { }}
                        />

                        <DashboardCard
                            icon={DashboardIcons.requests}
                            title={'Requests'}
                            onPress={() => { }}
                        />

                    </View>

                    <View style={styles.row}>

                        <DashboardCard
                            icon={DashboardIcons.timesheet}
                            title={'Timesheet'}
                            onPress={() => { }}
                        />

                        <DashboardCard
                            icon={DashboardIcons.payslip}
                            title={'Payslip'}
                            onPress={() => { }}
                        />

                    </View>

                    <View style={[styles.row, { marginBottom: 0 }]}>

                        <DashboardCard
                            icon={DashboardIcons.shift}
                            title={'Shift Change'}
                            onPress={() => { }}
                        />

                        <DashboardCard
                            icon={DashboardIcons.notification}
                            title={'Notification'}
                            onPress={() => { }}
                        />

                    </View>


                </View>




















                {/* <View style={styles.imageView}>
                    <Image source={require('../../assets/HomeBackground.jpg')} height={20} />
                </View> */}
                {/* <View style={styles.mainView}> */}



                {/* <Button title='open drawer' onPress={() => navigation.openDrawer()} /> */}


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
                {/* </View> */}

            </ScrollView>
        </SafeAreaView >
    )
}

export default Dashboard