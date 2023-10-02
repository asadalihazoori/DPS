import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
// import { fontStyle } from '../theme/fonstStyle'
// import { colors } from '../theme/colors'
// import { icons } from '../assets/icons/icons'
import DateTimePicker from '@react-native-community/datetimepicker';
// import { SvgXml } from 'react-native-svg'


const DatePicker = ({ value, dob, placeholder, onChange, showDatePicker, setShowDatePicker }) => {

    return (
        <View style={styles.dobView}>
            <TouchableOpacity onPress={() => setShowDatePicker(true)} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                <Text style={[{ color: value ? 'black' : 'green' }]}>{value ? value : placeholder}</Text>
                {/* <SvgXml xml={value ? icons.calender.black : icons.calender.grey} style={{ alignSelf: 'flex-end' }} /> */}
            </TouchableOpacity>
            {showDatePicker && (
                <DateTimePicker
                    value={dob}
                    mode="date"
                    is24Hour={true}
                    display="default"
                    onChange={onChange}

                />
            )}
        </View>

    )
}

export default DatePicker

const styles = StyleSheet.create({
    dobView: {
        marginTop: 14,
        // borderWidth: 1,
        // borderRadius: 16,
        padding: 15,
        // width: 380,
        height: 50,
        backgroundColor: 'white',
        borderWidth: 1,

    },
})