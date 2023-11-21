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
import { COLORS } from '../theme/colors';

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
                    <View >

                        <View style={{ width: '100%', height: 200, }}>

                            {backgroundImage ?
                                // <Image source={{ uri: `data:image/jpeg;base64,${backgroundImage}` }} height={200} />
                                <Image source={{ uri: backgroundImage }} height={200} />

                                :
                                <Image source={require('../assets/DrawerBackground.jpg')} />
                            }

                        </View>
                        <View style={styles.iconView}>
                            <TouchableOpacity onPress={launchLibrary}>
                                <Icon name='circle-edit-outline' size={30} style={{ color: COLORS.black }} />
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
                            icon={({ size }) => (
                                <Icon name="home"
                                    size={size}
                                    style={styles.iconColor}
                                />
                            )}
                            label={() => <Text style={styles.labelColor}>Home</Text>}
                            onPress={() => {
                                props.navigation.navigate('Home');
                            }}
                        />
                        <DrawerItem
                            icon={({ size }) => (
                                <Icon name="account-circle"

                                    size={size}
                                    style={styles.iconColor}
                                />
                            )}
                            label={() => <Text style={styles.labelColor}>Profile</Text>}
                            onPress={() => {
                                props.navigation.navigate('EmployeeProfile');
                            }}
                        />
                        <DrawerItem
                            icon={({ size }) => (
                                <MaterialIcons name="notifications-active"

                                    size={size}
                                    style={styles.iconColor}
                                />
                            )}
                            label={() => <Text style={styles.labelColor}>Holiday News</Text>}
                            onPress={() => {
                                props.navigation.navigate('HolidayNews');
                            }}
                        />
                        <DrawerItem
                            icon={({ size }) => (
                                <Icon name="account-check"

                                    size={size}
                                    style={styles.iconColor}
                                />
                            )}
                            label={() => <Text style={styles.labelColor}>Attendance</Text>}
                            onPress={() => {
                                props.navigation.navigate('Attendance');
                            }}
                        />
                        <DrawerItem
                            icon={({ size }) => (
                                <Icon name="exit-run"

                                    size={size}
                                    style={styles.iconColor}
                                />
                            )}
                            label={() => <Text style={styles.labelColor}>Leaves</Text>}
                            onPress={() => {
                                props.navigation.navigate('Leaves');
                            }}
                        />
                        <DrawerItem
                            icon={({ size }) => (
                                <Icon name="hand-extended"

                                    size={size}
                                    style={styles.iconColor}
                                />
                            )}
                            label={() => <Text style={styles.labelColor}>Loans</Text>}
                            onPress={() => {
                                props.navigation.navigate('Loans');
                            }}
                        />
                        <DrawerItem
                            icon={({ size }) => (
                                <Icon name="medical-bag"

                                    size={size}
                                    style={styles.iconColor}
                                />
                            )}
                            label={() => <Text style={styles.labelColor}>MedicalClaims</Text>}
                            onPress={() => {
                                props.navigation.navigate('MedicalClaim');
                            }}
                        />
                        <DrawerItem
                            icon={({ size }) => (
                                <Icon name="file-eye"

                                    size={size}
                                    style={styles.iconColor}
                                />
                            )}
                            label={() => <Text style={styles.labelColor}>Reports</Text>}
                            onPress={() => {
                                props.navigation.navigate('Reports');
                            }}
                        />
                        <DrawerItem
                            icon={({ size }) => (
                                <FontAwesome name="exchange"

                                    size={size}
                                    style={styles.iconColor}
                                />
                            )}
                            label={() => <Text style={styles.labelColor}>Shifts</Text>}
                            onPress={() => {
                                props.navigation.navigate('Shift');
                            }}
                        />
                        <DrawerItem
                            icon={({ size }) => (
                                <MaterialIcons name="password"

                                    size={size}
                                    style={styles.iconColor}
                                />
                            )}
                            label={() => <Text style={styles.labelColor}>Change Password</Text>}
                            onPress={() => {
                                props.navigation.navigate('ChangePassword');
                            }}
                        />


                    </Drawer.Section>

                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({ size }) => (
                        <Icon name="logout"

                            size={size}
                            style={styles.iconColor}
                        />
                    )}
                    label={() => <Text style={styles.labelColor}> Logout</Text>}
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
    },

    drawerContent: {
    },

    userInfoSection: {
        marginLeft: 14,

        position: 'absolute',
        bottom: 10,
    },

    iconView: {
        position: 'absolute',
        right: 0,
        marginRight: 10,
        marginTop: 10

    },

    iconColor: {
        color: COLORS.black
    },

    labelColor: {
        color: COLORS.black
    },

    title: {
        fontSize: 14,
        marginTop: 6,
        fontWeight: 'bold',
        color: COLORS.black,
    },
    caption: {
        marginTop: 2,
        fontSize: 13,
    },

    bottomDrawerSection: {
        borderTopColor: COLORS.lightGrey,
        borderTopWidth: 1,
    },
})