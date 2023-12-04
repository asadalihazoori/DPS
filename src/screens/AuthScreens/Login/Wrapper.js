import { View, Text, ScrollView, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React, { useContext } from 'react'
import { styles } from './styles';
import { FontStyle } from '../../../theme/FontStyle';
import { NextButton, TextInputAuth } from '../../../components/Inputs';
import { COLORS } from '../../../theme/colors';
import { AuthContext } from '../../../context/AuthContext';
import Loader from '../../../components/Loader';
import { Checkbox } from 'react-native-paper';

const Wrapper = ({ navigation }) => {

    const {
        loading,
        inputs,
        validate,
        handleOnChange,
        setInputs,

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
                    label={'Username'}
                    placeholder={'Enter username'}
                    value={inputs.username}
                    error={inputs?.errors?.username}
                    onChangeText={(text) => handleOnChange('username', text)}
                />

                <TextInputAuth
                    label={'Password'}
                    placeholder={'Enter password'}
                    value={inputs.password}
                    marginTop={8}
                    error={inputs?.errors?.password}
                    onChangeText={(text) => handleOnChange('password', text)}
                    password={true}
                />

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderColor: COLORS.black,
                    // borderWidth: 1,
                    marginTop: 10
                }}>
                    <Text style={[FontStyle.Regular14_500, { fontSize: 16, marginRight: 4 }]}>{'keep me Logged In'}</Text>

                    <Checkbox
                        status={inputs.loggedIn ? 'checked' : 'unchecked'}
                        onPress={() => {
                            // setChecked(!checked);
                            setInputs({
                                ...inputs,
                                ['loggedIn']: !inputs.loggedIn,
                            })
                        }}

                        color={COLORS.secondaryColor}
                        uncheckedColor={COLORS.primaryColor}
                    />
                </View>

                {/* <TouchableOpacity style={styles.forgetView}>
                    <Text style={[FontStyle.Regular16_500, styles.forgetText]}>Forget Password ?</Text>
                </TouchableOpacity> */}


            </View>
            <View style={styles.bottomView}>
                <NextButton
                    title={'Login'}
                    onPress={validate}
                // onPress={() => { navigation.navigate('DrawerNavigation') }}
                />
            </View>

            <Loader loading={loading} title={'Signing In...'} />

            {/* <Spinner
                visible={loading}
                color={COLORS.primaryColor}
            /> */}
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
        </KeyboardAvoidingView >
    )
}

export default Wrapper