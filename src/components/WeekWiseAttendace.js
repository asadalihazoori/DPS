import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AttendanceCard from './Cards/AttendanceCard'
import AttendanceCardNew from '../screens/Attendance/AttendanceCardNew'

const WeekWiseAttendace = ({ navigation }) => {
    return (
        <ScrollView style={{ flex: 1, addingHorizontal: 16, }} showsVerticalScrollIndicator={false}>
            {/* <AttendanceCard navigation={navigation} />
            <AttendanceCard navigation={navigation} />
            <AttendanceCard navigation={navigation} /> */}

            <AttendanceCardNew punchIn={'8:30 AM'} punchOut={'9:30 PM'} />
            <AttendanceCardNew punchIn={'8:30 AM'} punchOut={'9:30 PM'} />
            <AttendanceCardNew punchIn={'8:30 AM'} punchOut={'9:30 PM'} />
            <AttendanceCardNew punchIn={'8:30 AM'} punchOut={'9:30 PM'} />
            <AttendanceCardNew punchIn={'8:30 AM'} punchOut={'9:30 PM'} />
            <AttendanceCardNew punchIn={'8:30 AM'} punchOut={'9:30 PM'} />
            <AttendanceCardNew punchIn={'8:30 AM'} punchOut={'9:30 PM'} />
        </ScrollView>
    )
}

export default WeekWiseAttendace

const styles = StyleSheet.create({})