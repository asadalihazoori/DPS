import { View, Text, SafeAreaView, Image, TouchableOpacity, StyleSheet, } from 'react-native'
import React, { useContext, useState } from 'react'
import Button from '../../Buttons/Button'
import { useSelector } from 'react-redux'
import { ProfileContext } from '../../../context/ProfileContext';
import ImagePicker from '../../ImagePicker'
import InputField from '../../InputField';
import { SvgXml } from 'react-native-svg';
import { Icons } from '../../../assets/SvgIcons/Icons';
import { COLORS } from '../../../theme/colors';

const UpdatePersonalInfo = ({ navigation }) => {

    const profileData = useSelector((state) => state.employeeProfile.data);
    const [modalVisible2, setModalVisible2] = useState(false);
    const { profileFields, setProfileFields } = useContext(ProfileContext);


    const handleImageSelected = (imagebase64) => {

        const updatedImages = `data:image/jpeg;base64,${imagebase64}`;

        setProfileFields({
            ...profileFields,
            ['image']: updatedImages,
        });
    };


    const handleInputChange = (field, value) => {
        setProfileFields({
            ...profileFields,
            [field]: value,
        })
    }

    const handelSubmit = () => {
        console.log(profileFields);
    };



    return (
        <SafeAreaView style={styles.container}>

            <View style={{ flex: 1 }}>


                <View style={styles.innerContainer}>


                    <View style={styles.profileIconView}>
                        <View style={styles.innerProfileView}>
                            {profileFields.image ?
                                <View >
                                    <Image source={{ uri: profileFields?.image }} height={140} width={140} style={{ borderRadius: 100 }} />

                                </View>
                                :
                                <View>
                                    <Image source={{ uri: `data:image/jpeg;base64,${profileData?.image}` }} height={140} width={140} style={{ borderRadius: 100 }} />
                                    {/* <SvgXml xml={Icons} /> */}
                                </View>

                            }
                            <View style={styles.touchableContainer}>
                                <TouchableOpacity style={styles.editIconView} onPress={() => setModalVisible2(true)}>
                                    <SvgXml xml={Icons.edit} />
                                    {/* <Icon name='circle-edit-outline' size={30} style={{ color: "black" }} /> */}
                                </TouchableOpacity>
                            </View>

                        </View>

                    </View>

                    <View>
                        {/* <InputField
                            marginTop={16}
                            label={'Name'}
                            // placeholder={'Name'}
                            value={profileFields.name ? profileFields.name : profileData?.name}
                            // error={errors.reason}
                            // onFocus={() => handleError(null, 'reason')}
                            onChangeText={(text) => handleInputChange('name', text)} />

                        <InputField
                            marginTop={16}
                            label={'CNIC'}
                            // placeholder={'Name'}
                            value={profileFields.cnic ? profileFields.cnic : profileData?.cnic}
                            // error={errors.reason}
                            // onFocus={() => handleError(null, 'reason')}
                            onChangeText={(text) => handleInputChange('cnic', text)} /> */}


                        <InputField
                            marginTop={16}
                            label={'Address'}
                            // placeholder={'Name'}
                            value={profileFields.address ? profileFields.address : profileData?.address}
                            // error={errors.reason}
                            // onFocus={() => handleError(null, 'reason')}
                            onChangeText={(text) => handleInputChange('address', text)} />
                    </View>



                </View>

                {/* <Button title={'Continue'} handelSubmit={() => handelSubmit()} /> */}
            </View>

            <ImagePicker
                modalVisible={modalVisible2}
                setModalVisible={setModalVisible2}
                onImageSelected={handleImageSelected}
            />
        </SafeAreaView>
    )
}

export default UpdatePersonalInfo


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // borderWidth: 1,
        // borderColor: 'green',
        // backgroundColor: 'white',
        paddingHorizontal: 20,
        // paddingVertical: 5,
        // borderWidth: 1

        // shadowColor: '#000',
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,
        // elevation: 5,
        // borderRadius: 10

    },

    innerContainer: {
        // borderWidth: 1,
        flex: 1

    },

    profileIconView: {
        // borderWidth: 1,
        borderColor: COLORS.red,
        alignItems: 'center',
        marginTop: 10,
    },



    innerProfileView: {
        // borderWidth: 1,
        // flexDirection: 'row', // Arrange the SVG and touchable side by side
        // alignItems: 'flex-start', // Align items to the top within the container
        // justifyContent: 'space-between',

    },
    touchableContainer: {
        position: 'absolute',
        bottom: 0, // Position it at the bottom
        right: 0, // Position it at the right
    },
    editIconView: {
        // borderWidth: 1,
    },


});