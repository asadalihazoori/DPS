import React, { useState } from 'react'
import { ActivityIndicator, Alert, View, ScrollView } from 'react-native'
import inputValidation from '../../../utilities/Validations/YupValidate';
import DatePicker from '../../../components/DateTimePicker/DatePicker';
import TouchableView from '../../../components/Buttons/TouchableView';
import { createLeaveApi } from '../../../utilities/api/apiController';
import { LeavesRequestSchema } from '../../../utilities/Validations';
import Button from '../../../components/Buttons/Button';
import { useSelector } from 'react-redux';
import { styles } from './styles';
import ProfileTextInput from '../../../components/Inputs/ProfileTextInput';

const LeaveSubmission = ({ navigation }) => {

    const { holidayStatus, employeeID, name } = useSelector((state) => state.employeeProfile);
    const [loading, setLoading] = useState(false);
    const [showStartDatePicker, setShowStartDatePicker] = useState(false);
    const [showEndDatePicker, setShowEndDatePicker] = useState(false);

    const [inputs, setInputs] = useState({
        name: name,
        holidayType: null,
        type: null,
        startDate: null,
        endDate: null,
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

        const dateObject = new Date(selectedDate);
        const formattedDate = dateObject.toISOString().split('T')[0];

        if (field === 'startDate') {
            setShowStartDatePicker(false);
        } else if (field === 'endDate') {
            setShowEndDatePicker(false);
        }

        handleInputChange(field, formattedDate);

    };

    const validate = async () => {

        const result = await inputValidation(LeavesRequestSchema, inputs)

        if (result.isValidate) {
            handleSubmit();

        } else {
            setInputs(prev => ({
                ...prev,
                errors: result?.err
            }))
        }

    }

    const handleSubmit = async () => {
        setLoading(true);

        try {
            const body = {
                "jsonrps": 2.0,
                "params": {
                    "employee_id": employeeID,
                    "name": name,
                    "holiday_status_id": inputs?.holidayType?.id,
                    "date_from_ecube": inputs.startDate,
                    "date_to_ecube": inputs.endDate,
                    "type": 1,
                    "reason": inputs.reason
                }
            }

            const response = await createLeaveApi({ body, navigation });
            // console.log(response?.data)

            setLoading(false);

            if (response?.data?.result?.response) {
                Alert.alert("Confirmation", "Leave Submitted Successfully")
            }

            else if (response?.data?.error) {
                Alert.alert(response?.data?.error?.message, `${response?.data?.error?.data?.message}`);
            }

            else if (response == 'AxiosError: Request failed with status code 404') {
                Alert.alert("Session Expired", `Please Login Again`);
            }

            else {
                Alert.alert("Internet Connection Failed", `${response}`);

            }

        } catch (error) {
            console.error(error);
        }
    };


    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

            <TouchableView
                label={'Leave Type'}
                header={'Select Leave Type'}
                text={inputs?.holidayType}
                error={inputs?.errors?.holidayType}
                data={holidayStatus}
                onChange={(selectedType) => handleInputChange('holidayType', selectedType)}
            />

            <DatePicker
                date={new Date()}
                value={inputs.startDate}
                label={'Date'}
                onChange={(selectedDate) => handleDateChange(selectedDate, 'startDate')}
                showDatePicker={showStartDatePicker}
                setShowDatePicker={setShowStartDatePicker}
                placeholder={'Start Date'}
                error={inputs?.errors?.startDate}
            />

            <DatePicker
                date={new Date()}
                label={'Date'}
                value={inputs.endDate}
                onChange={(selectedDate) => handleDateChange(selectedDate, 'endDate')}
                showDatePicker={showEndDatePicker}
                setShowDatePicker={setShowEndDatePicker}
                placeholder={'End Date'}
                error={inputs?.errors?.endDate}
            />

            <ProfileTextInput
                label={'Requesting days'}
                editable={false}
                value={'Alison'}
            />

            <ProfileTextInput
                label={'Returning to work'}
                value={'Alison'}
                editable={false}
            />

            <ProfileTextInput
                label={'Comments'}
                placeholder={'Reason'}
                value={inputs.reason}
                error={inputs?.errors?.reason}
                multiline={true}
                height={75}
                onChangeText={(text) => handleInputChange('reason', text)}
            />

            <Button title={'Submit'} handelSubmit={validate} />

            {loading &&
                <ActivityIndicator size={'large'} />}

        </ScrollView>
    )
}

export default LeaveSubmission