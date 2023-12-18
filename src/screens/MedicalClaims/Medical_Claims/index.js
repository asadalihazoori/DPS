import { Alert, SafeAreaView, ScrollView, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getMedicalClaimsApi } from '../../../utilities/api/apiController';
import { useSelector } from 'react-redux';
import { TabActions } from '@react-navigation/native';
import Table from '../../../components/Table';
import { styles } from './styles';
import LoanCard from '../../../components/Cards/LoanCard';
import MedicalClaimCard from '../../../components/Cards/MedicalClaimCard';

const MedicalClaims = ({ navigation }) => {

    const dummyData = [
        // { "claim_type": "spouse", "state": "validate", "name": false, "apporve_amount": 50000.0, "date": "2021-01-01", "tree": [{ "claim_amount": 121656.0, "date_claim": "2021-01-01", "description": "Delivery", "disease_type": false }], "id": 205, "record_claim_amount": 121656.0 },
        { "claim_type": "self", "state": "validate", "name": "Touqeer Zahid", "apporve_amount": 4995.0, "date": "2021-08-16", "tree": [{ "claim_amount": 4995.0, "date_claim": "2021-08-14", "description": "Chest Infection - fever ", "disease_type": false }], "id": 2389, "record_claim_amount": 4995.0 },
        { "claim_type": "children", "state": "validate", "name": " Aaraiz Touqeer", "apporve_amount": 5021.0, "date": "2021-09-29", "tree": [{ "claim_amount": 6420.0, "date_claim": "2021-09-29", "description": "Fever ", "disease_type": false }], "id": 3012, "record_claim_amount": 6420.0 },
        { "claim_type": "self", "state": "validate", "name": "Touqeer Zahid", "apporve_amount": 2000.0, "date": "2021-10-22", "tree": [{ "claim_amount": 2000.0, "date_claim": "2021-10-21", "description": "flu", "disease_type": false }], "id": 3251, "record_claim_amount": 2000.0 },
        { "claim_type": "spouse", "state": "validate", "name": "Yamna Touqeer", "apporve_amount": 2066.0, "date": "2022-03-25", "tree": [{ "claim_amount": 2755.0, "date_claim": "2022-03-24", "description": "Food poisoning ", "disease_type": "Stomach" }], "id": 4820, "record_claim_amount": 2755.0 },
    ]

    const [data, setData] = useState([]);
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

            const response = await getMedicalClaimsApi({ body, navigation });
            // console.log(response?.data?.result?.response)

            setLoading(false);

            if (response?.data?.result?.status == 200) {
                setData(response?.data?.result?.response.data)

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
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>

            {
                dummyData?.map((item, index) => {
                    return (
                        <MedicalClaimCard key={index} data={item} />
                    )
                })
            }

        </ScrollView>
    )
}

export default MedicalClaims