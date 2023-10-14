import React, { useState } from 'react'
import { SafeAreaView, ActivityIndicator, View, Alert, ScrollView } from 'react-native'
import RadioSelectionModal from '../../../components/RadioSelectionModal'
import inputValidation from '../../../utilities/Validations/YupValidate'
import TouchableView from '../../../components/Buttons/TouchableView'
import { createLoanApi } from '../../../utilities/api/apiController'
import { LoanRequestSchema } from '../../../utilities/Validations'
import Button from '../../../components/Buttons/Button'
import Input from '../../../components/InputField'
import { useSelector } from 'react-redux'
import { styles } from './styles'

const ApplyForLoans = ({ navigation }) => {

    const employee_data = useSelector((state) => state.employeeProfile.data);
    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    const [inputs, setInputs] = useState({
        name: employee_data?.name,
        designation: employee_data?.job_title,
        cnic: employee_data?.cnic,
        amount: null,
        type: null,
        date: new Date(),
        reason: null,
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

    const validate = async () => {

        const result = await inputValidation(LoanRequestSchema, inputs)

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

        const dateObject = new Date(inputs.date);
        const formattedDate = dateObject.toISOString().split('T')[0];

        try {
            const body = {
                "jsonrps": 2.0,
                "params": {
                    "employee_id": employee_data.employee_id,
                    "name": employee_data.name,
                    "cnic": employee_data.cnic,
                    "designation": employee_data.job_title, // same
                    "loan_type": inputs.type?.id, //  1,3,4
                    "amount": inputs.amount,
                    "reason": inputs.reason,
                    "date": formattedDate,
                }
            }

            const response = await createLoanApi({ body, navigation });
            console.log(response.data);
            setLoading(false);

            if (response?.data?.result?.response) {
                Alert.alert("Confirmation", "Loan Applied Successfully")

            } else if (response?.data?.error) {
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

                <View style={{ marginBottom: 20 }} >

                    <Input
                        marginTop={12}
                        editable={false}
                        value={inputs.name}
                    />

                    <Input
                        marginTop={12}
                        editable={false}
                        value={inputs.designation}
                    />

                    <Input
                        marginTop={12}
                        editable={false}
                        value={inputs.cnic}
                    />

                    <Input
                        marginTop={12}
                        placeholder={'Amount'}
                        value={inputs.amount}
                        error={inputs?.errors?.amount}
                        keyboardType={'number-pad'}
                        onChangeText={(text) => handleInputChange('amount', text)}
                    />

                    <TouchableView
                        header={'Select Loan Type'}
                        text={inputs?.type?.name}
                        handleModal={() => setModalVisible(true)}
                        error={inputs?.errors?.type}
                    />

                    <Input
                        marginTop={12}
                        editable={false}
                        value={inputs.date.toDateString()}
                        onChangeText={(text) => handleInputChange('date', text)}
                    />

                    <Input
                        marginTop={12}
                        placeholder={'Reason'}
                        value={inputs.reason}
                        error={inputs?.errors?.reason}
                        onChangeText={(text) => handleInputChange('reason', text)}
                    />

                </View>

                <Button title={'Submit'} handelSubmit={validate} />

                {loading &&
                    <ActivityIndicator size={'large'} />}

                <RadioSelectionModal
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible}
                    header={'Loan Type'}
                    data={employee_data?.loan_type_list}
                    onChangeSelection={(loanType) => handleInputChange('type', loanType)}
                />

            </ScrollView>
        </SafeAreaView>
    )
}

export default ApplyForLoans