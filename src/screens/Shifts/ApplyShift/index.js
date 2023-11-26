import React, { useState } from 'react'
import { ActivityIndicator, Alert, SafeAreaView, ScrollView, View } from 'react-native'
import { useSelector } from 'react-redux';
import { createShiftChangeApi } from '../../../utilities/api/apiController';
import RadioSelectionModal from '../../../components/RadioSelectionModal';
import inputValidation from '../../../utilities/Validations/YupValidate';
import DatePicker from '../../../components/DateTimePicker/DatePicker';
import TouchableView from '../../../components/Buttons/TouchableView';
import { CreateShiftSchema } from '../../../utilities/Validations';
import Button from '../../../components/Buttons/Button';
import Input from '../../../components/InputField';
import { styles } from './styles';
import ProfileTextInput from '../../../components/Inputs/ProfileTextInput';

const ApplyShift = ({ navigation }) => {

    const data = useSelector((state) => state?.employeeProfile?.data);
    const [showStartDatePicker, setShowStartDatePicker] = useState(false);
    const [showEndDatePicker, setShowEndDatePicker] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    const [inputs, setInputs] = useState({
        name: data.name,
        currentShift: data?.shift?.name,
        selectedShift: null,
        startDate: null,
        endDate: null,
        reason: null,
        errors: null
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

        const result = await inputValidation(CreateShiftSchema, inputs)

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

                    "requested_shift": inputs?.selectedShift?.id,
                    "current_shift": inputs?.selectedShift?.id,

                    "from_date": inputs.startDate,
                    "to_date": inputs.endDate,
                    "reason": inputs.reason,
                    "name": data.name
                }
            }

            const response = await createShiftChangeApi({ body, navigation });

            setLoading(false);

            if (response?.data?.result?.response) {
                Alert.alert("Confirmation", "Shift Requested Successfully")
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
            <ScrollView showsVerticalScrollIndicator={false}>


                <ProfileTextInput
                    label={'Name'}
                    value={inputs.name}
                    editable={false}
                />
                <ProfileTextInput
                    label={'Current Shift'}
                    value={inputs.currentShift}
                    editable={false}
                />


                {/* <Input
                    marginTop={16}
                    editable={false}
                    value={inputs.name}
                />

                <Input
                    marginTop={16}
                    editable={false}
                    value={inputs.currentShift}
                /> */}


                <TouchableView
                    label={'Requested Shift'}
                    header={'Select'}
                    text={inputs?.selectedShift}
                    handleModal={() => setModalVisible(true)}
                    error={inputs?.errors?.selectedShift}
                    data={data?.shifts}
                    onChange={(selectedType) => handleInputChange('selectedShift', selectedType)}
                />

                <DatePicker
                    label={'From'}
                    date={new Date()}
                    placeholder={'Start Date'}
                    value={inputs.startDate}
                    showDatePicker={showStartDatePicker}
                    setShowDatePicker={setShowStartDatePicker}
                    onChange={(selectedDate) => handleDateChange(selectedDate, 'startDate')}
                    error={inputs?.errors?.startDate}
                />

                <DatePicker
                    label={'To'}
                    date={new Date()}
                    placeholder={'End Date'}
                    value={inputs.endDate}
                    showDatePicker={showEndDatePicker}
                    setShowDatePicker={setShowEndDatePicker}
                    onChange={(selectedDate) => handleDateChange(selectedDate, 'endDate')}
                    error={inputs?.errors?.endDate}
                />

                <ProfileTextInput
                    label={'Reason'}
                    editable={true}
                    placeholder={'Enter Reason'}
                    value={inputs.reason}
                    error={inputs?.errors?.reason}
                    multiline={true}
                    height={75}
                    onChangeText={(text) => handleInputChange('reason', text)}
                />

                {/* <Input
                    marginTop={16}
                    placeholder={'Reason'}
                    value={inputs.reason}
                    onChangeText={(text) => handleInputChange('reason', text)}
                    error={inputs?.errors?.reason}
                /> */}

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

export default ApplyShift