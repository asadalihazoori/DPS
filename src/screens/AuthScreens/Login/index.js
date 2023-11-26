import { SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import Theme from '../../../theme/theme';
import { AuthProvider } from '../../../context/AuthContext';
import Wrapper from './Wrapper';
import SplashScreen from 'react-native-splash-screen';

const Login = ({ navigation }) => {

    useEffect(() => {
        SplashScreen.hide();
    }, [])

    return (
        <SafeAreaView style={Theme.SafeArea}>
            <AuthProvider navigation={navigation}>
                <Wrapper navigation={navigation} />

            </AuthProvider>
        </SafeAreaView>
    )
}

export default Login