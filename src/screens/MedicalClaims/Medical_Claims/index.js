import { Alert, SafeAreaView, ScrollView, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getMedicalClaimsApi } from '../../../utilities/api/apiController';
import { useSelector } from 'react-redux';
import { TabActions } from '@react-navigation/native';
import Table from '../../../components/Table';
import { styles } from './styles';
import LoanCard from '../../../components/Cards/LoanCard';
import MedicalClaimCard from '../../../components/Cards/MedicalClaimCard';

const MedicalClaims = ({ navigation }) => {

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
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>

            {
                data?.map((item, index) => {
                    return (
                        <MedicalClaimCard key={index} data={item} />
                    )
                })
            }

        </ScrollView>
    )
}

export default MedicalClaims