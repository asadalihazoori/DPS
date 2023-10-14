import { Text, SafeAreaView, View } from 'react-native'
import React, { useState } from 'react'
import { ProfileProvider } from '../../../context/ProfileContext'
import UpdatePersonalInfo from '../../../components/Profile/UpdateProfile/UpdatePersonalInfo'
import { styles } from './styles'
import Header from '../../../components/Header'
import UpdateFamilyInfo from '../../../components/Profile/UpdateProfile/UpdateFamilyInfo'
import { TabBar, TabView } from 'react-native-tab-view';
import UpdateQualifications from '../../../components/Profile/UpdateProfile/UpdateQualifications'
import UpdateExperiences from '../../../components/Profile/UpdateProfile/UpdateExperiences'
import Button from '../../../components/Buttons/Button'

const UpdateProfile = ({ navigation }) => {

    const [index, setIndex] = useState(0);

    const [routes] = useState([
        { key: 'first', title: "Info" },
        { key: 'second', title: "Family" },
        { key: 'third', title: "Quali." },
        { key: 'fourth', title: "Exper." }
    ]);

    const renderTabBar = propss => (
        <TabBar
            {...propss}
            indicatorStyle={styles.TabViewCreateIndicator}
            style={styles.TabViewCreateContainer}
            activeColor="#000"
            inactiveColor="#7A7578"
            getLabelText={({ route }) => route.title}
        />
    );

    const RenderScene = (e, navigation) => {

        switch (e.route.key) {
            case 'first':
                return <UpdatePersonalInfo />;
            case 'second':
                return <UpdateFamilyInfo />;
            case 'third':
                return <UpdateQualifications />;
            case 'fourth':
                return <UpdateExperiences />;
        }
    };


    const goToNextTab = () => {
        const nextIndex = (index + 1) % routes.length;
        setIndex(nextIndex);
    };


    return (
        <ProfileProvider navigation={navigation}>

            <SafeAreaView style={styles.container}>

                <Header title={'Update Profile'} />

                <View style={styles.innerView}>
                    <TabView
                        navigationState={{ index, routes }}
                        renderScene={(e) => RenderScene(e, navigation)}
                        onIndexChange={setIndex}
                        renderTabBar={renderTabBar}
                    />

                    <View style={{ paddingHorizontal: 20 }}>

                        <Button title="Continue" handelSubmit={goToNextTab} />
                    </View>

                </View>

            </SafeAreaView>

        </ProfileProvider>
    )
}

export default UpdateProfile