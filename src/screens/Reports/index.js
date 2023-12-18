import { SafeAreaView, View, Text } from 'react-native'
import React, { useState } from 'react'
import { TabBar, TabView } from 'react-native-tab-view';
import GeneratePayslip from './Payslip';
import GeneralHeader from '../../components/Headers/GeneralHeader'
import Theme from '../../theme/theme'
import { COLORS } from '../../theme/colors'
import { TabViewStyles } from '../../theme/TabViewStyles';
import TaxCertificate from './Tax_Certificate';
import TardinesReport from './Tardines_Report';

const Reports = ({ navigation }) => {

    const [index, setIndex] = useState(0);

    const [routes] = useState([
        { key: 'first', title: "Payslip" },
        // { key: 'second', title: "Tax Certificate" },
        // { key: 'third', title: "Tardiness Report" },

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
                return <GeneratePayslip navigation={navigation} />;

            // case 'second':
            //     return <TaxCertificate navigation={navigation} />;

            // case 'third':
            //     return <TardinesReport navigation={navigation} />;



        }
    };


    return (
        <SafeAreaView style={Theme.SafeArea}>
            <GeneralHeader title={'Reports'} navigation={navigation} />

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

export default Reports
