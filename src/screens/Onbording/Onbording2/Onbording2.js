import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import Theme from '../../../theme/theme'
import { styles } from './styles'
import { Frames } from '../../../assets/SvgIcons/Frames'
import { SvgXml } from 'react-native-svg'
import { FontStyle } from '../../../theme/FontStyle'
import { COLORS } from '../../../theme/colors'
import { NextButton } from '../../../components/Inputs'

const Onbording2 = ({ navigation }) => {
    return (
        <SafeAreaView style={Theme.SafeArea}>

            <View style={styles.frameView}>
                <View style={{ alignItems: 'center' }}>
                    <SvgXml xml={Frames.onbording2} />
                </View>
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
                            <Text style={[FontStyle.Regular16, { fontWeight: '500', lineHeight: 19.198 }]}>Keep healthy work-life balance!</Text>
                        </View>

                        <View style={{ marginTop: 8 }}>
                            <Text style={[FontStyle.Regular12, { fontSize: 12.5, color: COLORS.SubHeadingColor }]}>“Balance is not better time management, but better boundary management. Balance means making choices and enjoying those choices."</Text>
                        </View>
                    </View>
                    <NextButton title={'Lets Work'} onPress={() => navigation.navigate('Login')} />
                </View>

            </View>

        </SafeAreaView>
    )
}

export default Onbording2