
import { ActivityIndicator, Alert, SafeAreaView, ScrollView, View } from 'react-native'
import React, { useState } from 'react'
import Input from '../../../components/InputField';
import { useSelector } from 'react-redux';
import { createAttendanceApi } from '../../../utilities/api/apiController';
import RadioSelectionModal from '../../../components/RadioSelectionModal';
import TouchableView from '../../../components/Buttons/TouchableView';
import Button from '../../../components/Buttons/Button';
import NewDatePicker from '../../../components/DateTimePicker/NewDatePicker';
import moment from 'moment-timezone';
import inputValidation from '../../../utilities/Validations/YupValidate';
import { CreateAttendanceSchema } from '../../../utilities/Validations';

const AttendanceRequest = ({ navigation }) => {

    const { data } = useSelector((state) => state.employeeProfile);
    const [showStartDatePicker, setShowStartDatePicker] = useState(false);
    const [showEndDatePicker, setShowEndDatePicker] = useState(false);
    const [loading, setLoading] = useState(false);

    const [modalVisible, setModalVisible] = useState(false);

    const [inputs, setInputs] = useState({
        name: data?.name,
        currentShift: data?.shift?.name,
        selectedShift: null,
        startDate: null,
        endDate: null,
        errors: null,
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

    const pakistanTime = (selectedDate) => {

        if (selectedDate) {
            const date = `${selectedDate}`
            const newdate = date.split('G');

            return newdate[0];
        }

        // const dateObject = new Date(selectedDate);
        // const convertedDateTime = moment(dateObject)
        //     .tz('Asia/Karachi')
        //     .format('YYYY-MM-DD HH:mm:ss');


    }

    const utcTime = (selectedDate) => {
        const dateObject = new Date(selectedDate);
        const dateTime = dateObject.toISOString().split('.');
        const [date, time] = dateTime[0].split('T');

        return `${date} ${time}`;

    }



    const handleDateChange = (selectedDate, field) => {

        if (field === 'startDate') {
            setShowStartDatePicker(false);
        } else if (field === 'endDate') {
            setShowEndDatePicker(false);
        }

        handleInputChange(field, `${selectedDate}`);

    };


    const validate = async () => {

        const result = await inputValidation(CreateAttendanceSchema, inputs)

        console.log(result);
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
                    "employee_id": data.employee_id,
                    "datetime_in": utcTime(inputs.startDate),
                    "datetime_out": utcTime(inputs.endDate),

                }
            }

            const response = await createAttendanceApi({ body, navigation });
            setLoading(false);

            if (response?.data?.result?.response) {
                Alert.alert("Confirmation", "Attendance submitted Successfully")
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
        <SafeAreaView style={{ padding: 20, backgroundColor: 'white', flex: 1 }}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={{ marginBottom: 20 }}>
                    <Input
                        marginTop={24}
                        editable={false}
                        value={inputs.name}
                    />

                    <Input
                        marginTop={24}
                        editable={false}
                        value={inputs.currentShift}
                    />


                    <TouchableView
                        header={'Select Shift if shift Changed'}
                        text={inputs?.selectedShift?.name}
                        handleModal={() => setModalVisible(true)}
                    />

                    <NewDatePicker
                        value={pakistanTime(inputs.startDate)}
                        showDatePicker={showStartDatePicker}
                        setShowDatePicker={setShowStartDatePicker}
                        placeholder={'Start Time'}
                        onChange={(selectedDate) => handleDateChange(selectedDate, 'startDate')}
                        error={inputs?.errors?.startDate}
                    />

                    <NewDatePicker
                        value={pakistanTime(inputs.endDate)}
                        showDatePicker={showEndDatePicker}
                        setShowDatePicker={setShowEndDatePicker}
                        placeholder={'End Time'}
                        onChange={(selectedDate) => handleDateChange(selectedDate, 'endDate')}
                        // error={inputs?.errors}
                    />
                </View >


                <Button handelSubmit={validate} title='Submit' />

                {loading &&
                    <ActivityIndicator size={'large'} />}

                <RadioSelectionModal
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible}
                    data={data?.shifts}
                    header={'Select Shift'}
                    onChangeSelection={(selectedShift) => handleInputChange('selectedShift', selectedShift)}
                />

            </ScrollView>
        </SafeAreaView>
    )
}

export default AttendanceRequest