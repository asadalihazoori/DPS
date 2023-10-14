import React from 'react'
import { SafeAreaView, ScrollView, Text, View, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'

const PersonalInfo = () => {

    const profileData = useSelector((state) => state.employeeProfile.data);

    return (
        <SafeAreaView style={styles.container} >
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.infoView}>

                    <View style={styles.section}>

                        <View style={styles.headerView}>
                            <Text style={styles.headerText}>Personal Info</Text>
                        </View>

                        <View style={styles.innerView}>

                            <View style={styles.rowView}>
                                <Text style={styles.heading}>CNIC: </Text>
                                <Text style={styles.title}>{profileData?.cnic}</Text>
                            </View>

                            <View style={styles.rowView}>
                                <Text style={styles.heading}>Shift: </Text>

                                <View style={styles.textView}>
                                    <Text style={styles.title}>{profileData?.shift?.name}</Text>
                                </View>
                            </View>

                            <View style={styles.rowView}>
                                <Text style={styles.heading}>Address: </Text>

                                <View style={styles.textView}>
                                    <Text style={styles.title}>{profileData?.address}</Text>
                                </View>
                            </View>

                            <View style={styles.rowView}>
                                <Text style={styles.heading}>Remaining Medical Claim : </Text>
                                <Text style={styles.title}>{profileData?.remaining_medical_claim}</Text>
                            </View>

                            <View style={styles.rowView}>
                                <Text style={styles.heading}>Job Status: </Text>
                                <Text style={styles.title}>{profileData?.job_status ? 'Currently Employed' : 'Not Employed'}</Text>
                            </View>

                            <View style={styles.rowView}>
                                <Text style={styles.heading}>Remaining Leaves: </Text>
                                <Text style={styles.title}>{profileData?.leave_remaining}</Text>
                            </View>


                        </View>
                    </View>

                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default PersonalInfo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // borderWidth: 1,
        backgroundColor: 'white',
        padding: 20,

    },

    headerView: {
        backgroundColor: 'grey',
        padding: 10,
        borderRadius: 10,
        paddingHorizontal: 16,

    },

    headerText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16
    },

    infoView: {
        // borderWidth: 1,
        // padding: 10
    },

    section: {
        marginBottom: 10
    },

    innerView: {
        padding: 10
    },

    rowView: {
        flexDirection: 'row',
        marginBottom: 10,
        // borderWidth: 1,
        // flex:1
    },

    heading: {
        color: 'black',
        fontSize: 16,
        fontWeight: '600',
    },

    textView: {
        flex: 1
    },

    title: {
        color: 'black',
        fontSize: 14,
        fontWeight: '400',

    }


});