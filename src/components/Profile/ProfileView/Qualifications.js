import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { FontStyle } from '../../../theme/FontStyle'
import QualificationCard from '../../Cards/QualificationCard'

const Qualifications = () => {

    const headerData = ['Qualification', 'Institue', 'Passing Year'];

    const profileData = useSelector((state) => state.employeeProfile.data);

    return (
        <View style={styles.container} >
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.headingView}>

                    {headerData?.map((item, index) => (
                        <Text key={index} style={[styles.headerText, FontStyle.Regular10]}>
                            {item}
                        </Text>
                    ))}

                </View>

                <View style={styles.bodyView}>

                    {profileData?.qualification?.map((item, index) => (
                        <QualificationCard item={item} key={index} />))}

                </View>

            </ScrollView>
        </View>
    )
}

export default Qualifications


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        // borderWidth: 1,

    },
    headingView: {
        // borderWidth: 1,
        marginTop: 24,//36,
        marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerText: {
        // borderWidth: 1,
        paddingVertical: 12,
        flex: 1,
        textAlign: 'center'

    },

    bodyView: {
        marginTop: 24,
        // borderWidth: 1,
    },

    itemText: {
        ...FontStyle.Regular10,
        fontWeight: '500',
        textAlign: 'center',
        // borderWidth: 1
    },
    itemView: {
        flex: 1,
        justifyContent: 'center',
        // borderWidth: 1
    },

    cardView: {
        // borderWidth: 1,
        paddingVertical: 8,
        marginHorizontal: 10,
        marginBottom: 12,
        borderRadius: 8,
        paddingVertical: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#B2BBBB',
        backgroundColor: '#FFF',
        flexDirection: 'row',
        elevation: 4,

    },

});