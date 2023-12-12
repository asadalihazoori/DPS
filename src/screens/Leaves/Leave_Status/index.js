import { FlatList, SafeAreaView, ScrollView, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getLeaveStatusApi } from '../../../utilities/api/apiController';
import { useDispatch, useSelector } from 'react-redux';
import Table from '../../../components/Table';
import { getLeavesStatus } from '../../../redux/leaves/actions/getLeavesStatus';
import { styles } from './styles';
import LeaveTable from '../../../components/LeaveTable';
import { FontStyle } from '../../../theme/FontStyle';
import { COLORS } from '../../../theme/colors';
import LeaveBalanceCard from '../../../components/Cards/LeaveBalanceCard';

const LeaveStatus = ({ navigation }) => {


    // const leaves = useSelector((state) => state.leaveStatus.leaves);
    const leaves = [
        {
            "leaves_type": "Annual Leaves",
            "leave_remaining": 14.0,
            "total_leaves": 14.0,
            "leave_availed": 0.0
        },
        {
            "leaves_type": "Sick Leaves",
            "leave_remaining": 12.0,
            "total_leaves": 12.0,
            "leave_availed": 0.0
        },
        {
            "leaves_type": "Casual Leaves",
            "leave_remaining": 10.0,
            "total_leaves": 10.0,
            "leave_availed": 0.0
        },
        {
            "leaves_type": "CPL",
            "leave_remaining": 3.0,
            "total_leaves": 3.0,
            "leave_availed": 0.0
        },
        {
            "leaves_type": "CPL (Non-Encashable)",
            "leave_remaining": 0.0,
            "total_leaves": 0.0,
            "leave_availed": 0.0
        }
    ];
    const uid = useSelector((state) => state.signin.uid);
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false); //true

    const fetchData = async () => {

        try {
            const body = {
                "jsonrps": 2.0,
                "params": {
                    "employee_id": uid
                }
            };

            const response = await getLeaveStatusApi({ body, navigation });
            // console.log(response?.data?.result?.response?.leaves);
            setLoading(false);


            if (response?.data?.result?.status == 200) {
                setData(response?.data?.result?.response?.leaves)

            }
            // else if (response?.data?.error) {
            //     Alert.alert(response?.data?.error?.message, `${response?.data?.error?.data?.message}`);
            // }

            // else {
            //     Alert.alert("Internet Connection Failed", `${response}`);
            // }

        } catch (error) {
            console.error("error", error);
        }
    };

    // useEffect(() => {
    //     // fetchData();

    //     dispatch(getLeavesStatus({
    //         uid,
    //         navigation
    //     }))
    //         .then(() => {
    //             setLoading(false);
    //         })
    //         .catch((error) => {
    //             console.error("Error:", error);
    //             setLoading(false);
    //         });



    // }, [])

    return (
        <View style={styles.container}>

            {loading ? <></> :

                <FlatList
                    data={leaves}
                    numColumns={2}
                    renderItem={({ item, index }) => (<LeaveBalanceCard item={item} index={index} leavesLength={leaves.length} />)}
                    keyExtractor={(item, index) => index}
                />
            }




        </View>
    )
}

export default LeaveStatus