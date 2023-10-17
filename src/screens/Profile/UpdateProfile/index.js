import { Text, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import Header from '../../../components/Header'
import WrapperUpdateProfile from '../../../components/Profile/UpdateProfile/Wrapper'
import { ProfileProvider } from '../../../context/ProfileContext'

const UpdateProfile = ({ navigation }) => {

    return (

        <ProfileProvider navigation={navigation}>

            <SafeAreaView style={styles.container}>

                <Header title={'Update Profile'} />

                <WrapperUpdateProfile />

            </SafeAreaView>

        </ProfileProvider>

    )
}

export default UpdateProfile