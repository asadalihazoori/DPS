import { Alert, SafeAreaView, ActivityIndicator, View, Text } from 'react-native'
import React, { useState } from 'react'
import { getEmployeePayslipApi } from '../../utilities/api/ApiLists/PayslipApiList'
import { styles } from './styles';
import PDF from '../../components/PDF';
import { useSelector } from 'react-redux';
import MonthYearPicker from '../../components/MonthPicker';

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

            const apiResponse = await getEmployeePayslipApi({ body, navigation });
            const response = apiResponse.data;

            // console.log(response?.data);
            setLoading(false);
            if (response?.result?.response?.b64_pdf) {
                setB64_pdf(response?.result?.response?.b64_pdf);
            }

            else if (response?.result?.status == 400) {
                Alert.alert("Sorry !", response?.result?.response)
            }

            else {
                Alert.alert(response?.error?.message, response?.error?.data?.message)
            }

        }

        catch (error) {
            Alert.alert(error);
            setLoading(false);

        }
    };


    return (

        <SafeAreaView style={styles.container}>
            <MonthYearPicker onDateChange={fetchData} />


            <View style={styles.innerContainer}>
                {loading ?
                    <ActivityIndicator size={'large'} /> :
                    b64_pdf &&
                    <PDF b64_pdf={b64_pdf}
                        title={`Payslip ( ${date} ).pdf`}

                    />
                }
            </View>

        </SafeAreaView>
    )
}

export default EmployeePayslip
