import { Text, SafeAreaView, Button, ActivityIndicator, View, Alert } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import Input from '../../components/Input'
import { useSelector } from 'react-redux'
import { createLoanApi } from '../../utilities/api/apiController'

const ApplyForMedicalClaims = ({ navigation }) => {

    const employee_data = useSelector((state) => state.employeeProfile.data);
    const [loading, setLoading] = useState(false);
    const [inputs, setInputs] = useState({
        remainingMedicalClaim: `Remaining Balance: ${employee_data.remaining_medical_claim}`,
        claimFor: "Mother",
        disease: "Gynae",
        claimAmount: null,
        date: new Date(),
        description: null,

    });

    const handleInputChange = (field, value) => {
        setInputs({
            ...inputs,
            [field]: value,
        })
    }

    const handleSubmit = async () => {

        setLoading(true);
        console.log(inputs);

        const dateObject = new Date(inputs.date);
        const formattedDate = dateObject.toISOString().split('T')[0];

        // try {
        //     const body = {
        //         "jsonrps": 2.0,
        //         "params": {
        //             "employee_id": employee_data.employee_id,
        //             "description": inputs.description,
        //             "claim_amount": inputs.amount,

        //             "claim_for": "Hajran Bibi",
        //             "relation_with": "mother",
        //             "id_of_selected": 3,

        //             "date_claim": formattedDate,
        //             "disease_type": 1,
        //         }

        //     }

        //     const response = await createLoanApi({ body, navigation });
        //     console.log(response.data);
        //     if (response?.data?.result?.response) {
        //         console.log(response?.data?.result?.response);

        //         setLoading(false);
        //         Alert.alert("Confirmation", "Medical Claim Requested Successfully")
        //     } else {
        //         Alert.alert(response.data.error.message, response.data.error.data.message);
        //         setLoading(false);

        //     }

        // } catch (error) {
        //     console.error(error);
        // }
    };

    return (
        <SafeAreaView style={styles.container}>

            <View style={{ marginBottom: 20 }} >

                <Input
                    marginTop={24}
                    editable={false}
                    value={inputs.remainingMedicalClaim}
                />

                <Input
                    marginTop={24}
                    // editable={false}
                    value={inputs.claimFor}
                />

                <Input
                    marginTop={24}
                    // editable={false}
                    value={inputs.disease}
                />



                <Input
                    marginTop={24}
                    placeholder={'Claim Amount'}

                    value={inputs.amount}

                    onChangeText={(text) => handleInputChange('claimAmount', text)} />


                <Input
                    marginTop={24}
                    // placeholder={'date'}
                    editable={false}

                    value={(inputs.date).toDateString()}

                    onChangeText={(text) => handleInputChange('date', text)} />
                <Input
                    marginTop={24}
                    placeholder={'Description'}

                    value={inputs.reason}

                    onChangeText={(text) => handleInputChange('description', text)} />

            </View>
            <Button onPress={handleSubmit} title='Submit' />

            {loading &&
                <ActivityIndicator size={'large'} />}

        </SafeAreaView>
    )
}

export default ApplyForMedicalClaims