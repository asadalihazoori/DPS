import { SafeAreaView, ActivityIndicator, View, Alert, ScrollView } from 'react-native'
import { updatePasswordApi } from '../../../utilities/api/apiController'
import inputValidation from '../../../utilities/Validations/YupValidate'
import { ChangePasswordSchema } from '../../../utilities/Validations'
import Button from '../../../components/Buttons/Button'
import Input from '../../../components/InputField'
import { useSelector } from 'react-redux'
import React, { useState } from 'react'
import { styles } from './styles'

const ChangePassword = ({ navigation }) => {

    const uid = useSelector((state) => state.signin.uid);
    const [loading, setLoading] = useState(false);
    const [inputs, setInputs] = useState({
        password: null,
        confirmPassword: null,
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

        const result = await inputValidation(ChangePasswordSchema, inputs)

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
                    "employee_id": uid,
                    "password": inputs.password
                }
            }

            const response = await updatePasswordApi({ body, navigation });
            setLoading(false);

            if (response?.data?.result?.response) {
                Alert.alert("Confirmation", "Password Successfully Updated");
                navigation.replace('Login');
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
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={{ marginBottom: 20 }} >

                    <Input
                        marginTop={24}
                        placeholder={'Password'}
                        value={inputs.password}
                        error={inputs?.errors?.password}
                        onChangeText={(text) => handleInputChange('password', text)} />

                    <Input
                        marginTop={24}
                        placeholder={'Confirm Password'}
                        value={inputs.confirmPassword}
                        error={inputs?.errors?.confirmPassword}
                        onChangeText={(text) => handleInputChange('confirmPassword', text)} />

                </View>
                <Button title='Submit' handelSubmit={validate} />

                {loading &&
                    <ActivityIndicator size={'large'} />}

            </ScrollView>
        </SafeAreaView>
    )
}

export default ChangePassword