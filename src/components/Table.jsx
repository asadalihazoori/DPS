import { StyleSheet, Text, View, ActivityIndicator, TouchableOpacity } from 'react-native'
import React from 'react'

const Table = ({ header, data, attendance, leaves, leaves_availed, leaves_type, loans, claims, holiday, loading, navigation }) => {

    const renderItems = () => {
        return data?.map((item, index) => {
            switch (true) {
                case leaves:
                    return (
                        <TouchableOpacity
                            style={styles.row}
                            key={index}
                            onPress={() => {
                                navigation.navigate('LeaveDetails', { leaves_type: item?.leaves_type });
                                // console.log(item?.leaves_type);
                            }}
                        >

                            <Text style={styles.cell}>{item?.leaves_type}</Text>
                            <Text style={styles.cell}>{item?.total_leaves}</Text>
                            <Text style={styles.cell}>{item?.leave_availed}</Text>
                            <Text style={styles.cell}>
                                {Number.isInteger(item?.leave_remaining)
                                    ? item?.leave_remaining
                                    : item?.leave_remaining.toFixed(2)}
                            </Text>
                        </TouchableOpacity>
                    );

                case leaves_availed:

                    if (item.leaves_type === leaves_type){

                        return (
                            <View style={styles.row} key={index}>
                                <Text style={styles.cell}>{item?.date_from_ecube}</Text>
                                <Text style={styles.cell}>{item?.date_to_ecube}</Text>
                                <Text style={styles.cell}>{item?.days}</Text>
                                <Text style={styles.cell}>{item?.description}</Text>
                            </View>
                        );
                    }

                    return ;


                case loans:
                    return (
                        <View style={styles.row} key={index}>
                            <Text style={styles.cell}>{item?.date}</Text>
                            <Text style={styles.cell}>{item?.type}</Text>
                            <Text style={styles.cell}>{item?.amount}</Text>
                            <Text style={styles.cell}>{item?.remaining}</Text>
                            <Text style={styles.cell}>{item?.state}</Text>
                        </View>
                    );

                case claims:
                    return (
                        <View style={styles.row} key={index}>
                            <Text style={styles.cell}>{item?.date}</Text>
                            <Text style={styles.cell}>{item?.claim_type}</Text>
                            <Text style={styles.cell}>{item?.name}</Text>
                            <Text style={styles.cell}>{item?.apporve_amount}</Text>
                            <Text style={styles.cell}>{item?.state}</Text>
                        </View>
                    );

                case attendance:
                    return (
                        <View style={styles.row} key={index}>
                            <Text style={styles.cell}>{item?.date}</Text>
                            <Text style={styles.cell}>{parseFloat(item?.intime).toFixed(2)}</Text>
                            <Text style={styles.cell}>{parseFloat(item?.outtime).toFixed(2)}</Text>
                            <Text style={styles.cell}>
                                {item?.defaultstatus ? item?.defaultstatus : 'Present'}
                            </Text>
                        </View>
                    );

                case holiday:
                    return (
                        <View style={styles.row} key={index}>
                            <Text style={styles.cell}>{item?.remarks}</Text>
                            <Text style={styles.cell}>{item?.day}</Text>
                            <Text style={styles.cell}>{item?.date}</Text>
                        </View>
                    );

                //     default:
                //         return null; // Handle the default case if needed
            }
        });
    };




    return (
        <View style={styles.container}>
            <View style={styles.row}>

                {header?.map((item, index) => (
                    <Text key={index} style={[styles.header]}>
                        {item}
                    </Text>
                ))}

            </View>

            <>
                {loading ?
                    <ActivityIndicator size={'large'} /> :
                    <>
                        {renderItems()}
                    </>
                }
            </>
        </View>
    )
}

export default Table

const styles = StyleSheet.create({

    container: {
        // flex: 1,
        backgroundColor: '#ffffff',
        // borderWidth: 1,

    },

    header: {
        // marginLeft: 10,

        backgroundColor: 'grey',
        // flexDirection: 'row',
        // borderWidth: 1,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: 77,

        paddingHorizontal: 4,
        textAlign: 'center',
        paddingVertical: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        color: "#FFFFFF"
    },

    headerText: {
        fontWeight: 'bold',
        fontSize: 26,
        color: 'red'
    },

    row: {
        // borderWidth: 1,
        // borderColor: 'red',
        flexDirection: 'row',
        // columnGap: 30,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#DDDDDD',

    },

    cell: {
        fontSize: 14,
        width: 77,
        color: "#000000",
        alignContent: 'center',
        alignItems: 'center',
        // borderWidth: 1,
        // alignItems: 'center',
        // alignContent: 'flex-end',
        textAlign: 'center',
        borderColor: 'green'
    },

    nullContainer: {
        marginTop: 50,
        alignContent: 'center',
        textAlign: 'center',

    },

    text: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
        alignSelf: 'center'
    }

})