import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import { Attendance, Dashboard, EmployeePayslip, EmployeeProfile, Leaves, Profile } from '../screens';
import { COLORS } from '../theme/colors';
import { SvgXml } from 'react-native-svg';
import { DrawerIcons } from '../assets/SvgIcons/DrawerIcons';
import { BottomTabIcons } from '../assets/SvgIcons/BottomTabIcons';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator
            initialRouteName="Dashboard"
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false
                // tabBarStyle: styles.BottomTabContainer,
                // tabBarHideOnKeyboard: true,
                // headerTintColor: "white",
                // headerTitleAlign: "center",
                // headerStyle: {
                //     backgroundColor: COLORS.darkBlack
                // }

            }}
        >
            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused }) => (

                        focused ?
                            <View style={{ backgroundColor: '#4c4c4c', height: 34, width: 34, borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
                                <SvgXml xml={DrawerIcons.dashboard} />
                            </View>
                            :
                            <SvgXml xml={DrawerIcons.dashboard} />
                    ),
                }}
                name="Dashboard" component={Dashboard} />

            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused }) => (

                        focused ?
                            <View style={{ backgroundColor: '#4c4c4c', height: 34, width: 34, borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
                                <SvgXml xml={DrawerIcons.personal} />
                            </View>
                            :
                            <SvgXml xml={DrawerIcons.personal} />
                    ),
                }}
                name="Profile" component={Profile} />

            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused }) => (

                        focused ?
                            <View style={{ backgroundColor: '#4c4c4c', height: 34, width: 34, borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
                                <SvgXml xml={DrawerIcons.attendance} />
                            </View>
                            :
                            <SvgXml xml={DrawerIcons.attendance} />
                    ),
                }}
                name="Attendance" component={Attendance} />

            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused }) => (


                        focused ?
                            <View style={{ backgroundColor: '#4c4c4c', height: 34, width: 34, borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
                                <SvgXml xml={DrawerIcons.leaves} />
                            </View>
                            :
                            <SvgXml xml={DrawerIcons.leaves} />
                    ),
                }}
                name="EmployeePayslip" component={EmployeePayslip} />
        </Tab.Navigator>
    )
}

export default BottomTab