import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Theme from '../../../theme/theme'
import GeneralHeader from '../../../components/Headers/GeneralHeader'
import { styles } from './styles'
import { useSelector } from 'react-redux'
import { Avatar } from 'react-native-paper'
import { SvgXml } from 'react-native-svg'
import { DrawerIcons } from '../../../assets/SvgIcons/DrawerIcons'
import { FontStyle } from '../../../theme/FontStyle'
import { ProfileIcons } from '../../../assets/SvgIcons/ProfileIcons'
import { COLORS } from '../../../theme/colors'
import { buildWorkletsHash } from 'react-native-reanimated/lib/typescript/reanimated2/hook/utils'
import ProfileItem from '../../../components/Helpers/ProfileItem'

const Profile = ({ navigation }) => {

    const profileData = useSelector((state) => state.employeeProfile.data);
    return (
        <SafeAreaView style={Theme.SafeArea}>
            <GeneralHeader title={'Employee Profile'} navigation={navigation} />

            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.mainView}>

                    <View style={styles.imageView}>
                        <View>
                            <Avatar.Image
                                source={{ uri: `data:image/jpeg;base64,${profileData?.image}` }}
                                size={90}
                            />
                            <View style={styles.cameraIconView}>
                                <SvgXml xml={DrawerIcons.camera} />
                            </View>
                        </View>

                        <View style={{ marginTop: 12 }}>
                            <Text style={[FontStyle.Regular14, { color: COLORS.darkBlack }]}>{profileData?.name}</Text>
                        </View>
                        <View style={{ marginTop: 4 }}>
                            <Text style={[FontStyle.Regular12, { color: '#B2BBBB' }]}>{profileData?.job_title}</Text>
                        </View>

                    </View>

                    <View style={styles.featuresView}>

                        <ProfileItem
                            icon={ProfileIcons.person}
                            title={'Personal Information'}
                            caption={'See your information here'}
                            onPress={() => navigation.navigate('EmployeeProfile', { route: 0 })}
                        />

                        <ProfileItem
                            icon={ProfileIcons.education}
                            title={'Educational Details'}
                            caption={'See your Details here'}
                            onPress={() => navigation.navigate('EmployeeProfile', { route: 2 })}
                        />

                        <ProfileItem
                            icon={ProfileIcons.experience}
                            title={'Past Experience Details'}
                            caption={'See your Details here'}
                            onPress={() => navigation.navigate('EmployeeProfile', { route: 3 })}
                        />

                        <ProfileItem
                            icon={ProfileIcons.notification}
                            title={'Notifications'}
                            caption={'See your Details here'}
                            onPress={() => { }}
                        />

                        <ProfileItem
                            icon={ProfileIcons.requests}
                            title={'Requests'}
                            caption={'See your All requests here'}
                            onPress={() => { }}
                            rightIcon={true}
                        />

                        <ProfileItem
                            icon={ProfileIcons.privacy}
                            title={'Privacy and Policy'}
                            caption={'Change your Details here'}
                            onPress={() => { }}
                            rightIcon={true}
                        />


                    </View>

                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default Profile