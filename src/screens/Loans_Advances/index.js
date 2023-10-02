import { SafeAreaView, ScrollView, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getLoansApi } from '../../utilities/api/apiController';
import { useSelector } from 'react-redux';
import Table from '../../components/Table';
import { styles } from './styles';

const LoansAdvances = ({ navigation }) => {

    const headerData = ['Date', 'Type', 'Amount', 'Remaining', 'State'];
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

            const response = await getLoansApi({ body, navigation });
            setData(response?.data?.result?.response)
            setLoading(false);

        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        fetchData();
    }, [])

    return (
        <SafeAreaView style={styles.container} >
            <ScrollView >

                <Table header={headerData} data={data} loans={true} loading={loading} />
            </ScrollView>

        </SafeAreaView>
    )
}

export default LoansAdvances