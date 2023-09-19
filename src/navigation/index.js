import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './DrawerNavigation';
import Login from '../screens/Login';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>

                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='DrawerNavigation' component={DrawerNavigation} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation