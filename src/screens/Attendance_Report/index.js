import { Alert, SafeAreaView, ScrollView, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Table from '../../components/Table';
import { getAttendanceApi } from '../../utilities/api/apiController';
import { useSelector } from 'react-redux';
import MonthYearPicker from '../../components/MonthPicker';
import { styles } from './styles';

const AttendanceReport = ({ navigation }) => {

    const tableHeader = ["Date", "Checkin", "Checkout", "  Status  "];

    const uid = useSelector((state) => state.signin.uid);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async (dateStr) => {

        setLoading(true);

        try {
            const body = {
                "jsonrps": 2.0,
                "params": {
                    "employee_id": uid,
                    "date": dateStr
                }
            };

            const response = await getAttendanceApi({ body, navigation });
            setData(response?.data?.result?.response);
            setLoading(false);

        } catch (error) {
            // console.error(error);
            Alert.alert(error)
        }
    };

    // useEffect(() => {
    //     fetchData();

    // }, [])

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView >

                <MonthYearPicker onDateChange={fetchData} />
                <Table header={tableHeader} data={data} attendance={true} loading={loading} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default AttendanceReport