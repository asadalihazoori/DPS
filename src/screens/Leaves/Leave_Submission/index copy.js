import React, { useState } from 'react'
import { ActivityIndicator, Alert, SafeAreaView, View } from 'react-native'
import RadioSelectionModal from '../../../components/RadioSelectionModal';
import inputValidation from '../../../utilities/Validations/YupValidate';
import DatePicker from '../../../components/DateTimePicker/DatePicker';
import TouchableView from '../../../components/Buttons/TouchableView';
import { createLeaveApi } from '../../../utilities/api/apiController';
import { LeavesRequestSchema } from '../../../utilities/Validations';
import Button from '../../../components/Buttons/Button';
import Input from '../../../components/InputField';
import { useSelector } from 'react-redux';
import { styles } from './styles';

const LeaveSubmission = ({ navigation }) => {

    const { holidayStatus, employeeID, name } = useSelector((state) => state.employeeProfile);
    const [showStartDatePicker, setShowStartDatePicker] = useState(false);
    const [showEndDatePicker, setShowEndDatePicker] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);

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
        <SafeAreaView style={styles.container}>

            <View style={{ marginBottom: 20 }}>

                <Input
                    marginTop={12}
                    editable={false}
                    value={inputs.name}
                />

                <TouchableView
                    header={'Select Leave Type'}
                    text={inputs?.holidayType?.name}
                    handleModal={() => setModalVisible(true)}
                    error={inputs?.errors?.holidayType}
                />

                <DatePicker
                    date={new Date()}
                    value={inputs.startDate}
                    onChange={(selectedDate) => handleDateChange(selectedDate, 'startDate')}
                    showDatePicker={showStartDatePicker}
                    setShowDatePicker={setShowStartDatePicker}
                    placeholder={'Start Date'}
                    error={inputs?.errors?.startDate}
                />

                <DatePicker
                    date={new Date()}
                    value={inputs.endDate}
                    onChange={(selectedDate) => handleDateChange(selectedDate, 'endDate')}
                    showDatePicker={showEndDatePicker}
                    setShowDatePicker={setShowEndDatePicker}
                    placeholder={'End Date'}
                    error={inputs?.errors?.endDate}
                />

                <Input
                    marginTop={16}
                    placeholder={'Reason'}
                    value={inputs.reason}
                    error={inputs?.errors?.reason}
                    onChangeText={(text) => handleInputChange('reason', text)} />
            </View >

            <Button title={'Submit'} handelSubmit={validate} />

            {loading &&
                <ActivityIndicator size={'large'} />}

            <RadioSelectionModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                header={'Holiday Type'}
                data={holidayStatus}
                onChangeSelection={(leaveType) => handleInputChange('holidayType', leaveType)}
            />

        </SafeAreaView>
    )
}

export default LeaveSubmission