import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { TabBar, TabView } from 'react-native-tab-view'
import GeneralHeader from '../../components/Headers/GeneralHeader'
import Theme from '../../theme/theme'
import { COLORS } from '../../theme/colors'
import { TabViewStyles } from '../../theme/TabViewStyles'
import ShiftDetails from './ShiftDetails'
import ApplyShift from './ApplyShift'

const Shifts = ({ navigation }) => {
    const [index, setIndex] = React.useState(0);

    const [routes] = React.useState([
        { key: 'first', title: "Create SWAP" },
        { key: 'second', title: "SWAP Details" },

    ]);

    const renderTabBar = propss => (
        <View style={TabViewStyles.tabBar}>

            <TabBar
                {...propss}
                indicatorStyle={TabViewStyles.TabViewIndicator}
                style={TabViewStyles.TabViewCreateContainer}
                renderLabel={({ route, focused }) => (
                    <View>
                        <Text style={[TabViewStyles.titleText, { color: focused ? COLORS.blue : COLORS.grey3 }]}>{route.title}</Text>
                    </View>
                )}


            />

        </View>
    );

    const RenderScene = (e, navigation) => {

        switch (e.route.key) {
            case 'first':
                return <ApplyShift navigation={navigation} />;
            case 'second':
                return <ShiftDetails navigation={navigation} />;
        }
    };


    return (
        <SafeAreaView style={Theme.SafeArea}>
            <GeneralHeader title={'Shift'} navigation={navigation} />

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

export default Shifts