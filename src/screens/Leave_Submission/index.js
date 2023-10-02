import { ActivityIndicator, Alert, Button, SafeAreaView, Text, View } from 'react-native'
import React, { useState } from 'react'
import DatePicker from '../../components/DatePicker';
import Input from '../../components/Input';
import { useSelector } from 'react-redux';
import { createLeaveApi } from '../../utilities/api/apiController';
import RadioSelectionModal from '../../components/RadioSelectionModal';
import TouchableView from '../../components/TouchableView';

const LeaveSubmission = ({ navigation }) => {

    const employee_id = useSelector((state) => state.employeeProfile.employeeID);
    const name = useSelector((state) => state.employeeProfile.name);
    const holiday_status = useSelector((state) => state.employeeProfile.holidayStatus);

    const [showStartDatePicker, setShowStartDatePicker] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [showEndDatePicker, setShowEndDatePicker] = useState(false);
    const [loading, setLoading] = useState(false);

    console.log(employee_id);

    const [inputs, setInputs] = useState({
        name: name,
        holidayType: null,
        type: null,
        startDate: null,
        endDate: null,
        reason: null,
    });

    const handleDateChange = (selectedDate, field) => {

        const dateObject = new Date(selectedDate);
        const formattedDate = dateObject.toISOString().split('T')[0];

        if (field === 'startDate') {
            setShowStartDatePicker(false);
        } else if (field === 'endDate') {
            setShowEndDatePicker(false);
        }
        setInputs({
            ...inputs,
            [field]: formattedDate
            // selectedDate.toDateString(),
        });
    };

    const handleInputChange = (field, value) => {
        setInputs({
            ...inputs,
            [field]: value,
        })
    }

    const handleSelectLeaveType = (leaveType) => {
        setInputs({
            ...inputs,
            ['holidayType']: leaveType,
        })
    }

    const handleModalVisible = () => {
        setModalVisible(true)
    }


    const handleSubmit = async () => {
        setLoading(true);

        try {
            const body = {
                "jsonrps": 2.0,
                "params": {
                    "employee_id": employee_id,
                    "name": name,
                    "holiday_status_id": inputs?.holidayType?.id, //2,4,6,8
                    "date_from_ecube": inputs.startDate,
                    "date_to_ecube": inputs.endDate,
                    "type": 1,
                    "reason": inputs.reason
                }
            }

            const response = await createLeaveApi({ body, navigation });
            console.log(response.data);
            if (response?.data?.result?.response) {
                // setB64_pdf(response?.data?.result?.response?.b64_pdf);
                console.log(response?.data?.result?.response);

                setLoading(false);
                Alert.alert("Confirmation", "Leave Submitted Successfully")
            } else {
                Alert.alert(response.data.error.message, response.data.error.data.message)
                setLoading(false);

            }

        } catch (error) {
            console.error(error);
        }
    };


    return (
        <SafeAreaView style={{ padding: 20, backgroundColor: 'white', flex: 1 }}>

            <View style={{ marginBottom: 20 }}>
                <Input
                    marginTop={24}
                    placeholder={'Name'}
                    // icon={icons.lock}
                    // password={true}
                    editable={false}

                    value={inputs.name}
                    onChangeText={(text) => handleInputChange('name', text)} />

                {/* <Input
                    marginTop={24}
                    placeholder={'Holiday Type'}

                    value={inputs.holidayType}
                    onChangeText={(text) => handleInputChange('holidayType', text)} /> */}

                <TouchableView header={'Select Leave Type'} text={inputs?.holidayType?.name} handleModal={handleModalVisible} />

                <DatePicker
                    dob={new Date()}
                    value={inputs.startDate}
                    onChange={(event, selectedDate) => handleDateChange(selectedDate, 'startDate')}
                    showDatePicker={showStartDatePicker}
                    setShowDatePicker={setShowStartDatePicker}
                    placeholder={'Start Date'}
                />
                <DatePicker
                    dob={new Date()}
                    value={inputs.endDate}
                    onChange={(event, selectedDate) => handleDateChange(selectedDate, 'endDate')}
                    showDatePicker={showEndDatePicker}
                    setShowDatePicker={setShowEndDatePicker}
                    placeholder={'End Date'}
                />

                <Input
                    marginTop={24}
                    placeholder={'Reason'}

                    value={inputs.reason}

                    onChangeText={(text) => handleInputChange('reason', text)} />
            </View >

            <Button onPress={handleSubmit} title='Submit' />

            {loading &&
                <ActivityIndicator size={'large'} />}

            <RadioSelectionModal modalVisible={modalVisible} setModalVisible={setModalVisible}
                header={'Holiday Type'}
                loanTypes={holiday_status}
                onSelectLoanType={handleSelectLeaveType} />
        </SafeAreaView>
    )
}

export default LeaveSubmission