import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import GeneralHeader from '../../../components/Headers/GeneralHeader'
import Theme from '../../../theme/theme'
import { styles } from './styles'
import { COLORS } from '../../../theme/colors'
import { SvgXml } from 'react-native-svg'
import { Icons } from '../../../assets/SvgIcons/Icons'
import { NextButton } from '../../../components/Inputs'
import AttendanceCardNew from '../AttendanceCardNew'

const Punch = ({ navigation }) => {


    return (

        <View style={styles.container}>
            {/* <ScrollView style={styles.container} showsVerticalScrollIndicator={false}> */}


            <View style={{ marginBottom: 16 }}>
                <Text style={styles.dateText}>26 November 2023</Text>
            </View>

            <View style={[styles.cardView, { flexDirection: 'row', paddingVertical: 20, paddingHorizontal: 8, justifyContent: 'space-around' }]}>

                <View style={{ marginLeft: 0 }}>
                    {/* <SvgXml xml={Icons.attendanceCircle} /> */}


                    <View style={{ borderWidth: 4, borderRadius: 45, height: 90, width: 90, justifyContent: 'center', alignItems: 'center', borderColor: '#B2BBBB' }}>
                        <Text style={styles.percentageText}>68%</Text>
                        <Text style={styles.percentageText}>Completed</Text>

                    </View>
                </View>
                <View style={{ justifyContent: "space-between" }}>
                    <View style={{}}>

                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ justifyContent: 'center' }}>
                                <SvgXml xml={Icons.greyDot} />
                            </View>
                            <Text style={[styles.punchText, { textAlign: 'auto', marginLeft: 4 }]}>Hours Completed</Text>
                        </View>


                        <View style={{ marginLeft: 13 }}>
                            <Text style={[styles.punchText, { color: COLORS.darkBlack, textAlign: 'auto' }]}>6hrs</Text>
                        </View>

                    </View>

                    <View style={{}}>

                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ justifyContent: 'center' }}>
                                <SvgXml xml={Icons.orangeDot} />
                            </View>
                            <Text style={[styles.punchText, { textAlign: 'auto', marginLeft: 4 }]}>Remaining Hours</Text>
                        </View>

                        <View style={{ marginLeft: 13 }}>
                            <Text style={[styles.punchText, { color: COLORS.darkBlack, textAlign: 'auto' }]}>3hrs</Text>
                        </View>

                    </View>

                </View>
            </View>

            <AttendanceCardNew date={false} color={true} />
            <View style={styles.bottomView}>

                <NextButton title={'Punch-Out'} />
            </View>

            {/* </ScrollView> */}
        </View>
    )
}

export default Punch