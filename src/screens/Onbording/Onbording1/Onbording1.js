import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { SvgXml } from 'react-native-svg'
import { Frames } from '../../../assets/SvgIcons/Frames'
import { styles } from './styles'
import Theme from '../../../theme/theme'
import { FontStyle } from '../../../theme/FontStyle'
import { COLORS } from '../../../theme/colors'
import { NextButton } from '../../../components/Inputs'

const Onbording1 = ({ navigation }) => {
  return (
    <SafeAreaView style={Theme.SafeArea}>

      <View style={styles.frameView}>

        <SvgXml xml={Frames.onbording1} />

        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.skipView}
            onPress={() => navigation.navigate('Login')}>
            <Text style={[FontStyle.Regular14, { fontWeight: '500', color: COLORS.darkBlack }]}>Skip</Text>
          </TouchableOpacity>
        </View>

      </View>

      <View style={styles.bottomView}>
        <View style={styles.innerBottomView}>

          <View style={styles.textView}>
            <View style={styles.startedView}>
              <Text style={[FontStyle.Regular16, { fontWeight: '500', lineHeight: 19.198 }]}>Let's Get Started</Text>
            </View>

            <View style={{ marginTop: 8 }}>
              <Text style={[FontStyle.Regular12, { fontSize: 12.5, color: COLORS.SubHeadingColor }]}>Our goal is to ensure that you have everything you need to feel comfortable, confident, and ready to make an impact.</Text>
            </View>
          </View>
          <NextButton title={'Next'} onPress={() => navigation.navigate('Onbording2')} />
        </View>
      </View>

    </SafeAreaView >
  )
}

export default Onbording1