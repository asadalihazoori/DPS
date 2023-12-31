import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import { EmployeeProfile, LeaveRequets, Leave_Details, Location, LocationOld, Onbording1, Onbording2, PayslipDetails, Profile, Punch, UpdateProfile } from '../screens';
import DrawerNavigation from './DrawerNavigation';
import Login from '../screens/AuthScreens/Login';
import BottomTab from './BottomTab';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

const Navigation = () => {

    const user = useSelector(state => state.signin)
    console.log(user);
    return (
        <NavigationContainer>
            <Stack.Navigator
                // initialRouteName='Onbording1' 
                initialRouteName={user.firstLogin ? user.loggedIn ? 'DrawerNavigation' : 'Login' : 'Onbording1'}
                screenOptions={{ headerShown: false }}>

                <Stack.Screen name='Onbording1' component={Onbording1} />
                <Stack.Screen name='Onbording2' component={Onbording2} />
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='DrawerNavigation' component={DrawerNavigation} />
                <Stack.Screen name='BottomTab' component={BottomTab} />
                <Stack.Screen name='Location' component={Location} />
                <Stack.Screen name='LocationOld' component={LocationOld} />
                <Stack.Screen name='EmployeeProfile' component={EmployeeProfile} />

                <Stack.Screen name='LeaveDetails' component={Leave_Details} />
                <Stack.Screen name='LeaveRequets' component={LeaveRequets} />
                <Stack.Screen name='UpdateProfile' component={UpdateProfile} />

                <Stack.Screen name='PayslipDetails' component={PayslipDetails} />
                {/* <Stack.Screen name='Punch' component={Punch} /> */}
                {/* <Stack.Screen name='DocumentPicker' component={DocumentPicker} /> */}



            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation