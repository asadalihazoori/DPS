import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Avatar, Drawer, } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
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
            // {
            //     id: 3,
            //     name: "Location",
            //     navigate: "Attendance"
            // },
        ],
        leaves: [
            {
                id: 4,
                name: "Apply Leave",
                navigate: "Leaves",
                route: 0,
            },
            {
                id: 5,
                name: "Leave Balance",
                navigate: "Leaves",
                route: 1,
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
                name: "Loan Status",
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
        reports: [
            {
                id: 11,
                name: "Payslips",
                navigate: "Reports"
            },
            {
                id: 12,
                name: "Tax Certificte",
                navigate: "Reports"
            },
            {
                id: 13,
                name: "Tardiness Report",
                navigate: "Reports"
            },

        ],
        shifts: [
            {
                id: 14,
                name: "Change Shift",
                navigate: "Shifts"
            },
            {
                id: 15,
                name: "Shift Status",
                navigate: "Shifts"
            },
        ],
        overtimeTracking: [
            {
                id: 16,
                name: "Apply Request",
                navigate: "OvertimeTracking"
            },
            {
                id: 17,
                name: "Request Status",
                navigate: "OvertimeTracking"
            },
        ],
        timesheet: [
            {
                id: 18,
                name: "Add Tasks",
                navigate: "Timesheet"
            },
            {
                id: 19,
                name: "Timeheet Status",
                navigate: "Timesheet"
            },
        ],

    }


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
                                        size={60}
                                        style={[Theme.ImageShadow]}
                                    />
                                    :
                                    <View style={[Theme.ImageShadow, { backgroundColor: '#efeff2', height: 60, width: 60, borderRadius: 30, alignItems: 'center', justifyContent: 'center' }]}>
                                        <Icon name="account" size={40} color="#a9adc1" />
                                    </View>
                                    // {/* // <SvgXml xml={Icons.personIcon} style={Theme.ImageShadow} /> */}
                                }
                                {/* <View style={{ position: 'absolute', bottom: 0, right: 0 }}>
                                    <SvgXml xml={DrawerIcons.camera} />
                                </View> */}
                            </View>

                        </View>

                        <View style={{ marginTop: 12 }}>
                            <Text style={[FontStyle.Regular14, { color: '#0D1224' }]}>{profileData?.name}</Text>
                        </View>

                        {profileData?.job_id[1] &&
                            <View style={{ marginTop: 4 }}>
                                <Text style={[FontStyle.Regular12, { color: '#B2BBBB' }]}>{profileData?.job_id[1]}</Text>
                            </View>
                        }

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

                        <CustomDrawerItem
                            title={'Attendance'}
                            navigate={() => props.navigation.navigate('Attendance')}
                            icon={DrawerIcons.attendance}
                        />

                        {/* <CustomDrawerItem
                            title={'Attendance'}
                            navigate={(screen) => props.navigation.navigate(screen)}
                            icon={DrawerIcons.attendance}
                            extandable={true}
                            data={Menus.attendace}
                            onSelect={selectScreen}
                            selectedScreen={selectedScreen}
                        />

                        <CustomDrawerItem
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

                        />


                        <CustomDrawerItem
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
                        /> */}

                        {/* <CustomDrawerItem
                            title={'Reports'}
                            navigate={(screen) => props.navigation.navigate(screen)}
                            icon={DrawerIcons.leaves}
                            extandable={true}
                            data={Menus.reports}
                            onSelect={selectScreen}
                            selectedScreen={selectedScreen}
                        /> */}

                        {/* <CustomDrawerItem
                            title={'Shifts'}
                            navigate={() => props.navigation.navigate('Shifts')}
                            icon={DrawerIcons.shifts}
                        /> */}

                        {/* <CustomDrawerItem
                            title={'Shifts'}
                            navigate={(screen) => props.navigation.navigate(screen)}
                            icon={DrawerIcons.shifts}
                            extandable={true}
                            data={Menus.shifts}
                            onSelect={selectScreen}
                            selectedScreen={selectedScreen}
                        /> */}

                        {/* <CustomDrawerItem
                            title={'Payslip'}
                            navigate={() => props.navigation.navigate('Reports')}
                            icon={DrawerIcons.payslip}
                        /> */}

                        {/* <CustomDrawerItem
                            title={'Overtime Tracking'}
                            navigate={() => props.navigation.navigate('OvertimeTracking')}
                            icon={DrawerIcons.overTime}
                        /> */}

                        {/* <CustomDrawerItem
                            title={'Overtime Tracking'}
                            navigate={(screen) => props.navigation.navigate(screen)}
                            icon={DrawerIcons.overTime}
                            extandable={true}
                            data={Menus.overtimeTracking}
                            onSelect={selectScreen}
                            selectedScreen={selectedScreen}
                        /> */}

                        {/* <CustomDrawerItem
                            title={'Timesheet Management'}
                            navigate={() => props.navigation.navigate('Timesheet')}
                            icon={DrawerIcons.timeSheet}
                        /> */}

                        {/* <CustomDrawerItem
                            title={'Timesheet Management'}
                            navigate={(screen) => props.navigation.navigate(screen)}
                            icon={DrawerIcons.timeSheet}
                            extandable={true}
                            data={Menus.timesheet}
                            onSelect={selectScreen}
                            selectedScreen={selectedScreen}
                        /> */}

                    </View>

                </View>
            </DrawerContentScrollView>


            {/* <View style={styles.bottomDrawerSection}>

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
            </View> */}



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