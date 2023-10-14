import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import Table from '../../Table'
import { useSelector } from 'react-redux'

const Experiences = () => {

    const headerData = ['Company', 'Designation', 'Experience'];

    const profileData = useSelector((state) => state.employeeProfile.data);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} >

                <Table
                    header={headerData}
                    data={profileData?.experience}
                    experience={true}
                />

            </ScrollView>
        </SafeAreaView>
    )
}

export default Experiences

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // borderWidth: 1,
        backgroundColor: 'white'

    }

});