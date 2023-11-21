import { SafeAreaView } from 'react-native'
import React from 'react'
import Theme from '../../../theme/theme';
import { AuthProvider } from '../../../context/AuthContext';
import Wrapper from './Wrapper';

const Login = ({ navigation }) => {

    return (
        <SafeAreaView style={Theme.SafeArea}>
            <AuthProvider navigation={navigation}>
                <Wrapper />

            </AuthProvider>
        </SafeAreaView>
    )
}

export default Login