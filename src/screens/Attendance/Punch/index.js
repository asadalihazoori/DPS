import { View, Text, ScrollView, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import { COLORS } from '../../../theme/colors'
import { SvgXml } from 'react-native-svg'
import { Icons } from '../../../assets/SvgIcons/Icons'
import { NextButton } from '../../../components/Inputs'
import AttendanceCardNew from '../AttendanceCardNew'
import { getCurrentDate } from '../../../utilities/CurretDate'
import { getCoordinatesServices } from '../Location/AccessLocation'
import { useSelector } from 'react-redux'
import moment, { min } from 'moment';
import CircularProgress from 'react-native-circular-progress-indicator';

const Punch = ({ navigation, route }) => {

    // const initalRoute = route.params;

    const [lat, setLatitude] = useState(0);
    const [long, setLongitude] = useState(0);
    const [percentageWorked, setpercentageWorked] = useState(0);
    const [currentDate, setCurrentDate] = useState(getCurrentDate());
    const [hours, sethours] = useState(0);
    const [minutes, setminutes] = useState(0);
    const data = useSelector((state) => state.attendance);
    const { punchStatus, attendanceRecords } = useSelector((state) => state.attendance);

    useEffect(() => {

        getCoordinatesServices()
            .then((position) => {
                if (position) {

                    setLatitude(position.coords.latitude);
                    setLongitude(position.coords.longitude);
                }

            }).catch((error) => {
                console.log("PunchScreen UseEffect", error)
                return;
            })

        // setCurrentDate(getCurrentDate());
        calculateTotalTime();

    }, [])
    // }, [punchStatus]) 

    useEffect(() => {

        if (punchStatus == "Punch-Out") {
            const intervalId = setInterval(() => {
                // const { rightHours, rightMinutes } = calculateWorkedTime();
                calculateTotalTime();
            }, 60000);
            return () => clearInterval(intervalId);

        }
        else {
            calculateTotalTime();
        }

        // }, []);
    }, [minutes, punchStatus]);


    const calculateWorkedTime = () => {

        const lastItem = attendanceRecords.length - 1;
        const { punchInTime } = attendanceRecords[lastItem]

        const punchInMoment = moment(punchInTime);
        const duration = moment.duration(moment().diff(punchInMoment));
        const hours = Math.floor(duration.asHours());
        const minutes = Math.floor(duration.asMinutes()) % 60;

        // sethours(hours);
        // setminutes(minutes);

        // console.log("continue", hours, minutes)

        return { rightHours: hours, rightMinutes: minutes }

    }


    const calculateTotalTime = (rightHours, rightMinutes) => {
        // console.log("adad")
        let totalDuration = { hours: 0, minutes: 0 };

        attendanceRecords.forEach((record, index) => {

            if (record.punchOutStatus) {
                totalDuration.hours += record.duration.hours;
                totalDuration.minutes += record.duration.minutes;
            }
            else {
                const { rightHours, rightMinutes } = calculateWorkedTime();
                totalDuration.hours += rightHours;
                totalDuration.minutes += rightMinutes;

            }

        });

        // totalDuration.hours += rightHours
        // totalDuration.minutes += rightMinutes

        totalDuration.hours += Math.floor(totalDuration.minutes / 60);
        totalDuration.minutes %= 60;

        sethours(totalDuration.hours);
        setminutes(totalDuration.minutes)

        const totalMinutesWorked = (totalDuration.hours * 60) + totalDuration.minutes;
        const totalMinutesInDay = 8 * 60;
        const percetage = Math.floor((totalMinutesWorked / totalMinutesInDay) * 100);
        setpercentageWorked(percetage);

        // console.log(percetage, "perc");
        // console.log("Total Duration:", totalDuration);
    }

    // calculateTotalTime(); 


    return (

        <View style={styles.container}>

            <View style={{ marginBottom: 16 }}>
                <Text style={styles.dateText}>{currentDate}</Text>
            </View>

            <View style={[styles.cardView]}>

                <View style={{ marginLeft: 0 }}>

                    <CircularProgress
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
                    />

                </View>
                <View style={{ justifyContent: "space-between" }}>
                    <View>

                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ justifyContent: 'center' }}>
                                <SvgXml xml={Icons.orangeDot} />
                            </View>
                            <Text style={[styles.punchText, { marginLeft: 4, color: COLORS.grey4 }]}>Time Completed</Text>
                        </View>


                        <View style={{ marginLeft: 13 }}>
                            <Text style={[styles.punchText, { color: COLORS.darkBlack }]}>
                                {hours == 0 && minutes == 0 ? "0 mins" : `${hours !== 0 ? `${hours} hrs` : ''} ${minutes !== 0 ? `${minutes} mins` : ''}`}
                            </Text>
                        </View>

                    </View>

                    <View style={{}}>

                        <View style={{ flexDirection: 'row' }}>

                            <View style={{ justifyContent: 'center' }}>
                                <SvgXml xml={Icons.greyDot} />
                            </View>
                            <Text style={[styles.punchText, { marginLeft: 4, color: COLORS.grey4 }]}>Remaining Time</Text>

                        </View>

                        <View style={{ marginLeft: 13 }}>
                            <Text style={[styles.punchText, { color: COLORS.darkBlack }]}>
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

            <ScrollView showsVerticalScrollIndicator={false} style={{
                flex: 1,
                marginVertical: 12,
                // borderWidth: 1
            }}>

                {attendanceRecords.slice().reverse().map((record, index) =>
                    <AttendanceCardNew
                        key={index}
                        date={false}
                        color={index === 0 ? true : false}
                        punchIn={record?.punchInformTime}
                        punchOut={record?.punchOutformTime}

                    />)

                }

            </ScrollView>

            <View style={[styles.bottomView]}>
                {/* {!attendanceData.todayAttendance && */}

                <NextButton title={punchStatus}
                    onPress={() => navigation.navigate('LocationOld', { punchStatus: punchStatus, lat: lat, long: long })} />
                {/* } */}
            </View>

        </View >
    )
}

export default Punch