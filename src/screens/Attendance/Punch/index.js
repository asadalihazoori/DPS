import { View, Text, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import { COLORS } from '../../../theme/colors'
import { SvgXml } from 'react-native-svg'
import { Icons } from '../../../assets/SvgIcons/Icons'
import { NextButton } from '../../../components/Inputs'
import AttendanceCardNew from '../AttendanceCardNew'
// import CircularProgress from './CircularProgress'
import { getCurrentDate } from '../../../utilities/CurretDate'
import { getCoordinates } from '../Location/AccessLocation copy'
import { useSelector } from 'react-redux'
import moment from 'moment';
// import ProgressCircle from 'react-native-progress-circle'
import Loader from '../../../components/Loader'
import CircularProgress from 'react-native-circular-progress-indicator';

const Punch = ({ navigation, route }) => {

    // const initalRoute = route.params;

    const [lat, setLatitude] = useState(0);
    const [long, setLongitude] = useState(0);
    const [currentDate, setCurrentDate] = useState('');

    const [hours, sethours] = useState(0);
    const [minutes, setminutes] = useState(0);


    const attendanceData = useSelector((state) => state.attendance);
    // console.log(attendanceData);
    const punchStatus = attendanceData?.punchInStatus ? 'Punch-Out' : 'Punch-In'

    useEffect(() => {
        setCurrentDate(getCurrentDate());

        getCoordinates()
            .then(({ latitude, longitude }) => {
                setLatitude(latitude);
                setLongitude(longitude);

            })

        calculateWorkedTime();

        // getPermissionJust();

    }, [])

    // const [currentTime, setCurrentTime] = useState(moment());

    useEffect(() => {
        if (attendanceData.punchInStatus && !attendanceData.todayAttendance) {
            const intervalId = setInterval(() => {

                calculateWorkedTime();





                //     if (attendanceData.todayAttendance) {
                //         const punchInTime = moment(attendanceData.punchInTime);
                //         const punchOutTime = moment(attendanceData.punchOutTime);
                //         const duration = moment.duration(punchOutTime.diff(punchInTime));
                //         const hours = Math.floor(duration.asHours());
                //         const minutes = Math.floor(duration.asMinutes()) % 60;

                //         // return { hours, minutes };

                //         sethours(hours);
                //         setminutes(minutes);
                //     }
                //     else if (attendanceData.punchInStatus) {
                //         const punchInTime = moment(attendanceData.punchInTime);
                //         const duration = moment.duration(moment().diff(punchInTime));
                //         const hours = Math.floor(duration.asHours());
                //         const minutes = Math.floor(duration.asMinutes()) % 60;

                //         sethours(hours);
                //         setminutes(minutes);
                //     }
                //     else {

                //         sethours(0);
                //         setminutes(0);
                //     }







            }, 55000);
            return () => clearInterval(intervalId);
        }
        else {
            calculateWorkedTime();
        }
    }, [minutes, attendanceData.punchInStatus, attendanceData.punchOutStatus]);
    // }, [attendanceData.punchInStatus]); 


    const calculateWorkedTime = () => {
        // console.log("cal")

        if (attendanceData.todayAttendance) {
            const punchInTime = moment(attendanceData.punchInTime);
            const punchOutTime = moment(attendanceData.punchOutTime);
            const duration = moment.duration(punchOutTime.diff(punchInTime));
            const hours = Math.floor(duration.asHours());
            const minutes = Math.floor(duration.asMinutes()) % 60;

            // return { hours, minutes };

            sethours(hours);
            setminutes(minutes);
        }
        else if (attendanceData.punchInStatus) {
            const punchInTime = moment(attendanceData.punchInTime);
            const duration = moment.duration(moment().diff(punchInTime));
            const hours = Math.floor(duration.asHours());
            const minutes = Math.floor(duration.asMinutes()) % 60;

            sethours(hours);
            setminutes(minutes);
        }
        else {

            sethours(0);
            setminutes(0);
        }

    }


    // const calculateWorkedTime = () => {
    //     if (attendanceData.todayAttendance) {
    //         const punchInTime = moment(attendanceData.punchInTime);
    //         const punchOutTime = moment(attendanceData.punchOutTime);
    //         const duration = moment.duration(punchOutTime.diff(punchInTime));
    //         const hours = Math.floor(duration.asHours());
    //         const minutes = Math.floor(duration.asMinutes()) % 60;

    //         return { hours, minutes };
    //     }
    //     else if (attendanceData.punchInStatus) {
    //         const punchInTime = moment(attendanceData.punchInTime);
    //         const duration = moment.duration(moment().diff(punchInTime));
    //         const hours = Math.floor(duration.asHours());
    //         const minutes = Math.floor(duration.asMinutes()) % 60;

    //         return { hours, minutes };
    //     }
    //     else {

    //         return { hours: 0, minutes: 0 };
    //     }
    // };

    // const { hours, minutes } = calculateWorkedTime();
    const totalMinutesWorked = (hours * 60) + minutes;
    const totalMinutesInDay = 8 * 60;
    const percentageWorked = Math.floor((totalMinutesWorked / totalMinutesInDay) * 100);


    return (

        <View style={styles.container}>
            {/* <ScrollView style={styles.container} showsVerticalScrollIndicator={false}> */}


            <View style={{ marginBottom: 16 }}>
                <Text style={styles.dateText}>{currentDate}</Text>
            </View>

            <View style={[styles.cardView, { flexDirection: 'row', paddingVertical: 20, paddingHorizontal: 8, justifyContent: 'space-around' }]}>

                <View style={{ marginLeft: 0 }}>
                    {/* <SvgXml xml={Icons.attendanceCircle} /> */}

                    {/* <View style={{ borderWidth: 4, borderRadius: 45, height: 90, width: 90, justifyContent: 'center', alignItems: 'center', borderColor: '#B2BBBB' }}>
                        <Text style={styles.percentageText}>{percentageWorked}%</Text>
                        <Text style={styles.percentageText}>Completed</Text>

                    </View> */}

                    {/* <ProgressCircle
                        percent={percentageWorked > 100 ? 100 : percentageWorked}
                        radius={45}
                        borderWidth={4}
                        color="#FF824C"
                        shadowColor="#B2BBBB"
                        bgColor="#fff"
                    >
                        <Text style={styles.percentageText}>{percentageWorked > 100 ? 100 : percentageWorked}%</Text>
                        <Text style={styles.percentageText}>Completed</Text>
                    </ProgressCircle> */}


                    <CircularProgress
                        // value={140}
                        value={percentageWorked > 100 ? 100 : percentageWorked}
                        radius={45}
                        progressValueColor={'black'}
                        maxValue={100}
                        title={'Completed'}
                        titleStyle={[styles.percentageText, { marginTop: 0 }]}
                        activeStrokeWidth={4}
                        inActiveStrokeWidth={4}
                        valueSuffix={'%'}
                        activeStrokeColor='#FF824C'
                        inActiveStrokeColor='#B2BBBB'

                        progressValueStyle={styles.percentageText}
                        valueSuffixStyle={[styles.percentageText, { marginTop: 0, marginLeft: 0 }]}
                    // subtitleStyle={{borderWidth:1}}
                    // valuePrefixStyle={{borderWidth:1}}
                    />




                </View>
                <View style={{ justifyContent: "space-between" }}>
                    <View style={{}}>

                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ justifyContent: 'center' }}>
                                <SvgXml xml={Icons.orangeDot} />
                            </View>
                            <Text style={[styles.punchText, { textAlign: 'auto', marginLeft: 4, color: COLORS.grey4 }]}>Time Completed</Text>
                        </View>


                        <View style={{ marginLeft: 13 }}>
                            <Text style={[styles.punchText, { color: COLORS.darkBlack, textAlign: 'auto' }]}>
                                {hours == 0 && minutes == 0 ? "0 mins" : `${hours !== 0 ? `${hours} hrs` : ''} ${minutes !== 0 ? `${minutes} mins` : ''}`}
                            </Text>
                        </View>

                    </View>

                    <View style={{}}>

                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ justifyContent: 'center' }}>
                                <SvgXml xml={Icons.greyDot} />
                            </View>
                            <Text style={[styles.punchText, { textAlign: 'auto', marginLeft: 4, color: COLORS.grey4 }]}>Remaining Time</Text>
                        </View>

                        <View style={{ marginLeft: 13 }}>
                            <Text style={[styles.punchText, { color: COLORS.darkBlack, textAlign: 'auto' }]}>
                                {/* { minutes == 0 ? 8 - hours : 7 - hours} hrs {minutes !== 0 && `${60 - minutes} mins`} */}
                                {
                                    7 - hours < 0
                                        ? '--'
                                        : `${minutes === 0 ? `${8 - hours} hrs` : hours == 7 ? '' : `${7 - hours} hrs`}${minutes !== 0 ? ` ${60 - minutes} mins` : ''}`
                                }
                            </Text>
                        </View>

                    </View>

                </View>
            </View>
            <AttendanceCardNew
                date={false}
                color={true}
                // punchIn={attendanceData.punchInTime ? attendanceData?.punchInTime.format('h:mm A') : ''} 
                // punchOut={attendanceData.punchOutTime ? attendanceData?.punchOutTime?.format('h:mm A') : ''}
                punchIn={attendanceData?.punchInformTime}
                punchOut={attendanceData?.punchOutformTime}
            />

            {/* <View style={{ borderWidth: 1 }}>


                <CircularProgress
                    percentage={35}
                    radius={45} 
                    strokeWidth={4}
                    color="#FF824C"
                    backgroundColor={COLORS.grey4}
                ></CircularProgress>
            </View> */}
            {/* <Text>Hysa</Text> */}
            {/* <Text style={[styles.punchText, { color: COLORS.darkBlack, textAlign: 'auto' }]}>3hrs</Text> */}



            <View style={[styles.bottomView]}>
                {!attendanceData.todayAttendance &&

                    <NextButton title={punchStatus}
                        onPress={() => navigation.navigate('LocationOld', { punchStatus: punchStatus, lat: lat, long: long })} />
                }
            </View>

            {/* <Loader loading={loading} /> */}

            {/* </ScrollView> */}
        </View >
    )
}

export default Punch