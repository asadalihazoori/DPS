import { SafeAreaView, Text } from 'react-native'
import React, { useEffect } from 'react'

const Logout = ({ navigation }) => {

    useEffect(() => {
        navigation.replace('Login');
    }, [])

    return (
        <SafeAreaView>
            {/* <Text>Logout</Text> */}
        </SafeAreaView>
    )
}

export default Logout