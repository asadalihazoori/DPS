import { SafeAreaView, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getLeaveStatusApi } from '../../utilities/api/apiController';
import { useDispatch, useSelector } from 'react-redux';
import Table from '../../components/Table';
import { styles } from './styles';
import { getLeavesStatus } from '../../redux/leaves/actions/getLeavesStatus';

const LeaveStatus = ({ navigation }) => {

    const tableHeader = ["Type", "Allocated", "Availed", "Remaining"]

    // const [data, setData] = useState([]);
    const leaves = useSelector((state) => state.leaveStatus.leaves);
    const uid = useSelector((state) => state.signin.uid);
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true);

    const fetchData = async () => {

        try {
            const body = {
                "jsonrps": 2.0,
                "params": {
                    "employee_id": uid
                }
            };

            const response = await getLeaveStatusApi({ body, navigation });
            console.log(response?.data?.result?.response?.leaves);
            setData(response?.data?.result?.response?.leaves)
            setLoading(false);

        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        // fetchData();

        dispatch(getLeavesStatus({
            uid,
            navigation
        }))
            .then(() => {
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error:", error);
                setLoading(false);
            });



    }, [])

    return (
        <SafeAreaView style={styles.container} >
            <Table header={tableHeader}
                data={leaves}
                // data={data} //data
                leaves={true} loading={loading} navigation={navigation} />



        </SafeAreaView>
    )
}

export default LeaveStatus