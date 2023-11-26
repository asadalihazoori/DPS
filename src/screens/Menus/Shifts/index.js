import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'
import GeneralHeader from '../../../components/Headers/GeneralHeader'
import Theme from '../../../theme/theme'
import { TabBar, TabView } from 'react-native-tab-view'
import { FontStyle } from '../../../theme/FontStyle'
import { COLORS } from '../../../theme/colors'
import LeaveStatus from '../../Leaves/Leave_Status'
import LeaveSubmission from '../../Leaves/Leave_Submission'
import ApplyForMedicalClaims from '../../MedicalClaims/Apply_For_Medical_Claims'
import MedicalClaims from '../../MedicalClaims/Medical_Claims'
import ApplyShift from '../../Shifts/ApplyShift'
import ShiftDetails from '../../Shifts/ShiftDetails'

const Shifts = ({ navigation }) => {


    const [index, setIndex] = React.useState(0);

    const [routes] = React.useState([
        { key: 'first', title: "Create SWAP" },
        { key: 'second', title: "SWAP Details" },

    ]);

    const renderTabBar = propss => (
        <View style={styles.tabBar}>

            <TabBar
                {...propss}
                indicatorStyle={styles.TabViewIndicator}
                style={styles.TabViewCreateContainer}
                renderLabel={({ route, focused }) => (
                    <View style={{ width: 140, alignItems: 'center', }}>
                        <Text style={[FontStyle.Regular12, { fontWeight: '500', color: focused ? COLORS.blue : COLORS.grey3, }]}>{route.title}</Text>
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

export default Shifts