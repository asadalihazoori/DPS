import { SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Table from '../../components/Table'
import { styles } from './styles';
import { useSelector } from 'react-redux';

const Leave_Details = ({ route }) => {

    const headerData = ['From', 'To', 'Availed', 'Reason'];
    const { leaves_type } = route.params;
    const leaves_availed = useSelector((state) => state.leaveStatus.leaves_availed);


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>

                <Table header={headerData} data={leaves_availed} leaves_availed={true} leaves_type={leaves_type} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Leave_Details
