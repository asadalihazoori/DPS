import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import GeneralHeader from '../../../components/Headers/GeneralHeader'
import Theme from '../../../theme/theme'
import { styles } from './styles'
import { FontStyle } from '../../../theme/FontStyle'
import { COLORS } from '../../../theme/colors'
import { SvgXml } from 'react-native-svg'
import { Icons } from '../../../assets/SvgIcons/Icons'

const PayslipDetails = ({ navigation }) => {

    const Item = ({ title, amount }) => (
        <View style={styles.itemRow}>
            <View style={{ flex: 1 }}>
                <Text style={styles.rowText}>{title}</Text>

            </View>
            <View style={{ marginLeft: 36, }}>
                <Text style={styles.rowText}>{amount}</Text>

            </View>
        </View>
    )


    return (
        <SafeAreaView style={Theme.SafeArea}>
            <GeneralHeader title={'Payslip'} navigation={navigation} />

            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

                <View style={styles.buttonsView}>
                    <TouchableOpacity style={styles.button}
                        activeOpacity={0.5}>
                        <Text style={[FontStyle.Regular14, { color: COLORS.white }]}>Payslip</Text>

                        <View style={styles.iconView}>
                            <SvgXml xml={Icons.download1} />
                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, { backgroundColor: '#3BCA78' }]}
                        activeOpacity={0.5}>
                        <Text style={[FontStyle.Regular14, { color: COLORS.white, }]}>Statement</Text>
                        <View style={styles.iconView}>
                            <SvgXml xml={Icons.download1} />
                        </View>
                    </TouchableOpacity>
                </View>


                <View style={{ alignItems: 'center' }}>

                    <View style={styles.circle}>

                        <View style={styles.payView}>
                            <Text style={styles.payText}>55,000 Rs</Text>
                            <Text style={styles.payText}>Gross Pay</Text>

                        </View>
                    </View>
                </View>

                <View style={styles.detailsView}>
                    <Text style={styles.earningText}>Earning Details of November</Text>

                    <View style={styles.cardView}>

                        <Item title={"Basic Pay"} amount={'20,000'} />
                        <Item title={"HRA"} amount={'10,000'} />
                        <Item title={"Other Allowances"} amount={'10,000'} />
                        <Item title={"SPL Allowances"} amount={'15,000'} />
                        <Item title={"Deduction"} amount={'7,000'} />
                        <Item title={"Total Pay"} amount={'48,000'} />

                    </View>

                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default PayslipDetails