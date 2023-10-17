import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Avatar, Drawer } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { getBackgroundImage } from '../redux/backgrouund/actions/getBackgroundImage';
import { siginOut } from '../redux/users/actions/signOut';

const CustomDrawerContent = (props) => {

    const dispatch = useDispatch();
    const backgroundImage = useSelector((state) => state.backgroundImage.image);

    const launchLibrary = () => {

        dispatch(getBackgroundImage());

    }



    const profileData = useSelector((state) => state.employeeProfile.data);
    const uid = useSelector((state) => state.signin.uid);
    return (
        <SafeAreaView style={styles.container}>
            <DrawerContentScrollView  {...props} showsVerticalScrollIndicator={false}>

                <View style={styles.drawerContent}>
                    <View style={{}}>

                        <View style={{ width: '100%', backgroundColor: '#b0caed', height: 200, }}>

                            {backgroundImage ?
                                // <Image source={{ uri: `data:image/jpeg;base64,${backgroundImage}` }} height={200} />
                                <Image source={{ uri: backgroundImage }} height={200} />

                                :
                                <Image source={require('../assets/background.jpg')} />
                            }

                        </View>
                        <View style={styles.iconView}>
                            <TouchableOpacity onPress={launchLibrary}>
                                <Icon name='circle-edit-outline' size={30} style={{ color: "black" }} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.userInfoSection}>

                            <Avatar.Image
                                source={{ uri: `data:image/jpeg;base64,${profileData?.image}` }}
                                size={90}
                            />
                            <Text style={styles.title}>{profileData?.name}</Text>
                            <Text style={styles.caption}>{profileData?.job_title}</Text>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name="home"
                                    // color={color}
                                    size={size}
                                    style={{ color: "black" }}
                                />
                            )}
                            label={() => <Text style={{ color: 'black' }}>Home</Text>}
                            onPress={() => {
                                props.navigation.navigate('Home');
                            }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name="account-circle"
                                    // color={color}
                                    size={size}
                                    style={{ color: "black" }}
                                />
                            )}
                            label={() => <Text style={{ color: 'black' }}>Profile</Text>}
                            onPress={() => {
                                props.navigation.navigate('EmployeeProfile');
                            }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <MaterialIcons name="notifications-active"
                                    // color={color}
                                    size={size}
                                    style={{ color: "black" }}
                                />
                            )}
                            label={() => <Text style={{ color: 'black' }}>Holiday News</Text>}
                            onPress={() => {
                                props.navigation.navigate('HolidayNews');
                            }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name="account-check"
                                    // color={color}
                                    size={size}
                                    style={{ color: "black" }}
                                />
                            )}
                            label={() => <Text style={{ color: 'black' }}>Attendance</Text>}
                            onPress={() => {
                                props.navigation.navigate('Attendance');
                            }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name="exit-run"
                                    // color={color}
                                    size={size}
                                    style={{ color: "black" }}
                                />
                            )}
                            label={() => <Text style={{ color: 'black' }}>Leaves</Text>}
                            onPress={() => {
                                props.navigation.navigate('Leaves');
                            }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name="hand-extended"
                                    // color={color}
                                    size={size}
                                    style={{ color: "black" }}
                                />
                            )}
                            label={() => <Text style={{ color: 'black' }}>Loans</Text>}
                            onPress={() => {
                                props.navigation.navigate('Loans');
                            }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name="medical-bag"
                                    // color={color}
                                    size={size}
                                    style={{ color: "black" }}
                                />
                            )}
                            label={() => <Text style={{ color: 'black' }}>MedicalClaims</Text>}
                            onPress={() => {
                                props.navigation.navigate('MedicalClaim');
                            }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name="file-eye"
                                    // color={color}
                                    size={size}
                                    style={{ color: "black" }}
                                />
                            )}
                            label={() => <Text style={{ color: 'black' }}>Reports</Text>}
                            onPress={() => {
                                props.navigation.navigate('Reports');
                            }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <FontAwesome name="exchange"
                                    // color={color}
                                    size={size}
                                    style={{ color: "black" }}
                                />
                            )}
                            label={() => <Text style={{ color: 'black' }}>Shifts</Text>}
                            onPress={() => {
                                props.navigation.navigate('Shift');
                            }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <MaterialIcons name="password"
                                    // color={color}
                                    size={size}
                                    style={{ color: "black" }}
                                />
                            )}
                            label={() => <Text style={{ color: 'black' }}>Change Password</Text>}
                            onPress={() => {
                                props.navigation.navigate('ChangePassword');
                            }}
                        />


                    </Drawer.Section>

                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon name="logout"
                            // color={color}
                            size={size}
                            style={{ color: "black" }}
                        />
                    )}
                    label={() => <Text style={{ color: 'black' }}> Logout</Text>}
                    onPress={() => {
                        const navigation = props.navigation;
                        siginOut({ uid, navigation })
                    }}
                />
            </Drawer.Section>
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
        marginLeft: 14,

        position: 'absolute',
        bottom: 10, // Position it at the bottom
        // right: 0, 
        // position: 'absolute'
    },

    iconView: {
        position: 'absolute',
        right: 0,
        marginRight: 10,
        marginTop: 10

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

    bottomDrawerSection: {
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
    },
})