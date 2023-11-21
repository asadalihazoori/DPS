import { StyleSheet, Text, View, ActivityIndicator, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../theme/colors';
import { FontStyle } from '../theme/FontStyle';
import { fonts } from '../theme/fonts';

const LeaveTable = ({ header, data, loading, navigation }) => {

    const renderItems = () => {

        return data?.map((item, index) => {
            return (
                <TouchableOpacity
                    style={styles.row}
                    key={index}
                    onPress={() => {
                        navigation.navigate('LeaveRequets', { leaves_type: item?.leaves_type });
                    }}
                >

                    <Text style={[styles.cell, {
                        textAlign: 'auto'
                    }]}>{item?.leaves_type}</Text>
                    <Text style={styles.cell}>{item?.total_leaves}</Text>
                    <Text style={styles.cell}>{item?.leave_availed}</Text>
                    <Text style={styles.cell}>
                        {Number.isInteger(item?.leave_remaining)
                            ? item?.leave_remaining
                            : item?.leave_remaining.toFixed(2)}
                    </Text>
                </TouchableOpacity>
            );



        });
    };




    return (
        <View style={styles.container}>
            <View style={styles.row}>

                {header?.map((item, index) => (
                    <Text key={index} style={[styles.header, {
                        textAlign: index == 0 ? 'auto' : 'center'
                    }]}>
                        {item}
                    </Text>
                ))}

            </View>

            <>
                {loading ?
                    <ActivityIndicator size={'large'} style={{ marginTop: 50 }} /> :
                    data.length > 0 ?
                        <>
                            {renderItems()}
                        </>
                        :
                        <View style={styles.nullContainer}>
                            <Text style={styles.nullText}>No Record Found !</Text>
                        </View>
                }


            </>
        </View>
    )
}


export default LeaveTable

const styles = StyleSheet.create({

    container: {
        // borderWidth: 1,

    },


    header: {
        ...FontStyle.Regular14,
        fontWeight: '500',
        // borderWidth: 1,
        fontFamily: fonts.bold,
        flex: 1,
        textAlign: 'center',
        color: COLORS.black,

    },

    row: {
        flexDirection: 'row',
        // columnGap: 30,
        justifyContent: 'space-between',
        alignItems: 'center',
        // paddingHorizontal: 12,
        paddingVertical: 15,
        borderBottomColor: COLORS.lightGrey,

    },

    cell: {
        ...FontStyle.Regular14,
        fontWeight: '400',
        flex: 1,
        color: COLORS.black,
        // borderWidth: 1,
        textAlign: 'center',
    },

    nullContainer: {
        marginTop: 50,
        alignContent: 'center',
        textAlign: 'center',

    },

    nullText: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
        alignSelf: 'center'
    }

})