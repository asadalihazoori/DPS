import { Alert, SafeAreaView, ActivityIndicator, View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { getEmployeePayslipApi } from '../../../utilities/api/ApiList/PayslipApiList'
import { styles } from './styles';
// import PDF from '../../../components/PDF';
import { useSelector } from 'react-redux';
import Theme from '../../../theme/theme';
import GeneralHeader from '../../../components/Headers/GeneralHeader';
import PayslipCard from '../../../components/Cards/PayslipCard';
import { FontStyle } from '../../../theme/FontStyle';
import { SvgXml } from 'react-native-svg';
import { Icons } from '../../../assets/SvgIcons/Icons';
import { TabBar, TabView } from 'react-native-tab-view';
import PayslipDetails from '../PayslipDetails.js';
import { COLORS } from '../../../theme/colors';
import GeneratePayslip from '../GeneratePayslip';

const EmployeePayslip = ({ navigation }) => {

    const uid = useSelector((state) => state.signin.uid);

    const [b64_pdf, setB64_pdf] = useState(null);
    const [loading, setLoading] = useState(false);
    const [date, setDate] = useState(null);



    const fetchData = async (dateStr) => {

        setDate(dateStr);
        setLoading(true);

        try {
            const body = {
                "jsonrps": 2.0,
                "params": {
                    "employee_id": uid,
                    "date": dateStr
                }
            };

            const response = await getEmployeePayslipApi({ body, navigation });
            console.log(response?.data?.result);
            setLoading(false)

            if (response?.data?.result?.response?.b64_pdf) {
                setB64_pdf(response?.data?.result?.response?.b64_pdf)
            }

            else if (response?.data?.result?.status == 400) {
                Alert.alert("EmployeeSlip not Found", response?.data?.result?.response)
            }

            else if (response?.data?.error) {
                Alert.alert(response?.data?.error?.message, response?.data?.error?.data?.message)
            }

            else if (response == 'AxiosError: Request failed with status code 404') {
                Alert.alert("Session Expired", `Please Login Again`);
            }

            else {
                Alert.alert("Internet Connection Failed", `${response?.data}`);
            }

        }

        catch (error) {
            Alert.alert(error);
            setLoading(false);

        }
    };


    const [index, setIndex] = React.useState(2);

    const [routes] = React.useState([
        { key: 'first', title: "Generate Payslip" },

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
                return <GeneratePayslip navigation={navigation} />;


        }
    };


    return (
        <SafeAreaView style={Theme.SafeArea}>
            <GeneralHeader title={'Payslip'} navigation={navigation} />

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

export default EmployeePayslip
