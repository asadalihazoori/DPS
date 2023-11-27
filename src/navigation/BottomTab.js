import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import { Attendance, Dashboard, EmployeePayslip, EmployeeProfile, Leaves, Notifications, Profile, Punch } from '../screens';
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
                                <SvgXml xml={BottomTabIcons.dashboard} />
                            </View>
                            :
                            <SvgXml xml={BottomTabIcons.dashboard} />
                    ),
                }}
                name="Dashboard" component={Dashboard} />

            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused }) => (

                        focused ?
                            <View style={{ backgroundColor: '#4c4c4c', height: 34, width: 34, borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
                                <SvgXml xml={BottomTabIcons.bell} />
                            </View>
                            :
                            <SvgXml xml={BottomTabIcons.bell} />
                    ),
                }}
                name="Notifications" component={Notifications} />

            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused }) => (

                        focused ?
                            <View style={{ backgroundColor: '#4c4c4c', height: 34, width: 34, borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
                                <SvgXml xml={BottomTabIcons.attendance} />
                            </View>
                            :
                            <SvgXml xml={BottomTabIcons.attendance} />
                    ),
                }}
                name="Attendance" component={Attendance} />

            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused }) => (


                        focused ?
                            <View style={{ backgroundColor: '#4c4c4c', height: 34, width: 34, borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
                                <SvgXml xml={BottomTabIcons.exit} />
                            </View>
                            :
                            <SvgXml xml={BottomTabIcons.exit} />
                    ),
                }}
                name="Exit"
                component={Punch}
            />
        </Tab.Navigator>
    )
}

export default BottomTab