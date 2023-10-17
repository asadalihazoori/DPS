import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
// import { fontStyle } from '../theme/fonstStyle'
// import { colors } from '../theme/colors'
// import { icons } from '../assets/icons/icons'
import DateTimePicker from '@react-native-community/datetimepicker';
// import { SvgXml } from 'react-native-svg'


const DatePicker = ({ value, date, label, placeholder, onChange, showDatePicker, setShowDatePicker, error }) => {


    let borderColor = 'black';

    if (error) {
        borderColor = 'red';
    } else if (value) {
        borderColor = 'black';
    }


    const OnChangeDate = (event, selectedDate) => {

        if (event.type == "set") {
            onChange(selectedDate)
        }
        setShowDatePicker(false);

    }

    return (
        <View>
            {label &&
                <Text style={styles.label}>{label}</Text>
            }

            <View style={[styles.dobView, {
                // borderColor: borderColor
            }]}>
                <TouchableOpacity onPress={() => setShowDatePicker(true)} style={[styles.touchableView, {
                    borderColor: borderColor
                }]}>

                    <Text style={[{ color: 'black' }]}>{value ? value : placeholder}</Text>
                    {/* <SvgXml xml={value ? icons.calender.black : icons.calender.grey} style={{ alignSelf: 'flex-end' }} /> */}
                </TouchableOpacity>

                {showDatePicker && (
                    <DateTimePicker
                        value={date}
                        mode='date'
                        // is24Hour={true}
                        display="default"
                        // onChange={handleDateChange}
                        // onChange={onChange}
                        onChange={OnChangeDate}

                    />
                )}

                {error && (
                    <Text style={{ marginTop: 5, marginLeft: 4, color: 'red', fontSize: 12 }}>
                        {error}
                    </Text>
                )}

            </View>
        </View>

    )
}

export default DatePicker

const styles = StyleSheet.create({
    dobView: {
        marginTop: 16,
        // borderWidth: 10,
        // borderRadius: 16,
        // padding: 15,
        // width: 380,
        // height: 70,
        backgroundColor: 'white',
        // borderWidth: 1,
        // borderRadius: 10,

    },
    
    label: {
        color: 'black',
        marginBottom: -10,
        marginLeft: 3,
        fontWeight: '600',
        marginTop: 15,

    },

    touchableView: {
        borderWidth: 1,
        borderRadius: 10,
        height: 50,
        padding: 15,
        // flexDirection: 'row',
        justifyContent: 'space-between'
    }
})