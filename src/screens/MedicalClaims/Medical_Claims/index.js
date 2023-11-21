import { Alert, SafeAreaView, ScrollView, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getMedicalClaimsApi } from '../../../utilities/api/apiController';
import { useSelector } from 'react-redux';
import { TabActions } from '@react-navigation/native';
import Table from '../../../components/Table';
import { styles } from './styles';

const MedicalClaims = ({ navigation }) => {

    const headerData = ['Date', "   For   ", 'Name', "Amount", 'State'];

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const uid = useSelector((state) => state.signin.uid);

    const fetchData = async () => {

        try {
            const body = {
                "jsonrps": 2.0,
                "params": {
                    "employee_id": uid
                }
            };

            const response = await getMedicalClaimsApi({ body, navigation });
            // console.log(response?.data?.result?.response)

            setLoading(false);

            if (response?.data?.result?.status == 200) {
                setData(response?.data?.result?.response.data)

            }
            else if (response?.data?.error) {
                Alert.alert(response?.data?.error?.message, `${response?.data?.error?.data?.message}`);
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

    useEffect(() => {

        fetchData();

    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsHorizontalScrollIndicator={false}>

                <Table header={headerData} data={data} claims={true} loading={loading} />

            </ScrollView>
        </SafeAreaView>
    )
}

export default MedicalClaims