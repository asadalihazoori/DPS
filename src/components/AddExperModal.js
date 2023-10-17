import { StyleSheet, Text, View, Modal, ScrollView, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { RadioButton } from 'react-native-paper';
import Button from './Buttons/Button';
import InputField from './InputField';
import DatePicker from './DateTimePicker/DatePicker';
import inputValidation from '../utilities/Validations/YupValidate';
import Icons from 'react-native-vector-icons/Ionicons';
import { AddExperienceSchema } from '../utilities/Validations/UpdateProfile/AddExperienceSchema';
import { ProfileContext } from '../context/ProfileContext';

const AddExperModal = ({ modalVisible, setModalVisible, header, onChangeSelection }) => {

    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showDatePicker1, setShowDatePicker1] = useState(false);

    const { profileFields, setProfileFields } = useContext(ProfileContext);

    const [errors, setErrors] = useState({});

    const [ExperInputs, setExperInputs] = useState({
        company: null,
        designation: null,
        experience_from: null,
        experience_to: null,
        total_experience_diff: null,
        attachment: null,

        // errors: null,
    });

    const handleInputChange = (field, value) => {
        setExperInputs({
            ...ExperInputs,
            [field]: value,
            // errors: {
            //     ...ExperInputs.errors,
            //     [field]: false
            // }
        })
    }

    const handleDateChange = (selectedDate, field) => {

        const dateObject = new Date(selectedDate);
        const formattedDate = dateObject.toISOString().split('T')[0];

        handleInputChange(field, formattedDate);
    };


    const validate = async () => {

        const result = await inputValidation(AddExperienceSchema, ExperInputs)

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

        // Push the QualifInputs into the employee_qualify_id array
        updatedProfileFields.employee_expert_id.push([0, 0, ExperInputs]);

        // Update the profileFields state with the new data
        setProfileFields(updatedProfileFields);

        setModalVisible(false);

        setExperInputs({
            company: null,
            designation: null,
            experience_from: null,
            experience_to: null,
            total_experience_diff: null,
            attachment: null,
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
                                    // color={color}
                                    size={24}
                                    style={{ color: "black" }}
                                />
                            </TouchableOpacity>
                        </View>

                        <View style={{}}>

                            <InputField
                                marginTop={16}
                                label={'Company'}
                                placeholder={'DPS'}
                                value={ExperInputs.company}
                                onChangeText={(text) => handleInputChange('company', text)}
                                error={errors?.err?.company}
                            />

                            <InputField
                                marginTop={16}
                                label={'Designation'}
                                // keyboardType={'phone-pad'}
                                placeholder={'Manager'}
                                value={ExperInputs?.designation}
                                onChangeText={(text) => handleInputChange('designation', text)}
                                error={errors?.err?.company}
                            />

                            <DatePicker
                                date={new Date()}
                                // placeholder={'Date Of Birth'}
                                label={'Experience From'}
                                value={ExperInputs?.experience_from}
                                showDatePicker={showDatePicker}
                                setShowDatePicker={setShowDatePicker}
                                onChange={(selectedDate) => handleDateChange(selectedDate, 'experience_from')}
                                // error={inputs?.errors?.dob}
                                error={errors?.err?.experience_from}
                            />

                            <DatePicker
                                date={new Date()}
                                // placeholder={'Date Of Birth'}
                                label={'Experience To'}
                                value={ExperInputs?.experience_to}
                                showDatePicker={showDatePicker1}
                                setShowDatePicker={setShowDatePicker1}
                                onChange={(selectedDate) => handleDateChange(selectedDate, 'experience_to')}
                                // error={inputs?.errors?.dob}
                                error={errors?.err?.experience_to}
                            />

                            {/* <InputField
                                marginTop={16}
                                label={'CNIC No.'}
                                value={ExperInputs?.s_cnic}
                                keyboardType={'number-pad'}
                                placeholder={'36401-1234567-9'}
                                onChangeText={(text) => handleInputChange('s_cnic', text)}
                            /> */}
                        </View>

                        <Button title='OK' handelSubmit={validate} height={40} />

                    </ScrollView>
                </View>
            </View>
        </Modal>
    )
}

export default AddExperModal

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
        backgroundColor: 'white',
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
        // marginTop: 32,
        // alignItems: 'center'
        flexDirection: 'row',
    },

    header: {
        fontWeight: '700',
        color: 'black',
        fontSize: 16,
        marginBottom: 8,
        flex: 1

    },

    text: {
        color: 'black',

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

    }
})