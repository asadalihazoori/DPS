import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Theme from '../../theme/theme'
import GeneralHeader from '../../components/Headers/GeneralHeader'
import { styles } from './styles'

const Notifications = () => {
    return (
        <SafeAreaView style={Theme.SafeArea} >
            <GeneralHeader title={'Notifications'} />

            <View style={styles.container}>
                <Text>Pending...</Text>

            </View>

        </SafeAreaView>
    )
}

export default Notifications