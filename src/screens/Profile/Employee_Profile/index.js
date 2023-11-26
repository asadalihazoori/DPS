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
import Theme from '../../../theme/theme';
import GeneralHeader from '../../../components/Headers/GeneralHeader';
import { FontStyle } from '../../../theme/FontStyle';

const EmployeeProfile = ({ navigation, route }) => {

    const initalRoute = route.params?.route;
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


    const [index, setIndex] = React.useState(initalRoute);

    const [routes] = React.useState([
        { key: 'first', title: "Personal Info" },
        { key: 'second', title: "Family Info" },
        { key: 'third', title: "Qualification" },
        { key: 'fourth', title: "Experience" }
    ]);

    const renderTabBar = propss => (
        <TabBar
            {...propss}
            indicatorStyle={styles.TabViewIndicator}
            style={styles.TabViewCreateContainer}
            renderLabel={({ route, focused }) => (
                <View style={{ width: 72, alignItems: 'center' }}>
                    <Text style={[FontStyle.Regular12, { fontWeight: '500', color: focused ? COLORS.blue : COLORS.grey3 }]}>{route.title}</Text>
                </View>
            )}

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

        <SafeAreaView style={Theme.SafeArea}>
            <GeneralHeader title={'Employee Profile'} navigation={navigation} />

            <View style={styles.container}>

                <TabView
                    navigationState={{ index, routes }}
                    renderScene={(e) => RenderScene(e, navigation)}
                    onIndexChange={setIndex}
                    renderTabBar={renderTabBar}
                />


            </View>

        </SafeAreaView>

    )
}

export default EmployeeProfile