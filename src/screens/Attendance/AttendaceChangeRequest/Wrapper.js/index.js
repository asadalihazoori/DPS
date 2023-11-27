import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
// import ProfileTextInput from '../../../components/Inputs/ProfileTextInput'
// import DatePicker from '../../../components/DateTimePicker/DatePicker'
// import { TouchableOpacity } from 'react-native-gesture-handler'
// import Theme from '../../../theme/theme'
// import { COLORS } from '../../../theme/colors'
// import { FontStyle } from '../../../theme/FontStyle'
// import DropDownPicker from 'react-native-dropdown-picker'
// import YearPicker from '../../../components/Inputs/YearPicker'
import Theme from '../../../../theme/theme'
import { FontStyle } from '../../../../theme/FontStyle'
import { COLORS } from '../../../../theme/colors'
import DatePicker from '../../../../components/DateTimePicker/DatePicker'
import YearPicker from '../../../../components/Inputs/YearPicker'
import ProfileTextInput from '../../../../components/Inputs/ProfileTextInput'


const ChangeRequestForm = ({ navigation }) => {


    const [showStartDatePicker, setShowStartDatePicker] = useState(false);
    const [showEndDatePicker, setShowEndDatePicker] = useState(false);

    const [inputs, setInputs] = useState({
        // name: name,
        // holidayType: null,
        // type: null,
        startDate: null,
        endDate: null,
        // reason: null,
    });

    const handleInputChange = (field, value) => {
        setInputs({
            ...inputs,
            [field]: value,
            errors: {
                ...inputs.errors,
                [field]: false
            }
        })
    }


    const handleDateChange = (selectedDate, field) => {

        const dateObject = new Date(selectedDate);
        const formattedDate = dateObject.toISOString().split('T')[0];

        if (field === 'startDate') {
            setShowStartDatePicker(false);
        } else if (field === 'endDate') {
            setShowEndDatePicker(false);
        }

        handleInputChange(field, formattedDate);

    };

    return (
        <View style={styles.container}>



            {/* <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                placeholder={'Choose a fruit.'}
                style={[
                    Theme.Shadow, {

                    }]}
                labelStyle={{}}
            /> */}

            <DatePicker
                date={new Date()}
                label={'Date'}
                placeholder={'23 November'}
                value={inputs.startDate}
                onChange={(selectedDate) => handleDateChange(selectedDate, 'startDate')}
                showDatePicker={showStartDatePicker}
                setShowDatePicker={setShowStartDatePicker}
                error={inputs?.errors?.startDate}
            />

            <View style={{
                flexDirection: 'row',
                gap: 4,
            }}>
                <View style={{ flex: 1 }}>
                    <YearPicker label={'Month'} />

                </View>
                <View style={{ flex: 1 }}>
                    <YearPicker label={'Year'} />

                </View>
            </View>
            <View style={{
                flexDirection: 'row',
                gap: 4,
            }}>
                <View style={{ flex: 1 }}>
                    <YearPicker label={'Month'} />

                </View>
                <View style={{ flex: 1 }}>
                    <YearPicker label={'Year'} />

                </View>
            </View>


            {/* <View style={{
                flexDirection: 'row',
                // gap: 4,
            }}>

                <DatePicker
                    date={new Date()}
                    label={'From'}
                    placeholder={'23 November'}
                    value={inputs.startDate}
                    onChange={(selectedDate) => handleDateChange(selectedDate, 'startDate')}
                    showDatePicker={showStartDatePicker}
                    setShowDatePicker={setShowStartDatePicker}
                    error={inputs?.errors?.startDate}
                />

                <DatePicker
                    date={new Date()}
                    label={'To'}
                    value={inputs.endDate}
                    onChange={(selectedDate) => handleDateChange(selectedDate, 'endDate')}
                    showDatePicker={showEndDatePicker}
                    setShowDatePicker={setShowEndDatePicker}
                    placeholder={'27 October'}
                    error={inputs?.errors?.endDate}
                />

            </View>
             */}

            <ProfileTextInput
                label={'Reason'}
                editable={true}
                placeholder={'Request For the Changes.'}
                multiline={true}
                height={75}
            // value={inputs.reason}
            // error={inputs?.errors?.reason}
            // onChangeText={(text) => handleInputChange('reason', text)}
            />

            {/* <View style={{ marginTop: 12, alignItems: 'flex-end' }}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={[Theme.Shadow, {
                        backgroundColor: detail ? COLORS.blue : COLORS.grey4,
                        width: 88, height: 32, justifyContent: 'center',
                        alignItems: 'center', borderWidth: 0, margin: 4
                    }]}
                    onPress={() => setOpenDetail(!detail)}>
                    <Text style={[FontStyle.Regular14, { color: COLORS.white }]}>Generate</Text>
                </TouchableOpacity>
            </View> */}



            <View style={{ marginTop: 12, justifyContent: 'flex-end', flexDirection: 'row' }}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={[Theme.Shadow, {
                        backgroundColor: COLORS.blue,
                        width: 120, height: 32, justifyContent: 'center',
                        alignItems: 'center', borderWidth: 0, margin: 4
                    }]}
                    onPress={() => { }}>
                    <Text style={[FontStyle.Regular14, { color: COLORS.white }]}>Past Attendance</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={[Theme.Shadow, {
                        backgroundColor: COLORS.blue,
                        width: 88, height: 32, justifyContent: 'center',
                        alignItems: 'center', borderWidth: 0, margin: 4
                    }]}
                    onPress={() => { }}>
                    <Text style={[FontStyle.Regular14, { color: COLORS.white }]}>Send</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default ChangeRequestForm