import { ScrollView, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import DatePicker from '../../../components/DateTimePicker/DatePicker';
import ProfileTextInput from '../../../components/Inputs/ProfileTextInput';
import moment from 'moment';
import SmartButton from '../../../components/Buttons/SmartButton';

const AddOvertimeRequest = ({ navigation }) => {
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showStartTimePicker, setShowStartTimePicker] = useState(false);
    const [showEndTimePicker, setShowEndTimePicker] = useState(false);
    const [inputs, setInputs] = useState({
        date: null,
        startTime: null,
        endTime: null,
        reason: null,

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

        // const dateObject = new Date(selectedDate);
        // const formattedDate = dateObject.toISOString().split('T')[0];
        console.log("overtime", selectedDate);

        const localDateTime = moment(selectedDate);
        const formattedTime = localDateTime.format('hh:mm A');
        const formattedDate = localDateTime.format('DD-MM-YYYY');

        switch (field) {
            case "date":
                setShowDatePicker(false);
                handleInputChange(field, formattedDate);
                break;

            case "startTime":
                setShowStartTimePicker(false);
                handleInputChange(field, formattedTime);
                break;

            case "endTime":
                setShowEndTimePicker(false)
                handleInputChange(field, formattedTime);
                break;

            default:
                break;
        }


    };

    // const validate = async () => {

    //     const result = await inputValidation(LeavesRequestSchema, inputs)

    //     if (result.isValidate) {
    //         // handleSubmit();

    //     } else {
    //         setInputs(prev => ({
    //             ...prev,
    //             errors: result?.err
    //         }))
    //     }

    // }

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}
        // contentContainerStyle={{ justifyContent: 'space-between', flexGrow: 1 }}
        >

            <DatePicker
                date={new Date()}
                value={inputs.date}
                label={'Date'}
                onChange={(selectedDate) => handleDateChange(selectedDate, 'date')}
                showDatePicker={showDatePicker}
                setShowDatePicker={setShowDatePicker}
                placeholder={'Date'}
                error={inputs?.errors?.date}
            // mode='time'
            />
            <View style={{ flexDirection: 'row' }}>

                <View style={{ flex: 1 }}>

                    <DatePicker
                        date={new Date()}
                        value={inputs.startTime}
                        label={'Start Time'}
                        onChange={(selectedDate) => handleDateChange(selectedDate, 'startTime')}
                        showDatePicker={showStartTimePicker}
                        setShowDatePicker={setShowStartTimePicker}
                        placeholder={'9:00 pm'}
                        error={inputs?.errors?.startTime}
                        mode='time'
                    />

                </View>
                <View style={{ flex: 1 }}>
                    <DatePicker
                        date={new Date()}
                        value={inputs.endTime}
                        label={'End Time'}
                        onChange={(selectedDate) => handleDateChange(selectedDate, 'endTime')}
                        showDatePicker={showEndTimePicker}
                        setShowDatePicker={setShowEndTimePicker}
                        placeholder={'11:00 pm'}
                        error={inputs?.errors?.endTime}
                        mode='time'
                    />
                </View>
            </View>

            <ProfileTextInput
                label={'Total Overtime'}
                value={'2 hrs'}
                editable={false}
            />

            <ProfileTextInput
                label={'Reason'}
                placeholder={'Reason'}
                value={inputs.reason}
                error={inputs?.errors?.reason}
                multiline={true}
                height={75}
                onChangeText={(text) => handleInputChange('reason', text)}
            />

            <View style={{ justifyContent: 'flex-end', flexDirection: 'row' }}>

                <SmartButton title={'Discard'} />
                <SmartButton title={'Submit'} />
            </View>



        </ScrollView>
    )
}

export default AddOvertimeRequest