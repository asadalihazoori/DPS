import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { TabBar, TabView } from 'react-native-tab-view'
import { TabViewStyles } from '../../theme/TabViewStyles'
import GeneralHeader from '../../components/Headers/GeneralHeader'
import Theme from '../../theme/theme'
import { COLORS } from '../../theme/colors'
import AddOvertimeRequest from './AddOvertimeRequest'
import RequestsRecord from './RequestsRecord'

const OvertimeTracking = ({ navigation }) => {

    const [index, setIndex] = React.useState(0);

    const [routes] = React.useState([
        { key: 'first', title: "Apply Request" },
        { key: 'second', title: "View Requests" },

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

    const RenderScene = (e, navigation) => {

        switch (e.route.key) {
            case 'first':
                return <AddOvertimeRequest navigation={navigation} />;
            case 'second':
                return <RequestsRecord navigation={navigation} />;

        }
    };


    return (
        <SafeAreaView style={Theme.SafeArea}>
            <GeneralHeader title={'Overtime Tracking'} navigation={navigation} />

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

export default OvertimeTracking