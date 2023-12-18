import { Text, View } from 'react-native'
import React, { useState } from 'react'
import AttendanceCardNew from '../AttendanceCardNew'
import WeekWiseAttendace from '../../../components/WeekWiseAttendace';
import { TabBar, TabView } from 'react-native-tab-view'
import { TabViewStyles } from '../../../theme/TabViewStyles';
import { COLORS } from '../../../theme/colors';

const AttendanceHistory = ({ navigation }) => {

    const [index, setIndex] = useState(0);

    const [routes] = useState([
        { key: 'first', title: "Week-1" },
        { key: 'second', title: "Week-2" },
        { key: 'third', title: "Week-3" },
        { key: 'fourth', title: "Week-4" }
    ]);

    const renderTabBar = propss => (
        <View style={[TabViewStyles.tabBar, { marginTop: 0, marginBottom: 16, }]}>

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
                return <WeekWiseAttendace navigation={navigation} />;
            case 'second':
                return <WeekWiseAttendace navigation={navigation} />;
            case 'third':
                return <WeekWiseAttendace navigation={navigation} />;
            case 'fourth':
                return <WeekWiseAttendace navigation={navigation} />;
            // case 'second':
            // return <AttendanceHistory />;
            // case 'third':
            //     return <Location navigation={navigation} />;
            // return <LocationOld navigation={navigation} />;

        }
    };



    return (
        <View style={{ flex: 1, paddingHorizontal: 16, }}>
            {/* <AttendanceCardNew punchIn={'8:30 AM'} punchOut={'9:30 PM'} />
            <AttendanceCardNew punchIn={'8:30 AM'} punchOut={'9:30 PM'} />
            <AttendanceCardNew punchIn={'8:30 AM'} punchOut={'9:30 PM'} />
            <AttendanceCardNew punchIn={'8:30 AM'} punchOut={'9:30 PM'} />
            <AttendanceCardNew punchIn={'8:30 AM'} punchOut={'9:30 PM'} /> */}


            <View style={TabViewStyles.container}>

                <TabView
                    navigationState={{ index, routes }}
                    renderScene={(e) => RenderScene(e, navigation)}
                    onIndexChange={setIndex}
                    renderTabBar={renderTabBar}
                />


            </View>

        </View>
    )
}

export default AttendanceHistory