import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './DrawerNavigation';
import Login from '../screens/Login';
import { Leave_Details } from '../screens';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='DrawerNavigation' screenOptions={{ headerShown: false }}>

                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='DrawerNavigation' component={DrawerNavigation} />
                <Stack.Screen name='LeaveDetails' component={Leave_Details} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation