import React from 'react'
import { SafeAreaView, ScrollView, Text, View, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import { COLORS } from '../../../theme/colors';

const FamilyInfo = () => {

    const profileData = useSelector((state) => state.employeeProfile.data);

    return (
        <SafeAreaView style={styles.container} >
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.infoView}>

                    <View style={styles.section}>

                        <View style={styles.headerView}>
                            <Text style={styles.headerText}>Parents Info</Text>
                        </View>

                        <View style={styles.innerView}>

                            <View style={styles.rowView}>
                                <Text style={styles.heading}>Father Name: </Text>
                                <Text style={styles.title}>{profileData?.father_name}</Text>
                            </View>

                            <View style={styles.rowView}>
                                <Text style={styles.heading}>Status: </Text>
                                <Text style={styles.title}>{(profileData?.father_live == 'dead') ? 'Deceased' : 'Alive'}</Text>
                            </View>


                            <View style={{ marginTop: 12 }}>

                                <View style={styles.rowView}>
                                    <Text style={styles.heading}>Mother Name: </Text>
                                    <Text style={styles.title}>{profileData?.mother_name}</Text>
                                </View>

                                <View style={styles.rowView}>
                                    <Text style={styles.heading}>Status: </Text>
                                    <Text style={styles.title}>{(profileData?.mother_live == 'dead') ? 'Deceased' : 'Alive'}</Text>
                                </View>

                            </View>


                        </View>
                    </View>


                    <View style={styles.section}>

                        <View style={styles.headerView}>
                            <Text style={styles.headerText}>Spouse Info</Text>

                        </View>

                        <View style={styles.innerView}>

                            {profileData?.spouse_info?.map((spouse, index) => (

                                <View style={styles.rowView} key={index} >
                                    <Text style={styles.heading}>Spouse Name: </Text>
                                    <Text style={styles.title}>{spouse.spouse_name}</Text>
                                </View>
                            ))}


                        </View>
                    </View>

                    <View>

                        <View style={styles.headerView}>
                            <Text style={styles.headerText}>Child Info</Text>

                        </View>

                        <View style={styles.innerView}>

                            {profileData?.child_info?.map((child, index) => (

                                <View style={[styles.rowView, { marginBottom: 5 }]} key={index} >
                                    <Text style={styles.heading}>Child Name: </Text>
                                    <Text style={styles.title}> {child.child_name}</Text>
                                </View>
                            ))}


                        </View>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default FamilyInfo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // borderWidth: 1,
        backgroundColor: COLORS.white,
        padding: 20,

    },

    headerView: {
        backgroundColor: COLORS.grey,
        padding: 10,
        borderRadius: 10,
        paddingHorizontal: 16,

    },

    headerText: {
        color: COLORS.white,
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
        flexDirection: 'row'
    },

    heading: {
        color: COLORS.black,
        fontWeight: '600',
    },

    title: {
        color: COLORS.black,
        fontWeight: '400',

    }


});