import { SafeAreaView, ActivityIndicator, View, Alert } from 'react-native'
import React, { useState } from 'react'
// import PDF from '../../../components/PDF';
import { styles } from './styles';
import { getTardinessReportApi } from '../../../utilities/api/apiController';
import { useSelector } from 'react-redux';
// import MonthYearPicker from '../../../components/DateTimePicker/MonthPicker';

const TardinesReport = ({ navigation }) => {

    const uid = useSelector((state) => state.signin.uid);

    const [b64_pdf, setB64_pdf] = useState(null);
    const [loading, setLoading] = useState(false);
    const [date, setDate] = useState(null);


    const fetchData = async (tardinesDate) => {
        console.log(tardinesDate);

        setDate(tardinesDate)

        setLoading(true);

        try {
            const body = {
                "jsonrps": 2.0,
                "params": {
                    "employee_id": uid,
                    "form": `${tardinesDate}-01`,
                    "to": `${tardinesDate}-30`,
                }
            };

            const response = await getTardinessReportApi({ body, navigation });
            // console.log(response);

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
            console.error(error);
        }
    };

    // useEffect(() => {
    //     fetchData();
    // }, [])

    return (
        <SafeAreaView style={styles.container}>
            {/* <MonthYearPicker onDateChange={fetchData} tardines={true} /> */}


            <View style={styles.innerContainer}>
                {/* {loading ?
                    <ActivityIndicator size={'large'} /> :
                    b64_pdf &&
                    <PDF b64_pdf={b64_pdf}
                        title={`Tardines Report ( ${date} ).pdf`} />
                } */}
            </View>

        </SafeAreaView>
    )
}

export default TardinesReport

