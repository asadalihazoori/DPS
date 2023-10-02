import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { Avatar, Drawer } from 'react-native-paper'
import { useSelector } from 'react-redux'

const CustomDrawerContent = (props) => {

    const profileData = useSelector((state) => state.employeeProfile.data);
    return (
        <SafeAreaView style={styles.container}>
            <DrawerContentScrollView  {...props}>

                <View style={styles.drawerContent}>
                    <View>

                        <View style={{ width: '100%', backgroundColor: '#b0caed', height: 200 }}>
                            <Image source={require('../assets/background.jpg')} />
                        </View>
                        <View style={styles.userInfoSection}>

                            <Avatar.Image
                                source={{ uri: `data:image/jpeg;base64,${profileData.image}` }}
                                size={90}
                            />
                            <Text style={styles.title}>{profileData.name}</Text>
                            <Text style={styles.caption}>{profileData.job_title}</Text>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            // icon={({ color, size }) => (
                            //     <Icon name="home-outline" color={color} size={scale(size)} style={{ color: COLORS.blue }} />
                            // )}
                            label={() => <Text style={{ color: 'black' }}>Home</Text>}
                            onPress={() => {
                                props.navigation.navigate('Home');
                            }}
                        />
                        <DrawerItem
                            // icon={({ color, size }) => (
                            //     <Icon name="account-outline" color={color} size={scale(size)} style={{ color: COLORS.blue }} />
                            // )}
                            label={() => <Text style={{ color: 'black' }}>Profile</Text>}
                            onPress={() => {
                                props.navigation.navigate('EmployeeProfile');
                            }}
                        />
                        <DrawerItem
                            // icon={({ color, size }) => (
                            //     <Icon name="home-outline" color={color} size={scale(size)} style={{ color: COLORS.blue }} />
                            // )}
                            label={() => <Text style={{ color: 'black' }}>Payslip</Text>}
                            onPress={() => {
                                props.navigation.navigate('EmployeePayslip');
                            }}
                        />
                        <DrawerItem
                            // icon={({ color, size }) => (
                            //     <Icon name="home-outline" color={color} size={scale(size)} style={{ color: COLORS.blue }} />
                            // )}
                            label={() => <Text style={{ color: 'black' }}>Apply Medical Claims</Text>}
                            onPress={() => {
                                props.navigation.navigate('ApplyForMedicalClaims');
                            }}
                        />


                    </Drawer.Section>

                </View>
            </DrawerContentScrollView>
        </SafeAreaView>
    )
}

export default CustomDrawerContent

const styles = StyleSheet.create({

    container: {
        flex: 1,
        // borderWidth: 1,
    },

    drawerContent: {
        // borderWidth: 1,
        borderColor: 'green'
    },

    userInfoSection: {
        // borderWidth: 1,
        borderColor: 'red',
        paddingLeft: 14,

        position: 'absolute',
        bottom: 10, // Position it at the bottom
        // right: 0, 
        // position: 'absolute'
    },

    title: {
        fontSize: 14,
        marginTop: 6,
        fontWeight: 'bold',
        // borderWidth: 1,
        color: 'black',
        // flex:1
    },
    caption: {
        marginTop: 2,
        fontSize: 13,
        // lineHeight: 10,
        // borderWidth: 1
    },
})