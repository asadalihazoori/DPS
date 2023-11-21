import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AttendanceCard from './Cards/AttendanceCard'

const WeekWiseAttendace = ({ navigation }) => {
    return (
        <ScrollView style={{ flex: 1, }}>
            <AttendanceCard navigation={navigation} />
            <AttendanceCard navigation={navigation} />
            <AttendanceCard navigation={navigation} />
        </ScrollView>
    )
}

export default WeekWiseAttendace

const styles = StyleSheet.create({})