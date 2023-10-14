import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import { Leave_Details, UpdateProfile } from '../screens';
import DrawerNavigation from './DrawerNavigation';
import Login from '../screens/AuthScreens/Login';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>

                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='DrawerNavigation' component={DrawerNavigation} />
                <Stack.Screen name='LeaveDetails' component={Leave_Details} />
                <Stack.Screen name='UpdateProfile' component={UpdateProfile} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation