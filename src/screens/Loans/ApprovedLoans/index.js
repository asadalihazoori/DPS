import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { SvgXml } from 'react-native-svg'
import { Frames } from '../../../assets/SvgIcons/Frames'
import { FontStyle } from '../../../theme/FontStyle'
import { COLORS } from '../../../theme/colors'

const ApprovedLoans = () => {
    return (
        <View style={styles.container}>

            <View style={styles.frameView}>
                <SvgXml xml={Frames.congratulation} />
                <Text style={styles.captionText}>That was too easy!</Text>
                <Text style={[FontStyle.Regular14_500, { color: COLORS.black, marginTop: 4 }]}>Congrats! You are eligible.</Text>
            </View>

        </View>
    )
}

export default ApprovedLoans