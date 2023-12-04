import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import { styles } from './styles'
import GeneralHeader from '../../../components/Headers/GeneralHeader'
import Theme from '../../../theme/theme'
import { TabBar, TabView } from 'react-native-tab-view'
import { FontStyle } from '../../../theme/FontStyle'
import { COLORS } from '../../../theme/colors'
import ApplyForLoans from '../../Loans/Apply_For_Loans'
import LoansAdvances from '../../Loans/Loans_Advances'
import ApprovedLoans from '../../Loans/ApprovedLoans'
import Location from '../../Attendance/Location'
import AttendanceHistory from '../../Attendance/AttendaceHistory'
import Punch from '../../Attendance/Punch'
import LocationOld from '../../Attendance/Location/indexOld'
import { getPermission } from '../../Attendance/Location/AccessLocation'
import { getPermissionJust } from '../../Attendance/Location/AccessLocation copy'

const Attendance = ({ navigation }) => {


    const [index, setIndex] = React.useState(0);

    const [routes] = React.useState([
        { key: 'first', title: "Attendance" },
        // { key: 'second', title: "History" },
        // { key: 'third', title: "Location" },

    ]);

    const renderTabBar = propss => (
        <View style={styles.tabBar}>

            <TabBar
                {...propss}
                indicatorStyle={styles.TabViewIndicator}
                style={styles.TabViewCreateContainer}
                renderLabel={({ route, focused }) => (
                    <View style={{ alignItems: 'center' }}>
                        <Text style={[FontStyle.Regular12, { fontWeight: '500', color: focused ? COLORS.blue : COLORS.grey3, }]}>{route.title}</Text>
                    </View>
                )}


            />

        </View>
    );

    const RenderScene = (e, navigation) => {

        switch (e.route.key) {
            case 'first':
                return <Punch navigation={navigation} />;
            case 'second':
                return <AttendanceHistory />;
            // case 'third':
            //     return <Location navigation={navigation} />;
            // return <LocationOld navigation={navigation} />;

        }
    };

    useEffect(() => {
        // getPermission();
        getPermissionJust();
    }, [])

    return (
        <SafeAreaView style={Theme.SafeArea}>
            <GeneralHeader title={'My Attendance'} navigation={navigation} />

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

export default Attendance