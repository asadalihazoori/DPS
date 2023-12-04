import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Avatar, Drawer, MD3TypescaleKey } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { getBackgroundImage } from '../redux/backgrouund/actions/getBackgroundImage';
import { siginOut } from '../redux/users/actions/signOut';
import { COLORS } from '../theme/colors';
import { SvgXml } from 'react-native-svg';
import { DrawerIcons } from '../assets/SvgIcons/DrawerIcons';
import { FontStyle } from '../theme/FontStyle';
import CustomDrawerItem from './Drawer/DrawerItem';
import Theme from '../theme/theme';
import { Icons } from '../assets/SvgIcons/Icons';
import { logout_user } from '../redux/users/user.actions';

const CustomDrawer1 = (props) => {

    const dispatch = useDispatch();
    const backgroundImage = useSelector((state) => state.backgroundImage.image);

    // const launchLibrary = () => {

    //     dispatch(getBackgroundImage());

    // }



    const profileData = useSelector((state) => state.employeeProfile.data);
    const uid = useSelector((state) => state.signin.uid);
    const [selectedScreen, selectScreen] = useState();
    const Menus = {
        attendace: [
            {
                id: 1,
                name: "Attendance",
                navigate: "Attendance"
            },
            {
                id: 2,
                name: "History",
                navigate: "Attendance"
            },
            {
                id: 3,
                name: "Location",
                navigate: "Attendance"
            },
        ],
        leaves: [
            {
                id: 4,
                name: "Apply Leave",
                navigate: "Leaves"
            },
            {
                id: 5,
                name: "Leave Balance",
                navigate: "Leaves"
            },
        ],
        loans: [
            {
                id: 6,
                name: "Apply",
                navigate: "Loans"
            },
            {
                id: 7,
                name: "Approved",
                navigate: "Loans"
            },
            {
                id: 8,
                name: "Report",
                navigate: "Loans"
            },
        ],
        medicalClaims: [
            {
                id: 9,
                name: "Apply For Medical Claims",
                navigate: "MedicalClaim"
            },
            {
                id: 10,
                name: "Claim Status",
                navigate: "MedicalClaim"
            },

        ],

    }

    // console.log("drawer", selectedScreen)

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <DrawerContentScrollView  {...props} showsVerticalScrollIndicator={false} style={{

            }}>

                <View style={styles.drawerContent}>


                    <View style={{ marginVertical: 24, }}>
                        <View style={{ alignItems: 'flex-start' }}>

                            <View style={{}}>
                                {profileData?.image_1920 ?

                                    <Avatar.Image
                                        source={{ uri: `data:image/jpeg;base64,${profileData?.image_1920}` }}
                                        size={90}
                                    />
                                    :
                                    <SvgXml xml={Icons.personIcon} />
                                }
                                {/* <View style={{ position: 'absolute', bottom: 0, right: 0 }}>
                                    <SvgXml xml={DrawerIcons.camera} />
                                </View> */}
                            </View>
                        </View>

                        <View style={{ marginTop: 12 }}>
                            <Text style={[FontStyle.Regular14, { color: '#0D1224' }]}>{profileData?.name}</Text>
                        </View>
                        <View style={{ marginTop: 4 }}>
                            <Text style={[FontStyle.Regular12, { color: '#B2BBBB' }]}>{profileData?.job_id[1]}</Text>
                        </View>

                    </View>

                    <View style={styles.drawerSection}>

                        <CustomDrawerItem
                            title={'Dashboard'}
                            navigate={() => props.navigation.navigate('BottomTab')}
                            icon={DrawerIcons.dashboard}
                        />

                        <CustomDrawerItem
                            title={'Personal Information'}
                            navigate={() => props.navigation.navigate('Profile')}
                            icon={DrawerIcons.personal}
                        />

                        {/* <CustomDrawerItem
                            title={'Attendance'}
                            navigate={(screen) => props.navigation.navigate(screen)}
                            icon={DrawerIcons.attendance}
                            extandable={true}
                            data={Menus.attendace}
                            onSelect={selectScreen}
                            selectedScreen={selectedScreen}
                        /> */}
                        <CustomDrawerItem
                            title={'Attendance'}
                            navigate={() => props.navigation.navigate('Attendance')}
                            icon={DrawerIcons.attendance}
                        />


                        {/* <CustomDrawerItem
                            title={'Leaves'}
                            navigate={(screen) => props.navigation.navigate(screen)}
                            icon={DrawerIcons.leaves}
                            extandable={true}
                            data={Menus.leaves}
                            onSelect={selectScreen}
                            selectedScreen={selectedScreen}
                        />

                        <CustomDrawerItem
                            title={'Loans/Advances'}
                            navigate={(screen) => props.navigation.navigate(screen)}
                            icon={DrawerIcons.loans}
                            extandable={true}
                            data={Menus.loans}
                            onSelect={selectScreen}
                            selectedScreen={selectedScreen}

                        /> */}

                        {/* <CustomDrawerItem
                            title={'Medical claims'}
                            navigate={(screen) => props.navigation.navigate(screen)}
                            icon={DrawerIcons.medical}
                            extandable={true}
                            data={Menus.medicalClaims}
                            onSelect={selectScreen}
                            selectedScreen={selectedScreen}
                        /> */}

                        {/* <CustomDrawerItem
                            title={'Reports'}
                            navigate={() => props.navigation.navigate('Reports')}
                            icon={DrawerIcons.leaves}
                        />

                        <CustomDrawerItem
                            title={'Shifts'}
                            navigate={() => props.navigation.navigate('Shifts')}
                            icon={DrawerIcons.shifts}
                        /> */}

                        <CustomDrawerItem
                            title={'Payslip'}
                            navigate={() => props.navigation.navigate('EmployeePayslip')}
                            icon={DrawerIcons.payslip}
                        />

                        {/* <CustomDrawerItem
                            title={'Overtime Tracking'}
                            navigate={() => props.navigation.navigate('Home')}
                            icon={DrawerIcons.overTime}
                        />

                        <CustomDrawerItem
                            title={'Timesheet Management'}
                            navigate={() => props.navigation.navigate('Home')}
                            icon={DrawerIcons.timeSheet}
                        /> */}

                    </View>

                </View>
            </DrawerContentScrollView>


            <View style={styles.bottomDrawerSection}>

                <CustomDrawerItem
                    title={'Logout'}
                    navigate={() => {
                        const navigation = props.navigation;
                        dispatch(logout_user(false))
                        navigation.replace('Login')
                        // siginOut({ uid, navigation })
                    }}
                    icon={DrawerIcons.logout}
                    style={{ color: COLORS.logout, fontWeight: '700', }}
                // marginTop={107}
                />
            </View>



            {/* 
                        <DrawerItem
                            icon={() => <SvgXml xml={DrawerIcons.dashboard} />}
                            label={() => <Text style={[FontStyle.Regular14_500]}>Dashboard</Text>}
                            onPress={() => props.navigation.navigate('Home')}
                        />

                        <DrawerItem
                            icon={() => <SvgXml xml={DrawerIcons.personal} />}
                            label={() => <Text style={[FontStyle.Regular14_500]}>Personal Information</Text>}
                            onPress={() => props.navigation.navigate('EmployeeProfile')}
                        />
                        <DrawerItem
                            icon={() => <SvgXml xml={DrawerIcons.attendance} />}
                            label={() => <Text style={[FontStyle.Regular14_500,]}>Attendance</Text>}
                            onPress={() => props.navigation.navigate('EmployeeProfile')}
                        />
                        <DrawerItem
                            icon={() => <SvgXml xml={DrawerIcons.leaves} />}
                            label={() => <Text style={[FontStyle.Regular14_500]}>Leaves</Text>}
                            onPress={() => props.navigation.navigate('EmployeeProfile')}
                        />

                        <DrawerItem
                            icon={() => <SvgXml xml={DrawerIcons.personal} />}
                            label={() => <Text style={FontStyle.Regular14_500}>Loans/Advances</Text>}
                            onPress={() => props.navigation.navigate('EmployeeProfile')}
                        />
                        <DrawerItem
                            icon={() => <SvgXml xml={DrawerIcons.medical} />}
                            label={() => <Text style={FontStyle.Regular14_500}>Medical claims</Text>}
                            onPress={() => props.navigation.navigate('EmployeeProfile')}
                        />
                        <DrawerItem
                            icon={() => <SvgXml xml={DrawerIcons.reports} />}
                            label={() => <Text style={FontStyle.Regular14_500}>Reports</Text>}
                            onPress={() => props.navigation.navigate('EmployeeProfile')}
                        />
                        <DrawerItem
                            icon={() => <SvgXml xml={DrawerIcons.shifts} />}
                            label={() => <Text style={FontStyle.Regular14_500}>Shifts</Text>}
                            onPress={() => props.navigation.navigate('EmployeeProfile')}
                        />
                        <DrawerItem
                            icon={() => <SvgXml xml={DrawerIcons.overTime} />}
                            label={() => <Text style={FontStyle.Regular14_500}>Overtime Tracking</Text>}
                            onPress={() => props.navigation.navigate('EmployeeProfile')}
                        />
                        <DrawerItem
                            icon={() => <SvgXml xml={DrawerIcons.timeSheet} />}
                            label={() => <Text style={FontStyle.Regular14_500}>Timesheet Management</Text>}
                            onPress={() => props.navigation.navigate('EmployeeProfile')}
                        />
                        <DrawerItem
                            style={{ marginTop: 86 }}
                            icon={() => <SvgXml xml={DrawerIcons.logout} />}
                            label={() => <Text style={[FontStyle.Regular14_500, { color: COLORS.logout, fontWeight: '700' }]}>Logout</Text>}
                            onPress={() => props.navigation.navigate('EmployeeProfile')}
                        /> */}

            {/* 
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
                        /> */}

            {/* 
                    </View>

                </View>
            </DrawerContentScrollView> */}
            {/* <Drawer.Section style={styles.bottomDrawerSection}>
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
            </Drawer.Section> */}
        </SafeAreaView>
    )
}

export default CustomDrawer1

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    drawerContent: {
        flex: 1,
        marginHorizontal: 16,
        // borderWidth:1,
    },

    drawerSection: {
        flex: 1,
        // borderWidth: 1,

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
        marginHorizontal: 16,
    },
})