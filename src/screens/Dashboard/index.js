import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity, Button } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { styles } from './styles'
import Theme from '../../theme/theme'
import MainHeader from '../../components/Headers/MainHeader'
import { COLORS } from '../../theme/colors'
import { SvgXml } from 'react-native-svg'
import { DashboardIcons } from '../../assets/SvgIcons/DashboardIcons'
import { FontStyle } from '../../theme/FontStyle'
import DashboardCard from '../../components/Cards/DashboardCard'
import { useSelector } from 'react-redux'
import { Icons } from '../../assets/SvgIcons/Icons'
import DashboardNotifyCard from '../../components/Cards/DashboardNotifyCard'
import moment from 'moment'


const Dashboard = ({ navigation }) => {

    const [recents, setOpenRecent] = useState(false);
    const attendanceData = useSelector((state) => state.attendance);
    // console.log(attendanceData)


    const [utcTime, setUtcTime] = useState('');
    const [utcDate, setUtcDate] = useState('');
    const [localTime, setLocalTime] = useState('');

    // useEffect(() => {
    //     const updateTimes = () => {
    //         const now = new Date();

    //         // Get UTC time
    //         const utcTimeString = now.toISOString();

    //         // Get UTC date
    //         const utcDateString = new Intl.DateTimeFormat('en-GB', {
    //             year: 'numeric',
    //             month: 'long',
    //             day: 'numeric',
    //         }).format(now);

    //         // Get local time
    //         const localTimeString = new Intl.DateTimeFormat(undefined, {
    //             hour: 'numeric',
    //             minute: 'numeric',
    //             second: 'numeric',
    //             timeZoneName: 'short',
    //         }).format(now);

    //         setUtcTime(utcTimeString);
    //         setUtcDate(utcDateString);
    //         setLocalTime(localTimeString);
    //     };

    //     // Update times every second
    //     const intervalId = setInterval(updateTimes, 1000);

    //     // Initial update
    //     updateTimes();

    //     // Clean up the interval on component unmount
    //     return () => clearInterval(intervalId);
    // }, []);


    // const [utcTime1, setUtcTime1] = useState('');
    // const [utcDate1, setUtcDate1] = useState('');
    // const [localTime1, setLocalTime1] = useState('');

    // useEffect(() => {
    //     const updateTimes = () => {
    //         const now = moment();
    //         // console.log(now);

    //         // Get UTC time
    //         const utcTimeString = now.toISOString();
    //         const utcDateTime = now.format('YYYY-MM-DD hh:mm:ss');


    //         // Get UTC date
    //         const utcDateString = now.format('YYYY-MM-DD');

    //         // Get local time
    //         const localTimeString = now.format('hh:mm A');

    //         const utcDateTimeString = now.utc().format('YYYY-MM-DD hh:mm:ss');


    //         setUtcTime1(utcDateTimeString);
    //         setUtcDate1(utcDateString);
    //         setLocalTime1(localTimeString);
    //     };

    //     // Update times every second
    //     const intervalId = setInterval(updateTimes, 1000);

    //     // Initial update
    //     updateTimes();

    //     // Clean up the interval on component unmount
    //     return () => clearInterval(intervalId);
    // }, []);





    const name = useSelector((state) => state?.employeeProfile?.data?.name);
    return (
        <SafeAreaView style={Theme.SafeArea}>

            <MainHeader navigation={navigation} />

            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>

                <View style={styles.textView}>
                    <Text style={[FontStyle.Regular14, { fontWeight: '400', color: COLORS.grey4 }]}>Welcome back,</Text>
                    <View style={{ flexDirection: 'row', marginTop: 4, }}>
                        <View style={{ flex: 1, }}>
                            <Text style={[FontStyle.Regular16_500]}>Hello {name}</Text>
                        </View>
                        {/* <View style={{ flex: 1, justifyContent: 'center' }}>
                            <SvgXml xml={Icons.hand} style={{ marginHorizontal: 6, alignSelf: 'center' }} />
                        </View> */}

                    </View>
                </View>

                <View style={styles.featureView}>
                    <View style={styles.row}>


                        <DashboardCard
                            icon={DashboardIcons.attendance}
                            title={'Attendance'}
                            onPress={() => navigation.navigate('Attendance')}
                        />

                        <DashboardCard
                            icon={DashboardIcons.payslip}
                            title={'Payslip'}
                            onPress={() => navigation.navigate('EmployeePayslip')}
                        />

                    </View>

                    
                    {/*
                     <View>

                        <Text>UTC Date: {utcDate}</Text>
                        <Text>UTC Time: {utcTime}</Text>
                        <Text>Local Time: {localTime}</Text>
                    </View>

                    <Text>-----------------------</Text>
                */}
                    {/* <View>

                        <Text>UTC Date: {utcDate1}</Text>
                        <Text>UTC Time: {utcTime1}</Text>
                        <Text>Local Time: {localTime1}</Text>
                    </View> */}

                    {/* <View style={styles.row}>

                        <DashboardCard
                            icon={DashboardIcons.Leaves}
                            title={'Leaves Report'}
                            onPress={() => navigation.navigate('Leaves')}
                            notify={true}
                        />

                        <DashboardCard
                            icon={DashboardIcons.attendance}
                            title={'Attendance'}
                            onPress={() => navigation.navigate('Attendance')}
                        />

                    </View> */}

                    {/* <View style={styles.row}>

                        <DashboardCard
                            icon={DashboardIcons.medical}
                            title={'Medical Claims'}
                            onPress={() => navigation.navigate('MedicalClaim')}
                        />

                        <DashboardCard
                            icon={DashboardIcons.requests}
                            title={'Requests'}
                            onPress={() => navigation.navigate('LeaveRequets')}
                        />

                    </View> */}

                    {/* <View style={styles.row}>

                        <DashboardCard
                            icon={DashboardIcons.timesheet}
                            title={'Timesheet'}
                            onPress={() => { }}
                        />

                        <DashboardCard
                            icon={DashboardIcons.payslip}
                            title={'Payslip'}
                            onPress={() => navigation.navigate('EmployeePayslip')}
                        />

                    </View> */}

                    {/* <View style={[styles.row, { marginBottom: 0 }]}>

                        <DashboardCard
                            icon={DashboardIcons.shift}
                            title={'Shift Change'}
                            onPress={() => navigation.navigate('Shifts')}
                        />

                        <DashboardCard
                            icon={DashboardIcons.notification}
                            title={'Notification'}
                            onPress={() => { }}
                            notify={true}
                        />

                    </View> */}


                </View>


                {/* <View style={{ marginTop: 24 }}>

                    <TouchableOpacity style={{
                        paddingHorizontal: 8, borderRadius: 8,
                        paddingVertical: 8, backgroundColor: COLORS.background1, flexDirection: 'row'
                    }}
                        onPress={() => setOpenRecent(!recents)}
                        activeOpacity={0.7}>

                        <Text style={[FontStyle.Regular14_500, { flex: 1 }]}>Recents</Text>
                        <View style={{ justifyContent: 'center', marginLeft: 8 }}>
                            <SvgXml xml={Icons.downArrow} />
                        </View>
                    </TouchableOpacity>

                    {recents &&

                        <View style={{ marginTop: 12 }}>
                            <DashboardNotifyCard />
                            <DashboardNotifyCard />
                            <DashboardNotifyCard />

                        </View>}

                </View> */}




















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
                {/* <View style={{ borderWidth: 1 }}>

                    <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" style="enable-background:new 0 0 100 100;" xml:space="preserve"><style type="text/css">
	.st0{fill:none;}
    </style><rect y="0" class="st0" width="100" height="100"/><g><g><polygon points="17.4,48.2 27.2,48.2 49.6,29.1 72.7,48.2 82.6,48.2 82.6,48.1 49.6,20.8   "/></g></g><g><g><polygon points="17.4,63.7 27.2,63.7 49.6,44.6 72.7,63.7 82.6,63.7 82.6,63.6 49.6,36.3   "/></g></g><g><g><polygon points="17.4,79.2 27.2,79.2 49.6,60.1 72.7,79.2 82.6,79.2 82.6,79.1 49.6,51.8   "/></g></g></svg>`} />
                </View> */}

            </ScrollView>
        </SafeAreaView >
    )
}

export default Dashboard