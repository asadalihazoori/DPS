import { View, ActivityIndicator } from 'react-native'
import React, { useContext, useState } from 'react'
import { TabBar, TabView } from 'react-native-tab-view';
import Button from '../../../components/Buttons/Button'
import { StyleSheet } from 'react-native'
import UpdatePersonalInfo from './UpdatePersonalInfo';
import UpdateFamilyInfo from './UpdateFamilyInfo';
import UpdateQualifications from './UpdateQualifications';
import UpdateExperiences from './UpdateExperiences';
import { ProfileContext } from '../../../context/ProfileContext';
import UpdatePersonalDocs from './UpdatePersonalDocs';

const WrapperUpdateProfile = ({ navigation }) => {

    const { handelSubmit } = useContext(ProfileContext);

    const [index, setIndex] = useState(0);
    const [loading, setLoading] = useState(false);

    const [routes] = useState([
        { key: 'first', title: "Info" },
        { key: 'second', title: "Family" },
        { key: 'third', title: "Qualif." },
        { key: 'fourth', title: "Exper." },
        { key: 'fifth', title: "Docs." }
    ]);

    const goToNextTab = () => {
        const nextIndex = (index + 1) % routes.length;
        setIndex(nextIndex);
    };


    const renderTabBar = propss => (
        <TabBar
            {...propss}
            indicatorStyle={styles.TabViewCreateIndicator}
            style={styles.TabViewCreateContainer}
            activeColor="#000"
            inactiveColor="#7A7578"
            getLabelText={({ route }) => route.title}
            labelStyle={{ fontSize: 11, fontWeight: '700' }}
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
            case 'fifth':
                return <UpdatePersonalDocs />;
        }
    };


    return (

        <View style={styles.innerView}>
            <TabView
                navigationState={{ index, routes }}
                renderScene={(e) => RenderScene(e, navigation)}
                onIndexChange={setIndex}
                renderTabBar={renderTabBar}
            />

            <View style={{ paddingHorizontal: 20 }}>
                {loading &&
                    <ActivityIndicator size={'small'} />}
                <Button title={(index != 4) ? "Continue" : "Submit"} handelSubmit={(index != 4) ? goToNextTab : () => handelSubmit(setLoading)} />
            </View>

        </View>

    )
}

export default WrapperUpdateProfile


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',
        // borderWidth: 1,
        paddingHorizontal: 20,
        paddingTop: 5,
        paddingBottom: 5,

    },

    innerView: {

        // borderWidth: 2,
        backgroundColor: 'white',
        // paddingVertical: 70,
        borderColor: 'black',
        flex: 1,
        // shadowColor: '#000',
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 10,


    },

    TabViewCreateContainer: {
        backgroundColor: 'white',
        width: '100%',
        height: 60,
        justifyContent: 'center',
        // alignSelf: 'center',
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        // marginTop: '2%',
        elevation: 10,
        // ...NewTheme.Shadow
        // borderWidth: 1
        // borderTopLeftRadius: 28,
        // borderTopRightRadius: 28,
    },
    TabViewCreateIndicator: {
        // backgroundColor: Theme.colors.blackcolor,
        backgroundColor: 'black',
        width: '16%',
        marginHorizontal: 10,
        // borderWidth: 1,
    },
});
