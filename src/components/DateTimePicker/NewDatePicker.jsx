import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import DatePicker from 'react-native-date-picker'
import { COLORS } from '../../theme/colors';
// import { fontStyle } from '../theme/fonstStyle'
// import { colors } from '../theme/colors'
// import { icons } from '../assets/icons/icons'
// import DateTimePicker from '@react-native-community/datetimepicker';
// import { SvgXml } from 'react-native-svg'


const NewDatePicker = ({ value, placeholder, onChange, showDatePicker, setShowDatePicker, error, }) => {

    let borderColor = COLORS.black;

    if (error) {
        borderColor = COLORS.red;
    } else if (value) {
        borderColor = COLORS.black;
    }

    return (
        <View>

            <View style={[styles.dobView, {
                borderColor: borderColor
            }]}>
                <TouchableOpacity onPress={() => setShowDatePicker(true)} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                    <Text style={[{ color: COLORS.black }]}>{value ? value : placeholder}</Text>
                    {/* <SvgXml xml={value ? icons.calender.black : icons.calender.grey} style={{ alignSelf: 'flex-end' }} /> */}
                </TouchableOpacity>

                <DatePicker
                    modal
                    open={showDatePicker}
                    date={new Date()}
                    onConfirm={(date) => {
                        onChange(date)
                    }}

                    // timeZoneOffsetInMinutes={300}
                    onCancel={() => {
                        setShowDatePicker(false)
                    }}
                />

            </View>
            {error && (
                <Text style={{ marginTop: 5, marginLeft: 4, color: COLORS.red, fontSize: 12 }}>
                    {error}
                </Text>
            )}
        </View>

    )
}

export default NewDatePicker

const styles = StyleSheet.create({
    dobView: {
        marginTop: 16,
        // borderWidth: 1,
        // borderRadius: 16,
        padding: 15,
        // width: 380,
        height: 50,
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderRadius: 10,

    },
})