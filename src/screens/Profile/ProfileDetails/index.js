import { SafeAreaView, Text, View, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TabViewStyles } from '../../../theme/TabViewStyles';
import { useDispatch, useSelector } from 'react-redux';
import { getEmployeeProfile } from '../../../redux/profile/actions/getEmployeeProfile';
import { TabBar, TabView } from 'react-native-tab-view';
import GeneralHeader from '../../../components/Headers/GeneralHeader'
import Theme from '../../../theme/theme'
import { COLORS } from '../../../theme/colors'
import Experiences from './Experiences';
import Qualifications from './Qualifications';
import PersonalInfo from './PersonalInfo';
import FamilyInfo from './FamilyInfo';

const ProfileDetails = ({ navigation, route }) => {

    // const initalRoute = route.params;
    const profileData = useSelector((state) => state.employeeProfile.data);
    const uid = useSelector((state) => state.signin.uid);
    // const [loading, setLoading] = useState(true);

    const dispatch = useDispatch();

    useEffect(() => {
        // setLoading(true) 
        dispatch(getEmployeeProfile({
            uid,
            navigation
        }))

    }, [])



    const [index, setIndex] = useState(0);

    const [routes] = useState([
        { key: 'first', title: "Personal Info" },
        // { key: 'second', title: "Family Info" },
        // { key: 'third', title: "Qualification" },
        // { key: 'fourth', title: "Experience" }
    ]);

    const renderTabBar = propss => (
        <View style={TabViewStyles.tabBar}>

            <TabBar
                {...propss}
                indicatorStyle={TabViewStyles.TabViewIndicator}
                style={TabViewStyles.TabViewCreateContainer}
                renderLabel={({ route, focused }) => (
                    <View >
                        <Text style={[TabViewStyles.titleText, { color: focused ? COLORS.blue : COLORS.grey3, }]}>{route.title}</Text>
                    </View>
                )}


            />

        </View>
    );

    // useEffect(() => {
    //     if (initalRoute !== undefined) {
    //         setIndex(initalRoute.route);
    //     }
    // }, [initalRoute]);

    const RenderScene = (e, navigation) => {

        switch (e.route.key) {
            case 'first':
                return <PersonalInfo />;
            case 'second':
            //     return <FamilyInfo />;
            // case 'third':
            //     return <Qualifications />;
            // case 'fourth':
            //     return <Experiences />;
        }
    };


    return (

        <SafeAreaView style={Theme.SafeArea}>
            <GeneralHeader title={'Employee Profile'} navigation={navigation} />

            <View style={TabViewStyles.container}>

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

export default ProfileDetails