import { ActivityIndicator, Alert, Button, SafeAreaView, Text, View } from 'react-native'
import React, { useState } from 'react'
import DatePicker from '../../components/DatePicker';
import Input from '../../components/Input';
import { useSelector } from 'react-redux';
import { createShiftChangeApi } from '../../utilities/api/apiController';
import RadioSelectionModal from '../../components/RadioSelectionModal';
import TouchableView from '../../components/TouchableView';

const Shift = ({ navigation }) => {

    const data = useSelector((state) => state.employeeProfile.data);
    const name = useSelector((state) => state.employeeProfile.name);
    const [showStartDatePicker, setShowStartDatePicker] = useState(false);
    const [showEndDatePicker, setShowEndDatePicker] = useState(false);
    const [loading, setLoading] = useState(false);

    // console.log(employee_id);
    const [modalVisible, setModalVisible] = useState(false);

    const [inputs, setInputs] = useState({
        name: name,
        currentShift: data.shift.name,
        selectedShift: null,
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


    const handleSelectShift = (selectedShift) => {
        setInputs({
            ...inputs,
            ['selectedShift']: selectedShift,
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
                    "employee_id": data.employee_id,

                    "requested_shift": 1,
                    "current_shift": inputs?.selectedShift?.id,
                    "from_date": inputs.startDate,
                    "to_date": inputs.endDate,
                    "reason": inputs.reason,
                    "name": name
                }
            }

            const response = await createShiftChangeApi({ body, navigation });
            console.log(response.data);
            if (response?.data?.result?.response) {
                // setB64_pdf(response?.data?.result?.response?.b64_pdf);
                console.log(response?.data?.result?.response);

                setLoading(false);
                Alert.alert("Confirmation", "Shift Requested Successfully")
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

                <Input
                    marginTop={24}
                    // placeholder={'c'}
                    editable={false}
                    value={inputs.currentShift}
                // onChangeText={(text) => handleInputChange('holidayType', text)}
                />
                {/* <Input
                    marginTop={24}
                    value={inputs.selectedShift}
                // onChangeText={(text) => handleInputChange('holidayType', text)}
                /> */}

                <TouchableView header={'Select Shift'}  text={inputs?.selectedShift?.name} handleModal={handleModalVisible} />

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
                loanTypes={data.shifts}
                header={'Select Shift'}
                onSelectLoanType={handleSelectShift} />
        </SafeAreaView>
    )
}

export default Shift