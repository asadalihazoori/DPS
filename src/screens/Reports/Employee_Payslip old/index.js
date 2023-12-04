import { Alert, SafeAreaView, ActivityIndicator, View, Text } from 'react-native'
import React, { useState } from 'react'
import { getEmployeePayslipApi } from '../../../utilities/api/ApiList/PayslipApiList'
import { styles } from './styles';
import PDF from '../../../components/PDF';
import { useSelector } from 'react-redux';
import MonthYearPicker from '../../../components/DateTimePicker/MonthPicker';

const EmployeePayslipOld = ({ navigation }) => {

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
            // console.log(response);
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

export default EmployeePayslipOld
