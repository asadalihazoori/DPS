import { StyleSheet, Text, View, Modal, ScrollView, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { RadioButton } from 'react-native-paper';
import InputField from '../../../InputField';
import Icons from 'react-native-vector-icons/Ionicons';
// import DatePicker from './DateTimePicker/DatePicker';
// import { ProfileContext } from '../context/ProfileContext';
// import { AddChildSchema } from '../utilities/Validations';

import DatePicker from '../../../DateTimePicker/DatePicker'
import { ProfileContext } from '../../../../context/ProfileContext'
import Button from '../../../Buttons/Button';
import { AddChildSchema } from '../../../../utilities/Validations/UpdateProfile/AddChildSchema';
import inputValidation from '../../../../utilities/Validations/YupValidate'
import { COLORS } from '../../../../theme/colors';

const AddChildModal = ({ modalVisible, setModalVisible, header, onChangeSelection }) => {

    const [selectedType, setSelectedType] = useState(null);
    const { profileFields, setProfileFields } = useContext(ProfileContext);

    const [showDatePicker, setShowDatePicker] = useState(false);

    const data = [{ id: 1, name: 'Son', value: 'daughter' }, { id: 2, name: 'Daughter', value: 'daughter' }];

    const [childInputs, setChildInputs] = useState({
        child_name: null,
        status: null,
        mother_name: null,
        dob: null,
        child_id: null,

        // errors: null,
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (field, value) => {
        setChildInputs({
            ...childInputs,
            [field]: value,
            // errors: {
            //     ...childInputs.errors,
            //     [field]: false
            // }
        })
    }

    const handleDateChange = (selectedDate, field) => {

        // console.log('callec')
        setShowDatePicker(false);
        const dateObject = new Date(selectedDate);
        const formattedDate = dateObject.toISOString().split('T')[0];

        handleInputChange(field, formattedDate);
    };


    const validate = async () => {

        const result = await inputValidation(AddChildSchema, childInputs)

        if (result.isValidate) {
            handleOkButtonPress();

        } else {
            const err = result?.err
            setErrors(prev => ({
                ...prev,
                err
            }))
        }

    }


    const handleOkButtonPress = () => {

        const updatedProfileFields = { ...profileFields };

        console.log("updated", updatedProfileFields);

        // Push the QualifInputs into the employee_qualify_id array
        updatedProfileFields.family_tree_id.push([0, 0, childInputs]);

        // Update the profileFields state with the new data
        setProfileFields(updatedProfileFields);
        setModalVisible(false);

        setChildInputs({
            child_name: null,
            status: null,
            mother_name: null,
            dob: null,
            child_id: null,
        });
        setErrors(null)
    };


    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(false);
            }}

        // presentationStyle='overFullScreen'

        >
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <ScrollView showsVerticalScrollIndicator={false}>

                        <View style={styles.textView}>
                            <Text style={styles.header}>{header}</Text>
                            <TouchableOpacity onPress={() => setModalVisible(false)}>

                                <Icons name="close"

                                    size={24}
                                    style={{ color: COLORS.black }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View>

                            <InputField
                                marginTop={16}
                                // key={index}
                                label={'Child Name'}
                                placeholder={'Full Name'}
                                value={childInputs.child_name}
                                onChangeText={(text) => handleInputChange('child_name', text)}
                                error={errors?.err?.child_name}
                            />

                            <View style={{ marginTop: 16 }}>
                                <Text style={styles.label}>Relation</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>


                                    {data?.map((item) => (
                                        <View key={item.id} style={{ flexDirection: 'row', alignItems: 'center', }}>
                                            <RadioButton.Android
                                                key={item.id}
                                                value={item.id}
                                                status={selectedType?.id === item.id ? 'checked' : 'unchecked'}
                                                onPress={() => { handleInputChange('status', item.value); setSelectedType(item) }}
                                            />
                                            <View style={{}}>
                                                <Text style={styles.text}>{item.name}</Text>
                                            </View>
                                        </View>
                                    ))}
                                </View>
                            </View>

                            <InputField
                                marginTop={16}
                                label={'Mother Name'}
                                placeholder={'Full Name'}
                                value={childInputs.mother_name}
                                onChangeText={(text) => handleInputChange('mother_name', text)}
                                error={errors?.err?.mother_name}
                            />

                            {/* <InputField
                                marginTop={16}
                                label={'Child Name'}
                            // value={profileFields.child_info ? profileFields.child_info[index].child_name : child.child_name}
                            // onChangeText={(text) => handleInputChange('child_info', text)}
                            /> */}

                            <DatePicker
                                date={new Date()}
                                // placeholder={'Date Of Birth'}
                                label={'Date Of Birth'}
                                value={childInputs?.dob}
                                showDatePicker={showDatePicker}
                                setShowDatePicker={setShowDatePicker}
                                onChange={(selectedDate) => handleDateChange(selectedDate, 'dob')}
                                // error={inputs?.errors?.dob}
                                error={errors?.err?.dob}
                            />

                            <InputField
                                marginTop={16}
                                label={'B.Form/CNIC No.'}
                                keyboardType={'number-pad'}
                                placeholder={'36401-1234567-9'}
                                value={childInputs.child_id}
                                onChangeText={(text) => handleInputChange('child_id', text)}
                                error={errors?.err?.child_id}
                            />
                        </View>

                        <Button title='OK' handelSubmit={validate} height={40} />

                    </ScrollView>
                </View>
            </View>
        </Modal>
    )
}

export default AddChildModal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 1,

    },

    innerContainer: {
        // borderWidth: 2,
        // paddingHorizontal: 32,
        // paddingTop: 40,
        padding: 20,
        // flex: 1,
        backgroundColor: COLORS.white,
        borderRadius: 13,
        width: '85%',

    },
    // innerContainer: {
    //     // borderWidth: 1,
    //     alignItems: 'center',
    //     // flex:1 
    // },
    textView: {
        // borderWidth: 1,
        flexDirection: 'row',
        // marginTop: 32,
        // alignItems: 'center'
    },

    header: {
        fontWeight: '700',
        color: COLORS.black,
        fontSize: 16,
        marginBottom: 8,
        flex: 1,
    },

    text: {
        color: COLORS.black,

    },

    loaderView: {
        marginTop: 50,
        marginBottom: 25,
        // borderWidth: 1,
        alignItems: 'center'

    },
    innerLoaderView: {
        // borderWidth: 1,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    label: {
        color: COLORS.black,
        // marginBottom: -10,
        marginLeft: 3,
        fontWeight: '600',
        // marginTop: 15,

    },
})