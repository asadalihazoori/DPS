import { View, Text, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import Icons from 'react-native-vector-icons/FontAwesome6';
import { ProfileContext } from '../../../context/ProfileContext';
import AddQualifModal from './Modals/AddQualifModal';
import { COLORS } from '../../../theme/colors';

const UpdateQualifs = () => {

    const { profileFields, setProfileFields } = useContext(ProfileContext);
    const [QualifModalVisible, setQualifModalVisible] = useState(false);
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.section}>

                    <View style={[styles.headerView, { flexDirection: 'row' }]}>
                        <Text style={styles.headerText}>Qualifications</Text>
                        <TouchableOpacity onPress={() => setQualifModalVisible(true)}>

                            <Icons name="plus"
                                size={20}
                                style={{ color: COLORS.white }}
                            />
                        </TouchableOpacity>

                    </View>

                    {profileFields?.employee_qualify_id?.map((exper, index) => (
                        <View style={{ marginLeft: 8, marginTop: 12 }} key={index}>

                            <View style={styles.rowView}>
                                <Text style={styles.heading}>Qualification: </Text>
                                <Text style={styles.title}>{exper[2].qualification}</Text>
                            </View>

                            <View style={styles.rowView}>
                                <Text style={styles.heading}>Institue: </Text>
                                <Text style={styles.title}>{exper[2].institue}</Text>
                            </View>

                            <View style={styles.rowView}>
                                <Text style={styles.heading}>Passing year: </Text>
                                <Text style={styles.title}>{exper[2].passing_year}</Text>
                            </View>

                            <View>
                                <Text>------------------------------------------------------------------------</Text>
                            </View>

                        </View>

                    ))}

                </View>
            </ScrollView>
            <AddQualifModal
                modalVisible={QualifModalVisible}
                setModalVisible={setQualifModalVisible}
                header={'Add Qualification'}
            // data={familyInfo}
            // onChangeSelection={(person) => handleInputChange('claimFor', person)}
            />
        </SafeAreaView>
    )
}

export default UpdateQualifs


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // borderWidth: 1,
        // borderColor: 'green',
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