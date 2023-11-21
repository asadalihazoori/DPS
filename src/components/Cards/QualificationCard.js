import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontStyle } from '../../theme/FontStyle'

const QualificationCard = ({
    item
}) => {
    return (

        <View style={styles.cardView}>

            <View style={styles.itemView}>
                <Text style={styles.itemText}>{item?.qualification}</Text>

            </View>
            <View style={styles.itemView}>
                <Text style={styles.itemText}>{item?.institue}</Text>

            </View>
            <View style={styles.itemView}>
                <Text style={styles.itemText}>{item?.passing_year}</Text>

            </View>
        </View>
    )
}

export default QualificationCard

const styles = StyleSheet.create({

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

        // paddingHorizontal: 10,
        flexDirection: 'row',
        elevation: 4,

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