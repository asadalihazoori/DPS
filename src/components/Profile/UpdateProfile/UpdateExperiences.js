import { View, Text, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import Icons from 'react-native-vector-icons/FontAwesome6';
import AddExperModal from '../../AddExperModal.js';
import { ProfileContext } from '../../../context/ProfileContext.js';

const UpdateExperiences = () => {

    const [ExperModalVisible, setExperModalVisible] = useState(false);
    const { profileFields, setProfileFields } = useContext(ProfileContext);
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.section}>

                    <View style={[styles.headerView, { flexDirection: 'row' }]}>
                        <Text style={styles.headerText}>Experience</Text>
                        <TouchableOpacity onPress={() => setExperModalVisible(true)}>

                            <Icons name="plus"
                                size={20}
                                style={{ color: "white" }}
                            />
                        </TouchableOpacity>

                    </View>


                    {profileFields?.employee_expert_id?.map((exper, index) => (
                        <View style={{ marginLeft: 8, marginTop: 12 }} key={index}>

                            <View style={styles.rowView}>
                                <Text style={styles.heading}>Company: </Text>
                                <Text style={styles.title}>{exper[2].company}</Text>
                            </View>

                            <View style={styles.rowView}>
                                <Text style={styles.heading}>Designation: </Text>
                                <Text style={styles.title}>{exper[2].designation}</Text>
                            </View>

                            <View style={styles.rowView}>
                                <Text style={styles.heading}>From: </Text>
                                <Text style={styles.title}>{exper[2].experience_from}</Text>
                            </View>

                            <View style={styles.rowView}>
                                <Text style={styles.heading}>To: </Text>
                                <Text style={styles.title}>{exper[2].experience_to}</Text>
                            </View>

                            <View>
                                <Text>------------------------------------------------------------------------</Text>
                            </View>

                        </View>

                    ))}



                </View>
            </ScrollView>
            <AddExperModal
                modalVisible={ExperModalVisible}
                setModalVisible={setExperModalVisible}
                header={'Add Experience'}
            // data={familyInfo}
            // onChangeSelection={(person) => handleInputChange('claimFor', person)}
            />
        </SafeAreaView>
    )
}

export default UpdateExperiences


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

    textView: {
        flex: 1
    },

    title: {
        color: 'black',
        fontSize: 14,
        fontWeight: '400',

    }

});