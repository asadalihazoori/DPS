import React from 'react'
import { SafeAreaView, ScrollView, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import { COLORS } from '../../../theme/colors';
import { FontStyle } from '../../../theme/FontStyle';
import ProfileTextInput from '../../Inputs/ProfileTextInput';

const FamilyInfo = () => {

    const profileData = useSelector((state) => state.employeeProfile.data);

    return (
        <View style={styles.container} >
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 12, marginBottom: 24 }}>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={{ backgroundColor: '#9E9EA0', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 16 }}>
                        <Text style={[FontStyle.Regular14, { color: COLORS.white }]}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={{ backgroundColor: '#3BCA78', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 16, marginLeft: 12 }}>
                        <Text style={[FontStyle.Regular14, { color: COLORS.white }]}>Save</Text>
                    </TouchableOpacity>
                </View>


                <ProfileTextInput
                    label={'Father Name'}
                    value={profileData?.father_name}
                    editable={false}
                />

                <ProfileTextInput
                    label={'Status'}
                    value={(profileData?.father_live == 'dead') ? 'Deceased' : 'Alive'}
                    editable={false}
                />
                <ProfileTextInput
                    label={'Mother Name'}
                    value={profileData?.mother_name}
                    editable={false}
                />
                <ProfileTextInput
                    label={'Status'}
                    value={(profileData?.mother_live == 'dead') ? 'Deceased' : 'Alive'}
                    editable={false}
                />

                {profileData?.spouse_info?.map((spouse, index) => (

                    <ProfileTextInput
                        label={'Spouse Name'}
                        value={spouse.spouse_name}
                        editable={false}
                        key={spouse.id}
                    />
                ))}

                {profileData?.child_info?.map((child) => (

                    <ProfileTextInput
                        label={'Child Name'}
                        value={child.child_name}
                        editable={false}
                        key={child.id}
                    />
                ))}




            </ScrollView>
        </View>
    )
}

export default FamilyInfo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // borderWidth: 1,
        // backgroundColor: COLORS.white,
        // padding: 20,

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