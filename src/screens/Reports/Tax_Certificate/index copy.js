import { SafeAreaView, Text, ActivityIndicator, View, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import PDF from '../../../components/PDF';
import { styles } from './styles';
import { getTaxCertificateApi } from '../../../utilities/api/apiController';
import { useSelector } from 'react-redux';
import MonthYearPicker from '../../../components/DateTimePicker/MonthPicker';

const TaxCertificate = ({ navigation }) => {

    const [b64_pdf, setB64_pdf] = useState(null);
    const [selectedYear, setYear] = useState(null);
    const [loading, setLoading] = useState(false);

    const uid = useSelector((state) => state.signin.uid);

    const fetchData = async (taxYear) => {
        setYear(taxYear);
        setLoading(true);

        try {
            const body = {
                "jsonrps": 2.0,
                "params": {
                    "employee_id": uid,
                    "year": taxYear
                }
            };

            const response = await getTaxCertificateApi({ body, navigation });

            setLoading(false)

            if (response?.data?.result?.response?.b64_pdf) {
                setB64_pdf(response?.data?.result?.response?.b64_pdf)
            }

            else if (response?.data?.error) {
                Alert.alert(response?.data?.error?.message, response?.data?.error?.data?.message)
            }

            else if (response == 'AxiosError: Request failed with status code 404') {
                Alert.alert("Session Expired", `Please Login Again`);
            }

            else {
                Alert.alert("Internet Connection Failed", `${response}`);
            }


        } catch (error) {
            Alert.alert(error);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <MonthYearPicker onDateChange={fetchData} tax={true} />


            <View style={styles.innerContainer}>
                {loading ?

                    <ActivityIndicator size={'large'} /> :
                    b64_pdf &&
                    <PDF b64_pdf={b64_pdf}
                        title={`Tax Certificate ( ${selectedYear} ).pdf`} />

                }
            </View>

        </SafeAreaView>
    )
}

export default TaxCertificate
