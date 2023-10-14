import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
// import { fontStyle } from '../theme/fonstStyle'
// import { colors } from '../theme/colors'
// import { icons } from '../assets/icons/icons'
import DateTimePicker from '@react-native-community/datetimepicker';
// import { SvgXml } from 'react-native-svg'


const TimePicker = ({ value, dob, placeholder, onChange, showDatePicker, setShowDatePicker, error, handleTimeChange, time, showTimePicker, setShowTimePicker, onChangeTime }) => {


    let borderColor = 'black';

    if (error) {
        borderColor = 'red';
    } else if (value) {
        borderColor = 'black';
    }
    return (
        <View style={[styles.dobView, {
            borderColor: borderColor
        }]}>
            <TouchableOpacity onPress={() => setShowTimePicker(true)} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                <Text style={[{ color: 'black' }]}>{value ? value : placeholder}</Text>
                {/* <SvgXml xml={value ? icons.calender.black : icons.calender.grey} style={{ alignSelf: 'flex-end' }} /> */}
            </TouchableOpacity>
            {showTimePicker && (
                <DateTimePicker
                    value={dob}
                    mode='time'
                    is24Hour={true}
                    display="default"
                    // onChange={handleDateChange}
                    onChange={onChange}
                    // timeZoneName={'Asia/Karachi'}
                    // timeZoneName={'Asia/Karachi'}
                    // timeZoneOffsetInMinutes={300}

                />
            )}
            {/* {showTimePicker && (
                <DateTimePicker
                    value={dob}
                    mode='time'
                    is24Hour={true}
                    display="default"
                    onChange={onChangeTime}

                />
            )} */}
        </View>

    )
}

export default TimePicker

const styles = StyleSheet.create({
    dobView: {
        marginTop: 16,
        // borderWidth: 1,
        // borderRadius: 16,
        padding: 15,
        // width: 380,
        height: 50,
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 10,

    },
})