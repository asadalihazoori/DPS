import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import { SvgXml } from 'react-native-svg'
import SplashScreen from 'react-native-splash-screen'
import Theme from '../../theme/theme'
import TouchableButton from '../../components/Buttons/TouchableButton'
import { Frames } from '../../assets/SvgIcons/Frames'
import { FontStyle } from '../../theme/FontStyle'
import { NextButton } from '../../components/Inputs'
import { styles } from './styles'

const Onbording2 = ({ navigation }) => {

    useEffect(() => {
        SplashScreen.hide();
    }, [])

    return (
        <SafeAreaView style={Theme.SafeArea}>

            <View style={styles.container}>

                <View style={styles.mainView}>

                    <View style={[styles.frameView, { marginTop: 115 }]}>
                        <SvgXml xml={Frames.Onbording2} />
                    </View>

                    <View style={styles.textView}>
                        <Text style={FontStyle.Regular20}>Let’s Get Started</Text>
                        <Text style={[FontStyle.Regular12, { textAlign: 'center', marginTop: 12 }]}>Our goal is to ensure that you have everything you need to feel comfortable, confident, and ready to make an impact.</Text>
                    </View>

                </View>

                <View style={styles.bottomView}>
                    <NextButton title={'Let’s Work'} onPress={() => navigation.navigate('Login')} />
                </View>

            </View>

        </SafeAreaView >
    )
}

export default Onbording2