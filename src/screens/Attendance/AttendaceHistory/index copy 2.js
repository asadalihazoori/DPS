import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { styles } from './styles'
import Theme from '../../../theme/theme'
import GeneralHeader from '../../../components/Headers/GeneralHeader'
import { TabView, TabBar } from 'react-native-tab-view'
import { FontStyle } from '../../../theme/FontStyle'
import { COLORS } from '../../../theme/colors'
import PersonalInfo from '../../../components/Profile/ProfileView/PersonalInfo'
import { SvgXml } from 'react-native-svg'
import { Icons } from '../../../assets/SvgIcons/Icons'
import WeekWiseAttendace from '../../../components/WeekWiseAttendace'

const Attendance = ({ navigation }) => {


    const [index, setIndex] = React.useState(0);

    const [routes] = React.useState([
        { key: 'first', title: "Week-1" },
        { key: 'second', title: "Week-2" },
        { key: 'third', title: "Week-3" },
        { key: 'fourth', title: "Week-4" }
    ]);

    const renderTabBar = propss => (
        <View style={styles.tabBar}>

            <TouchableOpacity style={[styles.iconView, { marginRight: 32 }]}>
                <SvgXml xml={Icons.leftArrow} />
            </TouchableOpacity>


            <TabBar
                {...propss}
                indicatorStyle={styles.TabViewIndicator}
                style={styles.TabViewCreateContainer}
                renderLabel={({ route, focused }) => (
                    <View style={{ width: 60, alignItems: 'center' }}>
                        <Text style={[FontStyle.Regular12, { fontWeight: '500', color: focused ? COLORS.blue : COLORS.grey3, }]}>{route.title}</Text>
                    </View>
                )}


            />
            <TouchableOpacity style={[styles.iconView, { marginLeft: 32 }]}>
                <SvgXml xml={Icons.rightArrow} />
            </TouchableOpacity>
        </View>
    );

    const RenderScene = (e, navigation) => {

        switch (e.route.key) {
            case 'first':
                return <WeekWiseAttendace navigation={navigation} />;
            case 'second':
                return <WeekWiseAttendace navigation={navigation} />;
            case 'third':
                return <WeekWiseAttendace navigation={navigation} />;
            case 'fourth':
                return <WeekWiseAttendace navigation={navigation} />;
        }
    };



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