import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { styles } from './styles';
import { FontStyle } from '../../../theme/FontStyle';
import { SvgXml } from 'react-native-svg';
import { Frames } from '../../../assets/SvgIcons/Frames';
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
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>

            <View style={styles.headerView}>

                <View>
                    <Text style={FontStyle.Regular16}>Login Owner / Admin / HR</Text>
                </View>

                <View style={styles.headerCaption}>
                    <Text style={FontStyle.Regular12}>Login to continue the app</Text>
                </View>

            </View>

            <View style={styles.frameView}>
                <SvgXml xml={Frames.login} />
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
                    <Text style={[FontStyle.Regular16, styles.forgetText]}>Forget Password ?</Text>
                </TouchableOpacity>

                <NextButton
                    marginTop={34}
                    title={'Login'}
                    // onPress={() => { navigation.navigate('DrawerNavigation') }}
                    onPress={validate}
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
        </ScrollView>
    )
}

export default Wrapper