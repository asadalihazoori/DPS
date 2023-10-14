import { View, Text, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { useSelector } from 'react-redux';
import InputField from '../../InputField';
import { ProfileContext } from '../../../context/ProfileContext';
import TouchableView from '../../Buttons/TouchableView';
import RadioSelectionModal from '../../RadioSelectionModal';
import Icons from 'react-native-vector-icons/FontAwesome6';

const UpdateFamilyInfo = ({ navigation }) => {

    const profileData = useSelector((state) => state.employeeProfile.data);
    const { profileFields, setProfileFields } = useContext(ProfileContext);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedField, setSelectedField] = useState('');

    const handleInputChange = (field, value) => {
        console.log(profileFields);
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

                        <InputField
                            marginTop={16}
                            label={'Father Name'}
                            // placeholder={'Name'}
                            value={profileFields.father_name ? profileFields.father_name : profileData?.father_name}
                            onChangeText={(text) => handleInputChange('name', text)}
                        />


                        <TouchableView
                            label={'Father Status'}
                            text={profileFields.father_live ? profileFields.father_live.name : (profileData?.father_live == 'dead') ? 'Deceased' : 'Alive'}
                            handleModal={() => handleModalVisible('father_live')}
                        />


                        <View style={{ marginTop: 12 }}>

                            <InputField
                                marginTop={16}
                                label={'Mother Name'}
                                value={profileFields.father_name ? profileFields.father_name : profileData?.mother_name}
                                onChangeText={(text) => handleInputChange('name', text)}
                            />

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
                            <TouchableOpacity>

                                <Icons name="plus"
                                    size={20}
                                    style={{ color: "white" }}
                                />
                            </TouchableOpacity>

                        </View>

                        {profileData?.spouse_info?.map((spouse, index) => (


                            <InputField
                                marginTop={16}
                                key={index}
                                label={'Spouse Name'}
                                value={profileFields.spouse_name ? profileFields.spouse_name : spouse.spouse_name}
                                onChangeText={(text) => handleInputChange('spouse_name', text)}
                            />
                        ))}

                    </View>


                    <View style={styles.section}>

                        <View style={[styles.headerView, { flexDirection: 'row' }]}>
                            <Text style={styles.headerText}>Child Info</Text>

                            <TouchableOpacity>

                                <Icons name="plus"
                                    size={20}
                                    style={{ color: "white" }}
                                />
                            </TouchableOpacity>
                        </View>

                        {profileData?.child_info?.map((child, index) => (

                            <InputField
                                marginTop={16}
                                key={index}
                                label={'Child Name'}
                                value={profileFields.child_info ? profileFields.child_info[index].child_name : child.child_name}
                                onChangeText={(text) => handleInputChange('child_info', text)}
                            />
                        ))} 

                    </View>
                </View>

                <RadioSelectionModal
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible}
                    loanTypes={[{ id: 1, name: 'Alive', }, { id: 2, name: 'Deceased' }]}
                    header={'Select Status'}
                    onSelectLoanType={handleSelectStatus}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

export default UpdateFamilyInfo


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // borderWidth: 1,
        borderColor: 'green',
        backgroundColor: 'white',
        paddingHorizontal: 20,

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
        fontSize: 16,
        flex: 1,
    },

    section: {
        marginBottom: 10,
        marginTop: 20,
        // borderWidth: 1
    },


});