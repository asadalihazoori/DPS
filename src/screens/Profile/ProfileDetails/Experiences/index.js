import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import Theme from '../../../../theme/theme'
import { FontStyle } from '../../../../theme/FontStyle'
import ExperienceCard from '../../../../components/Cards/ExperienceCard'
Theme
FontStyle
ExperienceCard

const Experiences = () => {

    const headerData = ['Company', 'Designation', 'Experience'];

    // const profileData = useSelector((state) => state.employeeProfile.data);
    const experienceData = [
        {
            "company": "US-Apparel",
            "total": 0.7,
            "experience_from": "2016-03-01",
            "experience_to": "2016-11-01",
            "designation": "AM-HR"
        },
        {
            "company": "Asia Feeds",
            "total": 1.8,
            "experience_from": "2016-11-01",
            "experience_to": "2018-08-31",
            "designation": "DM-HR"
        }];

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

                    {experienceData?.map((item, index) => (
                        <ExperienceCard item={item} key={index} />))}

                </View>

            </ScrollView>
        </View>
    )
}

export default Experiences


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        // borderWidth: 1,
        marginHorizontal: 16,

    },

    headingView: {
        // borderWidth: 1,
        // marginTop: 24, //36,
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
        paddingVertical: 24,
        // borderRadius: 8,
        // borderBottomWidth: 1,
        // borderBottomColor: '#B2BBBB',
        // backgroundColor: '#FFF',
        flexDirection: 'row',
        // elevation: 4,
        ...Theme.Shadow


    },

});