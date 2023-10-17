import { StyleSheet, Text, View, Modal, ScrollView, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { RadioButton } from 'react-native-paper';
import Button from './Buttons/Button';
import InputField from './InputField';
import DatePicker from './DateTimePicker/DatePicker';
import { ProfileContext } from '../context/ProfileContext';
import Icons from 'react-native-vector-icons/Ionicons';
import inputValidation from '../utilities/Validations/YupValidate';
import { AddQualifSchema } from '../utilities/Validations/UpdateProfile/AddQualifSchema';

const AddQualifModal = ({ modalVisible, setModalVisible, header, data, onChangeSelection }) => {

    const { profileFields, setProfileFields } = useContext(ProfileContext);

    const [errors, setErrors] = useState({});

    const [QualifInputs, setQualifInputs] = useState({
        qualification: null,
        passing_year: null,
        institue: null,
        attachment: null,

        // errors: null,
    });

    const handleInputChange = (field, value) => {
        setQualifInputs({
            ...QualifInputs,
            [field]: value,
            // errors: {
            //     ...QualifInputs.errors,
            //     [field]: false
            // }
        })
    }

    // const handleDateChange = (selectedDate, field) => {

    //     const dateObject = new Date(selectedDate);
    //     const formattedDate = dateObject.toISOString().split('T')[0];

    //     handleInputChange(field, formattedDate);
    // };


    const validate = async () => {

        const result = await inputValidation(AddQualifSchema, QualifInputs)

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
        updatedProfileFields.employee_qualify_id.push([0, 0, QualifInputs]);

        // Update the profileFields state with the new data
        setProfileFields(updatedProfileFields);


        setModalVisible(false);

        setQualifInputs({
            qualification: null,
            passing_year: null,
            institue: null,
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
                                label={'Qualifications'}
                                placeholder={'BS CS'}
                                value={QualifInputs.qualification}
                                onChangeText={(text) => handleInputChange('qualification', text)}
                                error={errors?.err?.qualification}
                            />

                            <InputField
                                marginTop={16}
                                label={'Passing Year'}
                                // keyboardType={'phone-pad'}
                                placeholder={'2020'}
                                keyboardType={'number-pad'}
                                value={QualifInputs?.passing_year}
                                onChangeText={(text) => handleInputChange('passing_year', text)}
                                error={errors?.err?.passing_year}
                            />

                            <InputField
                                marginTop={16}
                                label={'Institute'}
                                // keyboardType={'phone-pad'}
                                placeholder={'NUST'}
                                value={QualifInputs?.institue}
                                onChangeText={(text) => handleInputChange('institue', text)}
                                error={errors?.err?.institue}
                            />

                            {/* <DatePicker
                                date={new Date()}
                                // placeholder={'Date Of Birth'}
                                label={'Experience From'}
                                value={QualifInputs?.experience_from}
                                showDatePicker={showDatePicker}
                                setShowDatePicker={setShowDatePicker}
                                onChange={(selectedDate) => handleDateChange(selectedDate, 'experience_from')}
                            // error={inputs?.errors?.dob}
                            /> */}

                            {/* <DatePicker
                                date={new Date()}
                                // placeholder={'Date Of Birth'}
                                label={'Experience To'}
                                value={QualifInputs?.experience_to}
                                showDatePicker={showDatePicker1}
                                setShowDatePicker={setShowDatePicker1}
                                onChange={(selectedDate) => handleDateChange(selectedDate, 'experience_to')}
                            // error={inputs?.errors?.dob}
                            /> */}


                        </View>

                        <Button title='OK' handelSubmit={validate} height={40} />

                    </ScrollView>
                </View>
            </View>
        </Modal>
    )
}

export default AddQualifModal

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
        flexDirection: 'row',
        // alignItems: 'center'
    },

    header: {
        fontWeight: '700',
        color: 'black',
        fontSize: 16,
        marginBottom: 8,
        flex: 1,

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

    },


    rowView: {
        flexDirection: 'row',
        marginBottom: 6,
        // borderWidth: 1,
        // flex:1
    },

    heading: {
        color: 'black',
        fontSize: 16,
        fontWeight: '600',
    },


    title: {
        color: 'black',
        fontSize: 14,
        fontWeight: '400',

    }
})