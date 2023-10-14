import { Alert, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles';
import Table from '../../components/Table';
import { getHolidayNewsApi } from '../../utilities/api/apiController';

const HolidayNews = ({ navigation }) => {

    const headerData = ["Holiday", "        Day        ", "Date"];

    // const [currentYear, setCurrentYear] = useState(2022);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const body = {
                "jsonrps": 2.0,
                "params": {
                    // "year": currentYear
                    "year": new Date().getFullYear()
                }
            };

            const response = await getHolidayNewsApi({ body, navigation });

            setLoading(false);
            if (response?.data?.result?.status == 200) {
                setData(response?.data?.result?.response)
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
            <ScrollView >

                <Table header={headerData} data={data} loading={loading} holiday={true} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default HolidayNews