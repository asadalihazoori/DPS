import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TabBar, TabView } from 'react-native-tab-view'
import { TabViewStyles } from '../../theme/TabViewStyles'
import GeneralHeader from '../../components/Headers/GeneralHeader'
import Theme from '../../theme/theme'
import { COLORS } from '../../theme/colors'
import AttendanceHistory from './AttendaceHistory'
import Punch from './Punch'

const Attendance = ({ navigation }) => {
    const [index, setIndex] = useState(0);

    const [routes] = useState([
        { key: 'first', title: "Attendance" },
        // { key: 'second', title: "History" },
        // { key: 'third', title: "Location" },

    ]);

    const renderTabBar = propss => (
        <View style={TabViewStyles.tabBar}>

            <TabBar
                {...propss}
                indicatorStyle={TabViewStyles.TabViewIndicator}
                style={TabViewStyles.TabViewCreateContainer}
                renderLabel={({ route, focused }) => (
                    <View>
                        <Text style={[TabViewStyles.titleText, { color: focused ? COLORS.blue : COLORS.grey3, }]}>{route.title}</Text>
                    </View>
                )
                }


            />

        </View >
    );

    const RenderScene = (e, navigation) => {

        switch (e.route.key) {
            case 'first':
                return <Punch navigation={navigation} />;
            // case 'second':
            //     return <AttendanceHistory />;
            // case 'third':
            //     return <Location navigation={navigation} />;
            // return <LocationOld navigation={navigation} />;

        }
    };

    return (
        <SafeAreaView style={Theme.SafeArea}>
            <GeneralHeader title={'My Attendance'} navigation={navigation} />

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

export default Attendance