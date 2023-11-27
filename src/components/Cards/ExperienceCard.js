import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontStyle } from '../../theme/FontStyle'
import Theme from '../../theme/theme'

const ExperienceCard = ({
    item
}) => {
    return (

        <View style={styles.cardView}>

            <View style={styles.itemView}>
                <Text style={styles.itemText}>{item?.company}</Text>

            </View>
            <View style={styles.itemView}>
                <Text style={styles.itemText}>{item?.designation}</Text>

            </View>
            <View style={styles.itemView}>
                <Text style={styles.itemText}>{item?.total}</Text>

            </View>
        </View>
    )
}

export default ExperienceCard

const styles = StyleSheet.create({

    cardView: {
        // borderWidth: 1,
        paddingVertical: 8,
        marginHorizontal: 10,
        marginBottom: 12,
        paddingVertical: 24,
        borderRadius: 8,
        // borderBottomWidth: 1,
        // borderBottomColor: '#B2BBBB',
        backgroundColor: '#FFF',

        // paddingHorizontal: 10,
        flexDirection: 'row',
        ...Theme.Shadow,


    },

    itemView: {
        flex: 1,
        justifyContent: 'center',
        // borderWidth: 1
    },

    itemText: {
        // flex: 1,
        ...FontStyle.Regular10,
        fontWeight: '500',
        textAlign: 'center',
        // borderWidth: 1
    },
})