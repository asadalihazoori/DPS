import { SafeAreaView, View, Text, ActivityIndicator } from 'react-native'
import inputValidation from '../../../utilities/Validations/YupValidate';
import { siginin } from '../../../redux/users/actions/signin';
import { LoginSchema } from '../../../utilities/Validations';
import Button from '../../../components/Buttons/Button';
import Input from '../../../components/InputField';
import { useDispatch } from 'react-redux';
import React, { useState } from 'react'
import { styles } from './styles';

const Login = ({ navigation }) => {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    const [inputs, setInputs] = useState({
        username: null,
        password: null,
        errors: null,
    });

    const handleOnChange = (field, value) => {
        setInputs({
            ...inputs,
            [field]: value,
            errors: {
                ...inputs.errors,
                [field]: false
            }
        })
    }


    const LoginSubmit = async () => {

        const result = await inputValidation(LoginSchema, inputs)

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

        await dispatch(siginin({
            navigation, inputs, setLoading
        }))
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1 }}>

                <Text style={styles.header}>Login</Text>

                <Input
                    marginTop={24}
                    value={inputs.username}
                    error={inputs?.errors?.username}
                    placeholder={'Enter Username'}
                    onChangeText={(text) => handleOnChange('username', text)}
                />

                <Input
                    marginTop={24}
                    value={inputs.password}
                    placeholder={'Enter Password'}
                    error={inputs?.errors?.password}
                    onChangeText={(text) => handleOnChange('password', text)}
                />

                <Button title={'Login'} handelSubmit={LoginSubmit} />

                {loading &&
                    <ActivityIndicator size={'large'} />
                }
            </View>
        </SafeAreaView>
    )
}

export default Login