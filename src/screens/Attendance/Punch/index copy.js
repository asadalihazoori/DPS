import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import GeneralHeader from '../../../components/Headers/GeneralHeader'
import Theme from '../../../theme/theme'
import { styles } from './styles'
import { COLORS } from '../../../theme/colors'
import { SvgXml } from 'react-native-svg'
import { Icons } from '../../../assets/SvgIcons/Icons'

const Punch = ({ navigation }) => {

    const Item = () => (
        <View style={styles.itemRow}>

            <View style={{}}>

                <Text style={styles.punchText}>Punch-In</Text>
                <Text style={styles.timeText}>8:30 AM</Text>
            </View>

            <View style={{}}>
                <Text style={styles.punchText}>Punch-Out</Text>
                <Text style={styles.timeText}>9:30 PM</Text>
            </View>

        </View>
    )


    return (
        <SafeAreaView style={Theme.SafeArea}>
            <GeneralHeader title={'My Attendance'} navigation={navigation} />

            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1, paddingVertical: 8 }}>
                        <Text style={styles.welcomeText}>Welcome To</Text>
                        <Text style={styles.nameText}>Jhon Doe</Text>

                    </View>
                    <View style={styles.weekView}>

                        <Text style={styles.weekText}>Last Week</Text>
                        <View style={{ marginLeft: 8 }}>
                            <SvgXml xml={Icons.dropDown} />

                        </View>

                    </View>

                </View>

                <View style={{ marginVertical: 24, flexDirection: 'row', }}>
                    <Text style={[styles.dateText, { color: COLORS.orange }]}>20</Text>
                    <Text style={[styles.dateText, { color: COLORS.darkBlack }]}> October,2023</Text>
                </View>

                <View style={[styles.cardView, { flexDirection: 'row', paddingVertical: 16 }]}>

                    <View style={{ flex: 1, marginLeft: 28, }}>
                        {/* <SvgXml xml={Icons.attendanceCircle} /> */}


                        <View style={{ borderWidth: 4, borderRadius: 100, height: 85, width: 85, justifyContent: 'center', alignItems: 'center', borderColor: '#B2BBBB' }}>
                            <Text style={styles.percentageText}>68%</Text>
                            <Text style={styles.percentageText}>Completed</Text>

                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ marginTop: 4 }}>

                                <SvgXml xml={Icons.greyDot} />
                            </View>
                            <View style={{ marginLeft: 4 }}>
                                <Text style={[styles.punchText, { textAlign: 'auto' }]}>Hours Completed</Text>
                                <Text style={[styles.punchText, { color: COLORS.darkBlack, textAlign: 'auto' }]}>6hrs</Text>
                            </View>

                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ marginTop: 4 }}>
                                <SvgXml xml={Icons.orangeDot} />
                            </View>
                            <View style={{ marginLeft: 4 }}>
                                <Text style={[styles.punchText, { textAlign: 'auto' }]}>Remaining Hours</Text>
                                <Text style={[styles.punchText, { color: COLORS.darkBlack, textAlign: 'auto' }]}>3hrs</Text>
                            </View>

                        </View>

                    </View>
                </View>

                <Text style={styles.timeSheetText}>Timesheet</Text>

                <View style={styles.buttonsView}>

                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => navigation.navigate('Location')}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Punch-In</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={[styles.button, { backgroundColor: COLORS.grey4 }]}>
                        <Text style={[styles.buttonText, { color: COLORS.black }]}>Punch-Out</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.cardView}>

                    <Item />
                    <Item />
                    <Item />

                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default Punch