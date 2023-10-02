import { SafeAreaView, View, Text, Button, TextInput, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles';
import { siginin } from '../../redux/users/actions/signin';
import { useDispatch } from 'react-redux';

const Login = ({ navigation }) => {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    const [inputs, setInputs] = useState({
        username: null,
        password: null,
    });

    const handleOnChange = (inputType, inputText) => {
        setInputs(prevState => ({ ...prevState, [inputType]: inputText }))
    }

    const handleLogin = async () => {

        setLoading(true);

        await dispatch(siginin({
            navigation, inputs
        }))

        setLoading(false);

    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1 }}>


                <Text style={styles.header}> Login</Text>

                <TextInput
                    onChangeText={(text) => handleOnChange('username', text)}
                    value={inputs.username}
                    placeholder='Enter Username'
                    style={styles.inputField}
                />

                <TextInput
                    onChangeText={(text) => handleOnChange('password', text)}
                    value={inputs.password}
                    placeholder='Enter Password'
                    style={styles.inputField}
                />

                <Button onPress={handleLogin} title='Login' />
                <View style={{ marginTop: 30 }}></View>
                {loading &&
                    <ActivityIndicator size={'large'} />
                }
            </View>
        </SafeAreaView>
    )
}

export default Login