import { Text, SafeAreaView, Button, ActivityIndicator, View, Alert } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import Input from '../../components/Input'
import { useSelector } from 'react-redux'
import { createLoanApi } from '../../utilities/api/apiController'
import RadioSelectionModal from '../../components/RadioSelectionModal'
import { TouchableOpacity } from 'react-native-gesture-handler'
import TouchableView from '../../components/TouchableView'

const ApplyForLoans = ({ navigation }) => {

    const employee_data = useSelector((state) => state.employeeProfile.data);

    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [inputs, setInputs] = useState({
        name: employee_data.name,
        designation: employee_data.job_title,
        cnic: employee_data.cnic,
        amount: null,
        type: null,
        date: new Date(),
        reason: null,

    });

    const handleInputChange = (field, value) => {
        setInputs({
            ...inputs,
            [field]: value,
        })
    }

    const handleSelectLoanType = (loanType) => {
        setInputs({
            ...inputs,
            ['type']: loanType,
        })
    }

    const handleModalVisible = () => {
        setModalVisible(true)
    }

    const handleSubmit = async () => {

        setLoading(true);
        console.log(inputs);

        const dateObject = new Date(inputs.date);
        const formattedDate = dateObject.toISOString().split('T')[0];

        try {
            const body = {
                "jsonrps": 2.0,
                "params": {
                    "employee_id": employee_data.employee_id,
                    "name": employee_data.name,
                    "cnic": employee_data.cnic, //
                    "designation": employee_data.job_title, // same
                    "loan_type": inputs.type?.id, //  1,3,4
                    "amount": inputs.amount,
                    "reason": inputs.reason,
                    "date": formattedDate
                }
            }

            const response = await createLoanApi({ body, navigation });
            console.log(response.data);
            if (response?.data?.result?.response) {
                console.log(response?.data?.result?.response);

                setLoading(false);
                Alert.alert("Confirmation", "Loan Applied Successfully")
            } else {
                Alert.alert(response.data.error.message, response.data.error.data.message);
                setLoading(false);

            }

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <SafeAreaView style={styles.container}>

            <View style={{ marginBottom: 20 }} >

                <Input
                    marginTop={24}
                    editable={false}
                    value={inputs.name}
                />

                <Input
                    marginTop={24}
                    editable={false}
                    value={inputs.designation}
                />

                <Input
                    marginTop={24}
                    editable={false}
                    value={inputs.cnic}
                />

                <Input
                    marginTop={24}
                    placeholder={'Amount'}
                    value={inputs.amount}
                    onChangeText={(text) => handleInputChange('amount', text)}
                />

                {/* <Input
                    marginTop={24}
                    editable={false}
                    value={inputs?.type?.name}
                /> */}

                {/* <TouchableOpacity>
                    <Text>{inputs?.type?.name}</Text>
                </TouchableOpacity> */}

                <TouchableView header={'Select Loan Type'} text={inputs?.type?.name} handleModal={handleModalVisible} />

                <Input
                    marginTop={24}
                    placeholder={'date'}
                    value={inputs.date.toDateString()}
                    onChangeText={(text) => handleInputChange('date', text)}
                />

                <Input
                    marginTop={24}
                    placeholder={'Reason'}
                    value={inputs.reason}
                    onChangeText={(text) => handleInputChange('reason', text)}
                />

            </View>

            <Button onPress={handleSubmit} title='Submit' />
            {/* <Button onPress={() => setModalVisible(true)} title='Submit' /> */}
            {/* <Button onPress={handleModalVisible} title='Submit' /> */}

            {loading &&
                <ActivityIndicator size={'large'} />}

            <RadioSelectionModal modalVisible={modalVisible} setModalVisible={setModalVisible}
                header={'Loan Type'}
                loanTypes={employee_data.loan_type_list}
                onSelectLoanType={handleSelectLoanType} />

        </SafeAreaView>
    )
}

export default ApplyForLoans