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
import { NextButton } from '../../../components/Inputs';
import YearPicker from '../../../components/Inputs/YearPicker';
import TouchableViewModal from '../../../components/Buttons/TouchableViewModal';
import RadioSelectionModal from '../../../components/RadioSelectionModal';

const LeaveSubmission = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const holidayStatus = [
        {
            "id": 2,
            "name": "Sick Leaves"
        },
        {
            "id": 4,
            "name": "Short leave"
        },
        {
            "id": 6,
            "name": "Annual Leaves"
        },
        {
            "id": 7,
            "name": "Casual Leaves"
        },
        {
            "id": 11,
            "name": "CPL"
        },
        {
            "id": 16,
            "name": "CPL (Non-Encashable)"
        }
    ];
    const { employeeID, name } = useSelector((state) => state.employeeProfile); // also getting holidayStatus
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
            // handleSubmit();

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

    const year = [
        {
            "value": 2,
            "label": "Sick Leaves"
        },
        {
            "value": 4,
            "label": "Short leave"
        },
        {
            "value": 6,
            "label": "Annual Leaves"
        },
        {
            "value": 7,
            "label": "Casual Leaves"
        },
        {
            "value": 11,
            "label": "CPL"
        },
        {
            "value": 16,
            "label": "CPL (Non-Encashable)"
        }
    ];


    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}
            contentContainerStyle={{ justifyContent: 'space-between', flexGrow: 1 }}>

            <View>

                <TouchableView
                    label={'Leave Type'}
                    header={'Select Leave Type'}
                    text={inputs?.holidayType}
                    error={inputs?.errors?.holidayType}
                    data={holidayStatus}
                    onChange={(selectedType) => handleInputChange('holidayType', selectedType)}
                />

                {/* <YearPicker
                    data={year}
                    label={'Leave Type'}
                    placeholder={'Select Leave Type'}
                    onChange={(selectedType) => handleInputChange('holidayType', selectedType)} />

                <TouchableViewModal
                    header={'Select Leave Type'}
                    text={inputs?.holidayType?.name}
                    handleModal={() => setModalVisible(true)}
                    error={inputs?.errors?.holidayType}
                /> */}

                <DatePicker
                    date={new Date()}
                    value={inputs.startDate}
                    label={'Start date'}
                    onChange={(selectedDate) => handleDateChange(selectedDate, 'startDate')}
                    showDatePicker={showStartDatePicker}
                    setShowDatePicker={setShowStartDatePicker}
                    placeholder={'Start Date'}
                    error={inputs?.errors?.startDate}
                />

                <DatePicker
                    date={new Date()}
                    label={'End date'}
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
                    value={'2'}
                />

                <ProfileTextInput
                    label={'Returning to work'}
                    value={'Date'}
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
            </View>



            <View style={styles.bottomView}>
                <NextButton title={'Submit'} onPress={validate} />
            </View>

            {loading &&
                <ActivityIndicator size={'large'} />}

            <RadioSelectionModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                header={'Holiday Type'}
                data={holidayStatus}
                onChangeSelection={(leaveType) => handleInputChange('holidayType', leaveType)}
            />
        </ScrollView>
    )
}

export default LeaveSubmission