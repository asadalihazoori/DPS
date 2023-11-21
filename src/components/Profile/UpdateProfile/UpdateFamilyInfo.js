import { View, Text, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { useSelector } from 'react-redux';
import { ProfileContext } from '../../../context/ProfileContext';
import TouchableView from '../../Buttons/TouchableView';
import RadioSelectionModal from '../../RadioSelectionModal';
import Icons from 'react-native-vector-icons/FontAwesome6';
import AddChildModal from './Modals/AddChildModal';
import AddSpouseModal from './Modals/AddSpouseModal';
import { COLORS } from '../../../theme/colors';

const UpdateFamilyInfo = ({ navigation }) => {

    const profileData = useSelector((state) => state.employeeProfile.data);
    const { profileFields, setProfileFields } = useContext(ProfileContext);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedField, setSelectedField] = useState('');

    const [childModalVisible, setChildModalVisible] = useState(false);
    const [spouseModalVisible, setSpouseModalVisible] = useState(false);

    const handleInputChange = (field, value) => {
        setProfileFields({
            ...profileFields,
            [field]: value,
        })
    }

    const handleModalVisible = (field) => {
        setSelectedField(field);
        setModalVisible(true);
    }

    const handleSelectStatus = (status) => {
        if (selectedField === 'father_live') {
            setProfileFields({
                ...profileFields,
                father_live: status,
            });
        } else if (selectedField === 'mother_live') {
            setProfileFields({
                ...profileFields,
                mother_live: status,
            });
        }
        setModalVisible(false);
    }


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.section}>

                    <View style={styles.headerView}>
                        <Text style={styles.headerText}>Parents Info</Text>
                    </View>

                    <View style={styles.innerView}>

                        {/* <InputField
                            marginTop={16}
                            label={'Father Name'}
                            // placeholder={'Name'}
                            value={profileFields.father_name ? profileFields.father_name : profileData?.father_name}
                            onChangeText={(text) => handleInputChange('father_name', text)}
                        /> */}


                        <TouchableView
                            label={'Father Status'}
                            text={profileFields.father_live ? profileFields.father_live.name : (profileData?.father_live == 'dead') ? 'Deceased' : 'Alive'}
                            handleModal={() => handleModalVisible('father_live')}
                        />


                        <View style={{ marginTop: 12 }}>

                            {/* <InputField
                                marginTop={16}
                                label={'Mother Name'}
                                value={profileFields.mother_name ? profileFields.mother_name : profileData?.mother_name}
                                onChangeText={(text) => handleInputChange('mother_name', text)}
                            /> */}

                            <TouchableView
                                label={'Mother Status'}
                                text={profileFields.mother_live ? profileFields.mother_live.name : (profileData?.mother_live == 'dead') ? 'Deceased' : 'Alive'}
                                handleModal={() => handleModalVisible('mother_live')}
                            />

                        </View>


                    </View>


                    <View style={styles.section}>

                        <View style={[styles.headerView, { flexDirection: 'row' }]}>
                            <Text style={styles.headerText}>Spouse Info</Text>
                            <TouchableOpacity onPress={() => setSpouseModalVisible(true)}>

                                <Icons name="plus"
                                    size={20}
                                    style={{ color: "white" }}
                                />
                            </TouchableOpacity>

                        </View>

                        {/* {profileData?.spouse_info?.map((spouse, index) => (


                            <InputField
                                marginTop={16}
                                key={index}
                                label={'Spouse Name'}
                                value={profileFields.spouse_name ? profileFields.spouse_name : spouse.spouse_name}
                                onChangeText={(text) => handleInputChange('spouse_name', text)}
                            />
                        ))} */}



                        {profileFields?.spouse_tree_id?.map((spouse, index) => (
                            <View style={{ marginLeft: 8, marginTop: 12 }} key={index}>

                                <View style={styles.rowView}>
                                    <Text style={styles.heading}>Spouse Name: </Text>
                                    <Text style={styles.title}>{spouse[2].spouse_name}</Text>
                                </View>

                                {/* <View style={styles.rowView}>
                                    <Text style={styles.heading}>Relation Name: </Text>
                                    <Text style={styles.title}>{spouse[2].status.name}</Text>
                                </View> */}

                                <View style={styles.rowView}>
                                    <Text style={styles.heading}>Spouse Contact No.: </Text>
                                    <Text style={styles.title}>{spouse[2].s_contact}</Text>
                                </View>

                                <View style={styles.rowView}>
                                    <Text style={styles.heading}>B.Form/CNIC no. </Text>
                                    <Text style={styles.title}>{spouse[2].s_cninc}</Text>
                                </View>

                                <View style={styles.rowView}>
                                    <Text style={styles.heading}>DOB: </Text>
                                    <Text style={styles.title}>{spouse[2].s_dob}</Text>
                                </View>

                                <View>
                                    <Text>------------------------------------------------------------------------</Text>
                                </View>

                            </View>

                        ))}



                    </View>


                    <View style={styles.section}>

                        <View style={[styles.headerView, { flexDirection: 'row' }]}>
                            <Text style={styles.headerText}>Child Info</Text>

                            <TouchableOpacity onPress={() => setChildModalVisible(true)}>

                                <Icons name="plus"
                                    size={20}
                                    style={{ color: "white" }}
                                />
                            </TouchableOpacity>
                        </View>

                        {/* {profileData?.child_info?.map((child, index) => (

                            <InputField
                                marginTop={16}
                                key={index}
                                label={'Child Name'}
                                value={profileFields.child_info ? profileFields.child_info[index].child_name : child.child_name}
                                onChangeText={(text) => handleInputChange('child_info', text)}
                            />
                        ))} */}


                        {profileFields?.family_tree_id?.map((child, index) => (
                            <View style={{ marginLeft: 8, marginTop: 12 }} key={index}>

                                <View style={styles.rowView}>
                                    <Text style={styles.heading}>Child Name: </Text>
                                    <Text style={styles.title}>{child[2].child_name}</Text>
                                </View>

                                <View style={styles.rowView}>
                                    <Text style={styles.heading}>Relation Name: </Text>
                                    <Text style={styles.title}>{child[2].status.name}</Text>
                                </View>

                                <View style={styles.rowView}>
                                    <Text style={styles.heading}>Mother Name: </Text>
                                    <Text style={styles.title}>{child[2].mother_name}</Text>
                                </View>

                                <View style={styles.rowView}>
                                    <Text style={styles.heading}>B.Form/CNIC no. </Text>
                                    <Text style={styles.title}>{child[2].child_id}</Text>
                                </View>

                                <View style={styles.rowView}>
                                    <Text style={styles.heading}>DOB: </Text>
                                    <Text style={styles.title}>{child[2].dob}</Text>
                                </View>

                                <View>
                                    <Text>------------------------------------------------------------------------</Text>
                                </View>

                            </View>

                        ))}



                    </View>
                </View>

                <RadioSelectionModal
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible}
                    data={[{ id: 1, name: 'Alive', value: 'alive' }, { id: 2, name: 'Deceased', value: 'dead' }]}
                    header={'Select Status'}
                    onChangeSelection={handleSelectStatus}
                />
            </ScrollView>

            <AddChildModal
                modalVisible={childModalVisible}
                setModalVisible={setChildModalVisible}
                header={'Add Child'}
            // data={familyInfo}
            // onChangeSelection={(person) => handleInputChange('claimFor', person)}
            />

            <AddSpouseModal
                modalVisible={spouseModalVisible}
                setModalVisible={setSpouseModalVisible}
                header={'Add Spouse'}
            // data={familyInfo}
            // onChangeSelection={(person) => handleInputChange('claimFor', person)}
            />


        </SafeAreaView>
    )
}

export default UpdateFamilyInfo


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // borderWidth: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: 20,

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
        fontSize: 16,
        flex: 1,
    },

    section: {
        marginBottom: 10,
        marginTop: 20,
        // borderWidth: 1
    },

    label: {
        color: COLORS.black,
        // marginBottom: -10,
        fontSize: 16,
        // marginLeft: 6,
        fontWeight: '600',
        marginTop: 15,

    },


    rowView: {
        flexDirection: 'row',
        marginBottom: 6,
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