import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { styles } from './styles'
import GeneralHeader from '../../../components/Headers/GeneralHeader'
import Theme from '../../../theme/theme'
import { TabBar, TabView } from 'react-native-tab-view'
import { FontStyle } from '../../../theme/FontStyle'
import { COLORS } from '../../../theme/colors'
import ApplyForLoans from '../../Loans/Apply_For_Loans'
import LoansAdvances from '../../Loans/Loans_Advances'
import ApprovedLoans from '../../Loans/ApprovedLoans'

const Loans = ({ navigation }) => {


    const [index, setIndex] = React.useState(0);

    const [routes] = React.useState([
        { key: 'first', title: "Apply" },
        { key: 'second', title: "Approved" },
        { key: 'third', title: "Report" },

    ]);

    const renderTabBar = propss => (
        <View style={styles.tabBar}>

            <TabBar
                {...propss}
                indicatorStyle={styles.TabViewIndicator}
                style={styles.TabViewCreateContainer}
                renderLabel={({ route, focused }) => (
                    <View style={{ width: 90, alignItems: 'center' }}>
                        <Text style={[FontStyle.Regular12, { fontWeight: '500', color: focused ? COLORS.blue : COLORS.grey3, }]}>{route.title}</Text>
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

export default Loans