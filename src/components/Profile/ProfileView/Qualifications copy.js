import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import Table from '../../Table'
import { useSelector } from 'react-redux'
import { COLORS } from '../../../theme/colors'

const Qualifications = () => {

    const headerData = ['Qualification', 'Institue', 'Passing Year'];

    const profileData = useSelector((state) => state.employeeProfile.data);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} >

                <Table header={headerData} data={profileData?.qualification}
                    qualification={true}
                />

            </ScrollView>
        </SafeAreaView>
    )
}

export default Qualifications


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        // borderWidth: 1,
        backgroundColor: COLORS.white

    }

});