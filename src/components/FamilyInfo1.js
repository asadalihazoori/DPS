import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const FamilyInfo = ({ employee }) => {
    const { father, mother, children, spouses } = employee;

    return (
        <View style={styles.container}>
            {/* <Image
        source={require('./family.jpg')} // Replace with your custom family image
        style={styles.familyImage}
      /> */}
            <View style={styles.header}>
                <Icon name="heart" size={32} color="#e74c3c" />
                <Text style={styles.headerText}>Family Information</Text>
            </View>
            <View style={styles.familyMember}>
                <Text style={styles.label}>Father:</Text>
                <Text style={styles.name}>{father.name}</Text>
                <Text style={styles.status}>{father.live_status ? 'Alive' : 'Deceased'}</Text>
            </View>
            <View style={styles.familyMember}>
                <Text style={styles.label}>Mother:</Text>
                <Text style={styles.name}>{mother.name}</Text>
                <Text style={styles.status}>{mother.live_status ? 'Alive' : 'Deceased'}</Text>
            </View>
            <View style={styles.familyMember}>
                <Text style={styles.label}>Children:</Text>
                {children.map((child, index) => (
                    <Text key={index} style={styles.name}>
                        {child.name}
                    </Text>
                ))}
            </View>
            <View style={styles.familyMember}>
                <Text style={styles.label}>Spouses:</Text>
                {profileData?.spouse_info.map((spouse, index) => (
                    <Text key={index} style={styles.name}>
                        {spouse.name}
                    </Text>
                ))}
            </View>


            {/* <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Show Love</Text>
      </TouchableOpacity> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 20,
        margin: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
    },
    familyImage: {
        width: 150,
        height: 150,
        marginBottom: 10,
        resizeMode: 'cover',
        borderRadius: 75,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#e74c3c',
        marginLeft: 10,
    },
    familyMember: {
        marginBottom: 12,
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    name: {
        fontSize: 20,
        color: '#555',
    },
    status: {
        color: '#888',
    },
    button: {
        backgroundColor: '#e74c3c',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 30,
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default FamilyInfo;
