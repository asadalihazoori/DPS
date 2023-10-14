import { SafeAreaView, Text, Alert, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { LogoutApi } from '../../../utilities/api/apiController';

const Logout = ({ navigation }) => {

    const uid = useSelector((state) => state.signin.uid);
    const [loading, setLoading] = useState(true);

    const LogoutUser = async () => {

        try {
            const body = {
                "jsonrps": 2.0,
                "params": {
                    "employee_id": uid
                }
            };

            const response = await LogoutApi({ body, navigation });
            // console.log(response);
            setLoading(false);

            if (response?.data?.result == "true") {
                navigation.navigate('Login')

            }
            else if (response?.data?.error) {
                Alert.alert(response?.data?.error?.message, `${response?.data?.error?.data?.message}`);
            }

            // else if (response == 'AxiosError: Request failed with status code 404') {
            //     console.log(response);
            //     Alert.alert("Session Expired", `Please Login Again`);
            // }q

            else {
                Alert.alert("Internet Connection Failed", `${response}`);
            }


        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {

        LogoutUser()
    }, [])

    return (
        <SafeAreaView>
            <Text>Logout</Text>

            {loading &&
                <ActivityIndicator size={'large'} />}
        </SafeAreaView>
    )
}

export default Logout