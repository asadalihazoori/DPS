import { StyleSheet, Text, View, Modal, ScrollView, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { RadioButton } from 'react-native-paper';
import Button from '../../../Buttons/Button';
// import DatePicker from './DateTimePicker/DatePicker';
import DatePicker from '../../../DateTimePicker/DatePicker'
import Icons from 'react-native-vector-icons/Ionicons';
// import inputValidation from '../utilities/Validations/YupValidate';
// import { ProfileContext } from '../context/ProfileContext';
import InputField from '../../../InputField';
import { AddSpouseSchema } from '../../../../utilities/Validations/UpdateProfile/AddSpouseSchema';
import { ProfileContext } from '../../../../context/ProfileContext'
import inputValidation from '../../../../utilities/Validations/YupValidate'
import { COLORS } from '../../../../theme/colors';

const AddSpouseModal = ({ modalVisible, setModalVisible, header, data, onChangeSelection }) => {

    const [showDatePicker, setShowDatePicker] = useState(false);

    const { profileFields, setProfileFields } = useContext(ProfileContext);

    const [spouseInputs, setspouseInputs] = useState({
        spouse_name: null,
        s_dob: null,
        s_contact: null,
        s_cnic: null,

        // errors: null,
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (field, value) => {
        setspouseInputs({
            ...spouseInputs,
            [field]: value,
            // errors: {
            //     ...spouseInputs.errors,
            //     [field]: false
            // }
        })
    }

    const handleDateChange = (selectedDate, field) => {

        setShowDatePicker(false);
        const dateObject = new Date(selectedDate);
        const formattedDate = dateObject.toISOString().split('T')[0];

        handleInputChange(field, formattedDate);
    };

    const validate = async () => {

        const result = await inputValidation(AddSpouseSchema, spouseInputs)

        console.log(result);
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
        updatedProfileFields.spouse_tree_id.push([0, 0, spouseInputs]);

        // Update the profileFields state with the new data
        setProfileFields(updatedProfileFields);

        setModalVisible(false);

        setspouseInputs({
            spouse_name: null,
            s_dob: null,
            s_contact: null,
            s_cnic: null,
        })
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

                        <View style={{}}>

                            <InputField
                                marginTop={16}
                                label={'Spouse Name'}
                                placeholder={'Full Name'}
                                value={spouseInputs.spouse_name}
                                onChangeText={(text) => handleInputChange('spouse_name', text)}
                                error={errors?.err?.spouse_name}
                            />

                            <InputField
                                marginTop={16}
                                label={'Spouse Contact No.'}
                                keyboardType={'phone-pad'}

                                placeholder={'03123456789'}
                                value={spouseInputs?.s_contact}
                                onChangeText={(text) => handleInputChange('s_contact', text)}
                                error={errors?.err?.s_contact}
                            />

                            <DatePicker
                                date={new Date()}
                                // placeholder={'Date Of Birth'}
                                label={'Date Of Birth'}
                                value={spouseInputs?.s_dob}
                                showDatePicker={showDatePicker}
                                setShowDatePicker={setShowDatePicker}
                                onChange={(selectedDate) => handleDateChange(selectedDate, 's_dob')}
                                error={errors?.err?.s_dob}
                            // error={inputs?.errors?.dob}
                            />

                            <InputField
                                marginTop={16}
                                label={'CNIC No.'}
                                value={spouseInputs?.s_cnic}
                                keyboardType={'number-pad'}
                                placeholder={'36401-1234567-9'}
                                onChangeText={(text) => handleInputChange('s_cnic', text)}
                                error={errors?.err?.s_cnic}
                            />
                        </View>

                        <Button title='OK' handelSubmit={validate} height={40} />

                    </ScrollView>
                </View>
            </View>
        </Modal>
    )
}

export default AddSpouseModal

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
        // marginTop: 32,
        // alignItems: 'center'
        flexDirection: 'row',
    },

    header: {
        fontWeight: '700',
        color: COLORS.black,
        fontSize: 16,
        marginBottom: 8,
        flex: 1

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

    }
})