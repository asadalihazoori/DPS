import React, { useState } from 'react'
import { SafeAreaView, ScrollView, Text, View, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import { SvgXml } from 'react-native-svg';

// import { Icons } from '../../../assets/SvgIcons/Icons';
// import Theme from '../../../theme/theme';
import { COLORS } from '../../../../theme/colors';
import ProfileTextInput from '../../../../components/Inputs/ProfileTextInput';

const PersonalInfo = () => {

    const profileData = useSelector((state) => state.employeeProfile.data);
    const [editable, setEditable] = useState(false);

    return (
        <View style={styles.container} >
            <ScrollView showsVerticalScrollIndicator={false}>

                {/* <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 12, marginBottom: 24, }}>
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

                </View> */}
                <View>

                    <ProfileTextInput

                        label={'Name'}
                        value={profileData?.name}
                        editable={false}
                    />

                    {/* 
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
                    /> */}


                    {profileData?.identification_id &&
                        <ProfileTextInput
                            label={'ID'}
                            value={profileData?.identification_id}
                            editable={false}
                        />
                    }

                    {profileData?.company_id?.[1] &&
                        <ProfileTextInput
                            label={'Company'}
                            value={`${profileData?.company_id?.[1]}`}
                            editable={false}
                        />
                    }

                    {profileData?.department_id?.[1] &&
                        <ProfileTextInput
                            label={'Department'}
                            value={`${profileData?.department_id?.[1]}`}
                            editable={false}
                        />
                    }

                    {profileData?.manager_id?.[1] &&
                        <ProfileTextInput
                            label={'Manager'}
                            value={`${profileData?.manager_id?.[1]}`}
                            editable={false}
                        />
                    }
                    {profileData?.company_location?.[1] &&

                        < ProfileTextInput
                            label={'Company Location'}
                            value={`${profileData?.company_location?.[1]}`}
                            editable={false}
                        />
                    }

                    {profileData?.work_email &&
                        <ProfileTextInput
                            label={'Work Email'}
                            value={`${profileData?.work_email}`}
                            editable={false}
                        />
                    }

                    {profileData?.mobile_phone &&
                        <ProfileTextInput
                            label={'Work Mobile'}
                            value={`${profileData?.mobile_phone}`}
                            editable={false}
                        />
                    }

                    {profileData?.joining_date &&

                        <ProfileTextInput
                            label={'Joining Date'}
                            value={`${profileData?.joining_date}`}
                            editable={false}
                        />
                    }

                    {profileData?.no_of_years &&
                        <ProfileTextInput
                            label={'Service Years'}
                            value={`${profileData?.no_of_years}`}
                            editable={false}
                        />
                    }

                    {profileData?.nationality_type &&
                        <ProfileTextInput
                            label={'Nationality Type'}
                            value={profileData?.nationality_type == "non_local" ? 'Non Local' : 'Local'}
                            editable={false}
                        />
                    }

                    {profileData?.country_id[1] &&
                        <ProfileTextInput
                            label={'Nationality'}
                            value={`${profileData?.country_id[1]}`}
                            editable={false}
                        />
                    }

                    {profileData?.birthday &&
                        <ProfileTextInput
                            label={'Date of Birth'}
                            value={`${profileData?.birthday}`}
                            editable={false}
                        />
                    }


                </View>

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