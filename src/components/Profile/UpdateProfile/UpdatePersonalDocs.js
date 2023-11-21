import { View, Text, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import Icons from 'react-native-vector-icons/FontAwesome6';
import { ProfileContext } from '../../../context/ProfileContext';
import AddDocsModal from './Modals/AddDocsModal';
import { COLORS } from '../../../theme/colors';

const UpdatePersonalDocs = () => {

    const { profileFields, setProfileFields } = useContext(ProfileContext);
    const [DocsModalVisible, setDocsModalVisible] = useState(false);
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.section}>

                    <View style={[styles.headerView, { flexDirection: 'row' }]}>
                        <Text style={styles.headerText}>Personal Documents</Text>
                        <TouchableOpacity onPress={() => setDocsModalVisible(true)}>

                            <Icons name="plus"
                                size={20}
                                style={{ color: COLORS.white }}
                            />
                        </TouchableOpacity>

                    </View>

                    {profileFields?.personal_doc?.map((docs, index) => (
                        <View style={{ marginLeft: 8, marginTop: 12 }} key={index}>

                            <View style={styles.rowView}>
                                <Text style={styles.heading}>Name: </Text>
                                <Text style={styles.title}>{docs[2].name}</Text>
                            </View>

                            <View style={styles.rowView}>
                                <Text style={styles.heading}>Description: </Text>
                                <Text style={styles.title}>{docs[2].description}</Text>
                            </View>

                            <View style={styles.rowView}>
                                <Text style={styles.heading}>Date1  : </Text>
                                <Text style={styles.title}>{docs[2].date}</Text>
                            </View>

                            <View>
                                <Text>------------------------------------------------------------------------</Text>
                            </View>

                        </View>

                    ))}

                </View>
            </ScrollView>
            <AddDocsModal
                modalVisible={DocsModalVisible}
                setModalVisible={setDocsModalVisible}
                header={'Add Document'}
            // data={familyInfo}
            // onChangeSelection={(person) => handleInputChange('claimFor', person)}
            />
        </SafeAreaView>
    )
}

export default UpdatePersonalDocs


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