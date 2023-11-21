import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import { LeaveRequets, Leave_Details, Location, Onbording1, Onbording2, PayslipDetails, Punch, UpdateProfile } from '../screens';
import DrawerNavigation from './DrawerNavigation';
import Login from '../screens/AuthScreens/Login';
import BottomTab from './BottomTab';
// import DocumentPicker from '../components/FilePicker';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='DrawerNavigation' screenOptions={{ headerShown: false }}>

                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='Onbording1' component={Onbording1} />
                <Stack.Screen name='Onbording2' component={Onbording2} />
                <Stack.Screen name='DrawerNavigation' component={DrawerNavigation} />
                <Stack.Screen name='BottomTab' component={BottomTab} />

                <Stack.Screen name='LeaveDetails' component={Leave_Details} />
                <Stack.Screen name='LeaveRequets' component={LeaveRequets} />
                <Stack.Screen name='UpdateProfile' component={UpdateProfile} />

                <Stack.Screen name='PayslipDetails' component={PayslipDetails} />
                <Stack.Screen name='Punch' component={Punch} />
                <Stack.Screen name='Location' component={Location} />


                {/* <Stack.Screen name='DocumentPicker' component={DocumentPicker} /> */}

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation