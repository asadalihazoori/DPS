import { SafeAreaView, ScrollView, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getMedicalClaimsApi } from '../../utilities/api/apiController';
import { useSelector } from 'react-redux';
import { TabActions } from '@react-navigation/native';
import Table from '../../components/Table';
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
            setData(response?.data?.result?.response.data)
            setLoading(false);
            console.log(response?.data?.result?.response)

        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {

        fetchData();

    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView >

                <Table header={headerData} data={data} claims={true} loading={loading} />

            </ScrollView>
        </SafeAreaView>
    )
}

export default MedicalClaims