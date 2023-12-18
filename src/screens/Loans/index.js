import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { TabBar, TabView } from 'react-native-tab-view'
import GeneralHeader from '../../components/Headers/GeneralHeader'
import Theme from '../../theme/theme'
import { COLORS } from '../../theme/colors'
import ApplyForLoans from './Apply_For_Loans'
import LoansAdvances from './Loans_Advances'
import ApprovedLoans from './ApprovedLoans'
import { TabViewStyles } from '../../theme/TabViewStyles'

const Loans = ({ navigation }) => {

    const [index, setIndex] = React.useState(0);

    const [routes] = React.useState([
        { key: 'first', title: "Apply" },
        { key: 'second', title: "Approved" },
        { key: 'third', title: "Report" },

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
                return <ApplyForLoans navigation={navigation} />;
            case 'second':
                return <ApprovedLoans navigation={navigation} />;
            case 'third':
                return <LoansAdvances navigation={navigation} />;

        }
    };


    return (
        <SafeAreaView style={Theme.SafeArea}>
            <GeneralHeader title={'Loans/Advances'} navigation={navigation} />

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

export default Loans