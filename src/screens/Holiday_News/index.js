import { SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles';
import Table from '../../components/Table';
import { getHolidayNewsApi } from '../../utilities/api/apiController';

const HolidayNews = ({ navigation }) => {

    const headerData = ["Holiday", "        Day        ", "Date"];

    const [currentYear, setCurrentYear] = useState(2023);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const body = {
                "jsonrps": 2.0,
                "params": {
                    "year": currentYear
                }
            };

            const response = await getHolidayNewsApi({ body, navigation });
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
        <SafeAreaView style={styles.container}>
            <ScrollView >

                <Table header={headerData} data={data} loading={loading} holiday={true} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default HolidayNews