import { Alert, SafeAreaView, ActivityIndicator, View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { getEmployeePayslipApi } from '../../../utilities/api/ApiList/PayslipApiList'
import { styles } from './styles';
import PDF from '../../../components/PDF';
import { useSelector } from 'react-redux';
import MonthYearPicker from '../../../components/DateTimePicker/MonthPicker';
import Theme from '../../../theme/theme';
import GeneralHeader from '../../../components/Headers/GeneralHeader';
import PayslipCard from '../../../components/Cards/PayslipCard';
import { FontStyle } from '../../../theme/FontStyle';
import { SvgXml } from 'react-native-svg';
import { Icons } from '../../../assets/SvgIcons/Icons';

const EmployeePayslip = ({ navigation }) => {

    const uid = useSelector((state) => state.signin.uid);

    const [b64_pdf, setB64_pdf] = useState(null);
    const [loading, setLoading] = useState(false);
    const [date, setDate] = useState(null);



    const fetchData = async (dateStr) => {

        setDate(dateStr);
        setLoading(true);

        try {
            const body = {
                "jsonrps": 2.0,
                "params": {
                    "employee_id": uid,
                    "date": dateStr
                }
            };

            const response = await getEmployeePayslipApi({ body, navigation });
            console.log(response?.data?.result);
            setLoading(false)

            if (response?.data?.result?.response?.b64_pdf) {
                setB64_pdf(response?.data?.result?.response?.b64_pdf)
            }

            else if (response?.data?.result?.status == 400) {
                Alert.alert("EmployeeSlip not Found", response?.data?.result?.response)
            }

            else if (response?.data?.error) {
                Alert.alert(response?.data?.error?.message, response?.data?.error?.data?.message)
            }

            else if (response == 'AxiosError: Request failed with status code 404') {
                Alert.alert("Session Expired", `Please Login Again`);
            }

            else {
                Alert.alert("Internet Connection Failed", `${response?.data}`);
            }

        }

        catch (error) {
            Alert.alert(error);
            setLoading(false);

        }
    };


    return (

        <SafeAreaView style={Theme.SafeArea}>
            <GeneralHeader title={'Payslip'} navigation={navigation} />

            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>


                <View style={styles.detailsView}>

                    <View style={styles.detailTextView}>
                        <Text style={styles.detailstext}>Welcome to my payslip details </Text>
                    </View>

                    <TouchableOpacity style={styles.iconView}
                        activeOpacity={0.5}
                        onPress={() => navigation.navigate('PayslipDetails')}

                    >

                        <SvgXml xml={Icons.rightArrow1} />

                    </TouchableOpacity>

                </View>

                <View>
                    <PayslipCard />
                    <PayslipCard />
                    <PayslipCard />
                    <PayslipCard />
                    <PayslipCard />
                    <PayslipCard />
                    <PayslipCard />

                </View>




            </ScrollView>

        </SafeAreaView>
    )
}

export default EmployeePayslip
