import { SafeAreaView, Text, Image, FlatList, View, ScrollView, TouchableOpacity, Button } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getEmployeeProfile } from '../../../redux/profile/actions/getEmployeeProfile';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './styles';
import { Avatar } from 'react-native-paper'
import { TabBar, TabView } from 'react-native-tab-view';
import Qualifications from '../../../components/Profile/ProfileView/Qualifications';
import Experiences from '../../../components/Profile/ProfileView/Experiences';
import FamilyInfo from '../../../components/Profile/ProfileView/FamilyInfo.js';
import PersonalInfo from '../../../components/Profile/ProfileView/PersonalInfo';
import { ProfileProvider } from '../../../context/ProfileContext';
import { COLORS } from '../../../theme/colors';

const EmployeeProfileO = ({ navigation }) => {

    const profileData = useSelector((state) => state.employeeProfile.data);
    const uid = useSelector((state) => state.signin.uid);
    // const [loading, setLoading] = useState(true);

    // const dispatch = useDispatch();

    // useEffect(() => {
    //     // setLoading(true) 
    //     dispatch(getEmployeeProfile({
    //         uid,
    //         navigation
    //     }))

    // }, []) 


    const [index, setIndex] = React.useState(0);

    const [routes] = React.useState([
        { key: 'first', title: "Info" },
        { key: 'second', title: "Family" },
        { key: 'third', title: "Qual." },
        { key: 'fourth', title: "Exper." }
    ]);

    const renderTabBar = propss => (
        <TabBar
            {...propss}
            indicatorStyle={styles.TabViewCreateIndicator}
            style={styles.TabViewCreateContainer}
            activeColor="#000"
            inactiveColor="#7A7578"
            getLabelText={({ route }) => route.title}
        />
    );

    const RenderScene = (e, navigation) => {

        switch (e.route.key) {
            case 'first':
                return <PersonalInfo />;
            case 'second':
                return <FamilyInfo />;
            case 'third':
                return <Qualifications />;
            case 'fourth':
                return <Experiences />;
        }
    };


    return (
        // <ProfileProvider navigation={navigation}>

            <SafeAreaView style={styles.container}>
                {/* <ScrollView showsVerticalScrollIndicator={false}> */}

                <View style={styles.profileView}>

                    <View style={styles.image}>
                        <Avatar.Image
                            source={{ uri: `data:image/jpeg;base64,${profileData?.image}` }}
                            size={100}
                        />
                        <Text style={styles.title}>{profileData?.name}</Text>
                        <Text style={styles.caption}>{profileData?.job_title}</Text>
                        {/* <Image source={{ uri: `data:image/png;base64,${profileData?.image}` }} height={100} width={100} /> */}
                    </View>
                </View>

                <View style={styles.iconView}>
                    <TouchableOpacity onPress={() => navigation.navigate('UpdateProfile')} >
                        <Icon name='circle-edit-outline' size={30} style={{ color: COLORS.black }} />
                    </TouchableOpacity>
                </View>

                <View style={styles.mainView}>

                    <TabView
                        navigationState={{ index, routes }}
                        renderScene={(e) => RenderScene(e, navigation)}
                        onIndexChange={setIndex}
                        renderTabBar={renderTabBar}
                    />

                </View>

            </SafeAreaView>

        // </ProfileProvider>
    )
}

export default EmployeeProfileO