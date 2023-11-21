import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Theme from '../../../theme/theme'
import GeneralHeader from '../../../components/Headers/GeneralHeader'
import { styles } from './styles'
import LeaveRequestCard from '../../../components/Cards/LeaveRequestCard'
import { useSelector } from 'react-redux'

const LeaveRequets = ({ navigation }) => {

    const leaves_requested = useSelector((state) => state.leaveStatus.leaves_requested);
    console.log(leaves_requested);


    return (
        <SafeAreaView style={Theme.SafeArea}>
            <GeneralHeader title={'Requests'} navigation={navigation} />
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

                {
                    leaves_requested?.map((item, index) => {
                        return (
                            <LeaveRequestCard key={index} data={item} />
                        )
                    })
                }

            </ScrollView>
        </SafeAreaView>
    )
}

export default LeaveRequets