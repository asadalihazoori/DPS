import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
import { COLORS } from '../../theme/colors';
import { FontStyle } from '../../theme/FontStyle';
import Theme from '../../theme/theme';
import { SvgXml } from 'react-native-svg';
import { Icons } from '../../assets/SvgIcons/Icons';
// import { SvgXml } from 'react-native-svg'


const DatePicker = ({ value, date, label, placeholder, onChange, showDatePicker, setShowDatePicker, error, marginBottom }) => {


    let borderColor = COLORS.black;

    if (error) {
        borderColor = COLORS.red;
    } else if (value) {
        borderColor = COLORS.black;
    }


    const OnChangeDate = (event, selectedDate) => {

        if (event.type == "set") {
            onChange(selectedDate)
        }
        setShowDatePicker(false);

    }

    return (

        <View
            style={[styles.container, { marginBottom: marginBottom ? marginBottom : 12 }]}>
            <View>
                <Text style={[FontStyle.Regular14, { color: COLORS.darkBlack }]}>{label}</Text>
            </View>

            <TouchableOpacity onPress={() => setShowDatePicker(true)} style={[styles.inputView, {
                backgroundColor: COLORS.white,
                borderColor: error ? COLORS.red : "#BEBEBE"
            }]}>

                <Text style={[FontStyle.Regular12_400, { color: value ? COLORS.darkBlack : COLORS.grey3, flex: 1 }]}>{value ? value : placeholder}</Text>
                <SvgXml xml={Icons.calender} style={{ marginRight: 4, alignSelf: 'center' }} />
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
        </View>

    )
}

export default DatePicker

const styles = StyleSheet.create({


    container: {
        marginHorizontal: 4,
        // borderWidth: 1,
    },

    inputView: {
        ...Theme.Shadow,
        marginTop: 8,
        paddingHorizontal: 8,
        // paddingVertical: 14,
        height: 45,
        flexDirection: 'row', alignItems: 'center'
        // borderWidth: 1,

    }
})