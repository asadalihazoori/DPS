import React, { useState } from 'react'
import { SafeAreaView, ScrollView, Text, View, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import { COLORS } from '../../../theme/colors';
import ProfileTextInput from '../../Inputs/ProfileTextInput';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icons } from '../../../assets/SvgIcons/Icons';
import Theme from '../../../theme/theme';
import { SvgXml } from 'react-native-svg';

const PersonalInfo = () => {

    const profileData = useSelector((state) => state.employeeProfile.data);
    const [editable, setEditable] = useState(false);

    return (
        <View style={styles.container} >
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 12, marginBottom: 24, }}>
                    <TouchableOpacity
                        onPress={() => setEditable(!editable)}
                        activeOpacity={0.5}
                        style={[Theme.Shadow, { width: 40, alignItems: 'center', paddingVertical: 5, marginHorizontal: 4 }]}>
                        <SvgXml xml={Icons.editIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={[Theme.Shadow, { width: 40, alignItems: 'center', paddingVertical: 5, marginHorizontal: 4 }]}>
                        <SvgXml xml={Icons.download} />
                    </TouchableOpacity>

                </View>


                <ProfileTextInput
                    label={'Name'}
                    value={profileData?.name}
                    editable={false}
                />

                <ProfileTextInput
                    label={'CNIC'}
                    value={profileData?.cnic}
                    editable={false}
                />
                <ProfileTextInput
                    label={'Shift'}
                    value={profileData?.shift?.name}
                    editable={false}
                />
                <ProfileTextInput
                    label={'Address'}
                    value={profileData?.address}
                    editable={editable}
                />
                <ProfileTextInput
                    label={'Remaining Medical Claims'}
                    value={`${profileData?.remaining_medical_claim}`}
                    editable={false}
                />
                <ProfileTextInput
                    label={'Job Status'}
                    value={profileData?.job_status ? 'Currently Employed' : 'Not Employed'}
                    editable={false}
                />
                <ProfileTextInput
                    label={'Remaining Leaves'}
                    value={`${profileData?.leave_remaining}`}
                    editable={false}
                />

                {/* <View style={styles.infoView}>

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

                </View> */}

            </ScrollView>
        </View>
    )
}

export default PersonalInfo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // borderWidth: 1,
        marginHorizontal: 16,
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
        flexDirection: 'row',
        marginBottom: 10,
        // borderWidth: 1,
        // flex:1
    },

    heading: {
        color: COLORS.black,
        fontSize: 16,
        fontWeight: '600',
    },

    textView: {
        flex: 1
    },

    title: {
        color: COLORS.black,
        fontSize: 14,
        fontWeight: '400',

    }


});