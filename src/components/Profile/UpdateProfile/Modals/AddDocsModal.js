import { StyleSheet, Text, View, Modal, ScrollView, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import Button from '../../../Buttons/Button';
import Icons from 'react-native-vector-icons/Ionicons';
import DatePicker from '../../../DateTimePicker/DatePicker'
import { AddDocsSchema } from '../../../../utilities/Validations/UpdateProfile/AddDocsSchema';
import inputValidation from '../../../../utilities/Validations/YupValidate'
import InputField from '../../../InputField';
import { ProfileContext } from '../../../../context/ProfileContext'
import { COLORS } from '../../../../theme/colors';
import FilePicker from '../../../FilePicker';

const AddDocsModal = ({ modalVisible, setModalVisible, header }) => {

    const { profileFields, setProfileFields } = useContext(ProfileContext);

    const [errors, setErrors] = useState({});
    const [showDatePicker, setShowDatePicker] = useState();

    const [DocsInputs, setDocsInputs] = useState({
        name: null,
        description: null,
        date: null,
        attachment: null,

        // errors: null,
    });

    const handleInputChange = (field, value) => {
        setDocsInputs({
            ...DocsInputs,
            [field]: value,
            // errors: {
            //     ...DocsInputs.errors,
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

        const result = await inputValidation(AddDocsSchema, DocsInputs)

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

        updatedProfileFields.personal_doc.push([0, 0, DocsInputs]);

        setProfileFields(updatedProfileFields);

        setModalVisible(false);

        setDocsInputs({
            name: null,
            description: null,
            date: null,
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
                                    size={24}
                                    style={{ color: COLORS.black }}
                                />
                            </TouchableOpacity>
                        </View>

                        <View style={{}}>

                            <InputField
                                marginTop={16}
                                label={'Name'}
                                placeholder={'CNIC Copy'}
                                value={DocsInputs?.name}
                                onChangeText={(text) => handleInputChange('name', text)}
                                error={errors?.err?.name}
                            />

                            <InputField
                                marginTop={16}
                                label={'Description'}
                                // keyboardType={'phone-pad'}
                                placeholder={'Front View'}
                                // keyboardType={'number-pad'}
                                value={DocsInputs?.description}
                                onChangeText={(text) => handleInputChange('description', text)}
                                error={errors?.err?.description}
                            />

                            {/* <InputField
                                marginTop={16}
                                label={'Institute'}
                                // keyboardType={'phone-pad'}
                                placeholder={'NUST'}
                                value={DocsInputs?.institue}
                                onChangeText={(text) => handleInputChange('institue', text)}
                                error={errors?.err?.institue}
                            /> */}

                            <DatePicker
                                date={new Date()}
                                // placeholder={'Date Of Birth'}
                                label={'Date'}
                                value={DocsInputs?.date}
                                showDatePicker={showDatePicker}
                                setShowDatePicker={setShowDatePicker}
                                onChange={(selectedDate) => handleDateChange(selectedDate, 'date')}
                            // error={inputs?.errors?.dob}
                            />

                            <FilePicker />

                            {/* <DatePicker
                                date={new Date()}
                                // placeholder={'Date Of Birth'}
                                label={'Experience To'}
                                value={DocsInputs?.experience_to}
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

export default AddDocsModal

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
        flexDirection: 'row',
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


    title: {
        color: COLORS.black,
        fontSize: 14,
        fontWeight: '400',

    }
})