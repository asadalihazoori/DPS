import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { TabBar, TabView } from 'react-native-tab-view'
import GeneralHeader from '../../components/Headers/GeneralHeader'
import Theme from '../../theme/theme'
import { COLORS } from '../../theme/colors'
import { TabViewStyles } from '../../theme/TabViewStyles'
import ApplyForMedicalClaims from './Apply_For_Medical_Claims'
import MedicalClaims from './Medical_Claims'

const MedicalClaim = ({ navigation }) => {

    const [index, setIndex] = useState(0);

    const [routes] = useState([
        { key: 'first', title: "Apply for Medical Claims" },
        { key: 'second', title: "Claims Status" },

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
                )}


            />

        </View>
    );

    const RenderScene = (e, navigation) => {

        switch (e.route.key) {
            case 'first':
                return <ApplyForMedicalClaims navigation={navigation} />;
            case 'second':
                return <MedicalClaims navigation={navigation} />;
        }
    };


    return (
        <SafeAreaView style={Theme.SafeArea}>
            <GeneralHeader title={'Medical Claims'} navigation={navigation} />

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

export default MedicalClaim