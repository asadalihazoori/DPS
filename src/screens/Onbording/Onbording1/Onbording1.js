import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { SvgXml } from 'react-native-svg'
import { Frames } from '../../../assets/SvgIcons/Frames'
import { styles } from './styles'
import Theme from '../../../theme/theme'
import { FontStyle } from '../../../theme/FontStyle'
import { COLORS } from '../../../theme/colors'
import { NextButton } from '../../../components/Inputs'
import SplashScreen from 'react-native-splash-screen'
import TouchableButton from '../../../components/Buttons/TouchableButton'

const Onbording1 = ({ navigation }) => {

  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <SafeAreaView style={Theme.SafeArea}>

      <View style={styles.container}>

        <View style={styles.skipView}>
          <TouchableButton
            title={'Skip'}
            onPress={() => { }}
            container={styles.skipButton} />
        </View>

        <View style={styles.mainView}>

          <View style={styles.frameView}>
            <SvgXml xml={Frames.Onbording1} />
          </View>

          <View style={styles.textView}>
            <Text style={FontStyle.Regular20}>Healthy work-life balance!</Text>
            <Text style={[FontStyle.Regular12, { textAlign: 'center', marginTop: 12 }]}>Our goal is to ensure that you have everything you need to feel comfortable, confident, and ready to make an impact.</Text>
          </View>

        </View>

        <View style={styles.bottomView}>
          <NextButton title={'Next'} onPress={() => navigation.navigate('Onbording2')} />
        </View>

      </View>

    </SafeAreaView >
  )
}

export default Onbording1