import { Alert, SafeAreaView, ScrollView, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getLoansApi } from '../../../utilities/api/apiController';
import { useSelector } from 'react-redux';
import { styles } from './styles';
import LoanCard from '../../../components/Cards/LoanCard';

const LoansAdvances = ({ navigation }) => {


    const dummyData = [{
        "amount": "10000",
        "type": "Personal Loan",
        "date": "2022-03-13",
        "remaining": "15000",
        "state": "Approved",
    },
    {
        "amount": "10000",
        "type": "Personal Loan",
        "date": "2022-03-13",
        "remaining": "15000",
        "state": "Approved",
    }];

    const [data, setData] = useState(dummyData); //[]
    const [loading, setLoading] = useState(true);

    const uid = useSelector((state) => state.signin.uid);

    const fetchData = async () => {

        try {
            const body = {
                "jsonrps": 2.0,
                "params": {
                    "employee_id": uid
                }
            };

            const response = await getLoansApi({ body, navigation });

            setLoading(false);

            if (response?.data?.result?.status == 200) {
                setData(response?.data?.result?.response);

            }
            else if (response?.data?.error) {
                Alert.alert(response?.data?.error?.message, `${response?.data?.error?.data?.message}`);
            }

            else if (response == 'AxiosError: Request failed with status code 404') {
                Alert.alert("Session Expired", `Please Login Again`);
            }

            else {
                Alert.alert("Internet Connection Failed", `${response}`);
            }


        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        // fetchData();
    }, [])

    return (
        <View style={styles.container} >
            <ScrollView showsVerticalScrollIndicator={false} >

                {
                    data?.map((item, index) => {
                        return (
                            <LoanCard key={index} data={item} />
                        )
                    })
                }

            </ScrollView>

        </View>
    )
}

export default LoansAdvances
