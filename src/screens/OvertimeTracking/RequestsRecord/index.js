import { ScrollView } from 'react-native'
import React from 'react'
import { styles } from './styles'
import LoanCard from '../../../components/Cards/LoanCard';

const RequestsRecord = ({ navigation }) => {

    const dummyData = [{
        // "amount": "10000",
        "type": "Overtime",
        "date": "2022-03-13",
        // "remaining": "15000",
        "state": "Approved",
    },
    {
        // "amount": "10000",
        "type": "Overtime",
        "date": "2022-03-13",
        // "remaining": "15000",
        "state": "Approved",
    }];

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}
        // contentContainerStyle={{ justifyContent: 'space-between', flexGrow: 1 }}
        >

            {
                dummyData?.map((item, index) => {
                    return (
                        <LoanCard key={index} data={item} />
                    )
                })
            }
        </ScrollView>
    )
}

export default RequestsRecord