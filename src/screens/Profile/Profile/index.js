import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
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
import ProfileItem from '../../../components/Helpers/ProfileItem'
import { Icons } from '../../../assets/SvgIcons/Icons'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Profile = ({ navigation }) => {

    const profileData = useSelector((state) => state.employeeProfile.data);
    const [requests, setOpenRequests] = useState(false);
    const [privacy, setOpenPrivacy] = useState(false);

    return (
        <SafeAreaView style={Theme.SafeArea}>
            <GeneralHeader title={'Employee Profile'} navigation={navigation} />

            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.mainView}>

                    <View style={styles.imageView}>
                        <View style={{}}>
                            {profileData?.image_1920 ?

                                <Avatar.Image
                                    source={{ uri: `data:image/jpeg;base64,${profileData?.image_1920}` }}
                                    size={60}
                                    style={[Theme.ImageShadow]}
                                />
                                :
                                <View style={[Theme.ImageShadow, { backgroundColor: '#efeff2', height: 60, width: 60, borderRadius: 30, alignItems: 'center', justifyContent: 'center' }]}>
                                    <Icon name="account" size={40} color="#a9adc1" />
                                </View>
                            }
                            {/* <View style={styles.cameraIconView}>
                                <SvgXml xml={DrawerIcons.camera} />
                            </View> */}
                        </View>

                        <View style={{ marginTop: 12 }}>
                            <Text style={[FontStyle.Regular14, { color: COLORS.darkBlack }]}>{profileData?.name}</Text>
                        </View>
                        {profileData?.job_id[1] &&
                            <View style={{ marginTop: 4 }}>
                                <Text style={[FontStyle.Regular12, { color: '#B2BBBB' }]}>{profileData?.job_id[1]}</Text>
                            </View>
                        }

                    </View>

                    <View style={styles.featuresView}>

                        <ProfileItem
                            icon={ProfileIcons.person}
                            title={'Personal Information'}
                            caption={'Job Details, Email, Peronal Info. etc.'}
                            onPress={() => navigation.navigate('EmployeeProfile')}
                        // onPress={() => navigation.navigate('EmployeeProfile', { route: 0 })}
                        />

                        {/* <ProfileItem
                            icon={ProfileIcons.education}
                            title={'Educational Details'}
                            caption={'Qualification, Certifications, etc.'}
                            onPress={() => navigation.navigate('EmployeeProfile', { route: 2 })}
                        />

                        <ProfileItem
                            icon={ProfileIcons.experience}
                            title={'Past Experience Details'}
                            caption={'Experience,'}
                            onPress={() => navigation.navigate('EmployeeProfile', { route: 3 })}
                        />

                        <ProfileItem
                            icon={ProfileIcons.notification}
                            title={'Notifications'}
                            caption={'See your Notifications & updates here'}
                            onPress={() => { }}
                        />

                        <ProfileItem
                            icon={ProfileIcons.requests}
                            title={'Requests'}
                            caption={'User’s requests and status'}
                            onPress={() => setOpenRequests(!requests)}
                            rightIcon={requests ? ProfileIcons.downArrow : ProfileIcons.right_Arrow}
                            container={styles.itemView}
                        />

                        {requests &&


                            <View style={styles.dropDowView}>
                                <TouchableOpacity
                                    activeOpacity={0.5}
                                    // onPress={()=> navigation.navigate('')}
                                    style={styles.dropDown}>
                                    <Text style={styles.dropDownText}>Apply Leaves</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={0.5}
                                    // onPress={()=> navigation.navigate('')}
                                    style={styles.dropDown}>
                                    <Text style={styles.dropDownText}>Medical claims</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={0.5}
                                    // onPress={()=> navigation.navigate('')}
                                    style={styles.dropDown}>
                                    <Text style={styles.dropDownText}>Change shift</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={0.5}
                                    // onPress={()=> navigation.navigate('')}
                                    style={styles.dropDown}>
                                    <Text style={styles.dropDownText}>Payslip</Text>
                                </TouchableOpacity>

                            </View>
                        }
                        <ProfileItem
                            icon={ProfileIcons.privacy}
                            title={'Privacy and Policy'}
                            caption={'Company policies, Users privacy, FAQs'}
                            onPress={() => setOpenPrivacy(!privacy)}
                            rightIcon={privacy ? ProfileIcons.downArrow : ProfileIcons.right_Arrow}
                            container={styles.itemView}
                        />

                        {privacy &&

                            <View style={styles.dropDowView}>
                                <TouchableOpacity
                                    activeOpacity={0.5}
                                    // onPress={()=> navigation.navigate('')}
                                    style={styles.dropDown}>
                                    <Text style={styles.dropDownText}>Change Password</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={0.5}
                                    // onPress={()=> navigation.navigate('')}
                                    style={styles.dropDown}>
                                    <Text style={styles.dropDownText}>Use Two-Factor Authentication</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={0.5}
                                    // onPress={()=> navigation.navigate('')}
                                    style={styles.dropDown}>
                                    <Text style={styles.dropDownText}>Save your login info.</Text>
                                </TouchableOpacity>

                            </View>
                        } */}


                    </View>

                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default Profile