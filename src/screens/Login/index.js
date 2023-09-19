import { View, Text, Button } from 'react-native'
import React from 'react'

const Login = ({ navigation }) => {
    return (
        <View style={{ flex: 1, padding: 50 }}>
            <Text> Login</Text>
            <Button onPress={() => { navigation.navigate('DrawerNavigation') }} title='Move to DrawerNavigation' />
        </View>
    )
}

export default Login