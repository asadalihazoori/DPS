import { View, Text, ScrollView, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React, { useContext } from 'react'
import { styles } from './styles';
import { FontStyle } from '../../../theme/FontStyle';
import { NextButton, TextInputAuth } from '../../../components/Inputs';
import Spinner from 'react-native-loading-spinner-overlay';
import { COLORS } from '../../../theme/colors';
import { AuthContext } from '../../../context/AuthContext';

const Wrapper = ({ navigation }) => {

    const {
        loading,
        inputs,
        validate,
        handleOnChange,

    } = useContext(AuthContext);

    return (

        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            {/* <View style={styles.container}> */}

            {/* <ScrollView showsVerticalScrollIndicator={false} > */}

            <View style={styles.headerView}>

                <View>
                    <Text style={FontStyle.Regular24}>Login</Text>
                </View>

                <View style={styles.headerCaption}>
                    <Text style={[FontStyle.Regular12, { color: COLORS.grey1 }]}>Please login with your email and password to continue</Text>
                </View>

            </View>

            <View style={styles.mainView}>

                <TextInputAuth
                    label={'Username or Email'}
                    placeholder={'Email'}
                    value={inputs.username}
                    error={inputs?.errors?.username}
                    onChangeText={(text) => handleOnChange('username', text)}
                />

                <TextInputAuth
                    label={'Password'}
                    placeholder={'Password'}
                    value={inputs.password}
                    marginTop={8}
                    error={inputs?.errors?.password}
                    onChangeText={(text) => handleOnChange('password', text)}
                />

                <TouchableOpacity style={styles.forgetView}>
                    <Text style={[FontStyle.Regular16_500, styles.forgetText]}>Forget Password ?</Text>
                </TouchableOpacity>


            </View>
            <View style={styles.bottomView}>
                <NextButton
                    title={'Login'}
                    onPress={validate}
                    // onPress={() => { navigation.navigate('DrawerNavigation') }}
                />
            </View>

            <Spinner
                visible={loading}
                color={COLORS.primaryColor}
            />
            {/* <Input
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
                } */}
            {/* </ScrollView> */}
            {/* </View> */}
        </KeyboardAvoidingView>
    )
}

export default Wrapper