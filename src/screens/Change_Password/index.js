import { Text, SafeAreaView, Button, ActivityIndicator, View, Alert } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import Input from '../../components/Input'
import { useSelector } from 'react-redux'
import { updatePasswordApi } from '../../utilities/api/apiController'

const ChangePassword = ({ navigation }) => {

    const employee_data = useSelector((state) => state.employeeProfile.data);
    const [loading, setLoading] = useState(false);
    const [inputs, setInputs] = useState({
        password: null,
        confirmPassword: null

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

        try {
            const body = {
                "jsonrps": 2.0,
                "params": {
                    "employee_id": employee_data.employee_id,
                    "password": inputs.password
                }
            }

            const response = await updatePasswordApi({ body, navigation });
            console.log(response.data);
            if (response?.data?.result?.response) {
                console.log(response?.data?.result?.response);

                setLoading(false);
                Alert.alert("Confirmation", "Password Successfully Updated");

                navigation.replace('Login');
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
                    placeholder={'Password'}
                    value={inputs.password}
                    onChangeText={(text) => handleInputChange('password', text)} />

                <Input
                    marginTop={24}
                    placeholder={'Confirm Password'}

                    value={inputs.confirmPassword}

                    onChangeText={(text) => handleInputChange('confirmPassword', text)} />

            </View>
            <Button onPress={handleSubmit} title='Submit' />

            {loading &&
                <ActivityIndicator size={'large'} />}

        </SafeAreaView>
    )
}

export default ChangePassword