import { View, Text, ScrollView, TouchableOpacity, KeyboardAvoidingView, Image } from 'react-native'
import React, { useContext } from 'react'
import { styles } from './styles';
import { FontStyle } from '../../../theme/FontStyle';
import { NextButton, TextInputAuth } from '../../../components/Inputs';
import { COLORS } from '../../../theme/colors';
import { AuthContext } from '../../../context/AuthContext';
import Loader from '../../../components/Loader';
import CustomCheckBox from '../../../components/CheckBox';
import { Icons } from '../../../assets/SvgIcons/Icons';
import { SvgXml } from 'react-native-svg';
import { Frames } from '../../../assets/SvgIcons/Frames';

const Wrapper = ({ navigation }) => {

    const {
        loading,
        inputs,
        validate,
        handleOnChange,
        setInputs,

    } = useContext(AuthContext);

    return (

        // <KeyboardAvoidingView
        //     behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        //     style={styles.container}
        // >

        //     <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}
            contentContainerStyle={{ justifyContent: 'space-between', flexGrow: 1 }} >


            <View style={{
                alignItems: 'center',
                // paddingVertical: 60,\
                justifyContent: 'center',
                // borderWidth: 1,
                height: 365,

                backgroundColor: 'rgba(233, 228, 255, 0.55)',
                borderBottomLeftRadius: 33,
                borderBottomRightRadius: 33,


            }}>
                {/* <Image source={require('../../../assets/logo.png')} /> */}
                <SvgXml xml={Frames.logo} />
                <Text style={[FontStyle.Regular24, { marginTop: 12 }]}>Human Resource</Text>
            </View>

            {/* <View style={styles.headerView}>

                <View>
                    <Text style={FontStyle.Regular24}>Login</Text>
                </View>

                <View style={styles.headerCaption}>
                    <Text style={[FontStyle.Regular12, { color: COLORS.grey1 }]}>Please login with your email and password to continue</Text>
                </View>

            </View> */}

            <View style={styles.mainView}>

                <TextInputAuth
                    label={'Username'}
                    placeholder={'Enter username'}
                    value={inputs.username}
                    error={inputs?.errors?.username}
                    onChangeText={(text) => handleOnChange('username', text)}
                    icon={Icons.email}
                />

                <TextInputAuth
                    label={'Password'}
                    placeholder={'Enter password'}
                    value={inputs.password}
                    marginTop={8}
                    error={inputs?.errors?.password}
                    onChangeText={(text) => handleOnChange('password', text)}
                    password={true}
                    icon={Icons.password}
                />

                <View>
                    <CustomCheckBox
                        status={inputs.loggedIn}
                        onPress={() => {
                            setInputs({
                                ...inputs,
                                ['loggedIn']: !inputs.loggedIn,
                            })
                        }} />
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

            {/* </View> */}
            {/* </KeyboardAvoidingView > */}
        </ScrollView>
    )
}

export default Wrapper