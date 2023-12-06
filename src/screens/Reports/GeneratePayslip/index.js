import { View, Text, Alert, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import Theme from '../../../theme/theme'
import { COLORS } from '../../../theme/colors'
import { FontStyle } from '../../../theme/FontStyle'
import YearPicker from '../../../components/Inputs/YearPicker'
import { useSelector } from 'react-redux'
import { getEmployeePayslipApiWags } from '../../../utilities/api/apiController'
import { getCurrentDate } from '../../../utilities/CurretDate'
import inputValidation from '../../../utilities/Validations/YupValidate'
import { PayslipScema } from '../../../utilities/Validations'
import Loader from '../../../components/Loader'
import { GetPaySlipAPI } from '../../../utilities/GetPaySlipAPI'

const GeneratePayslip = ({ navigation }) => {

    const month = [
        { value: '1', label: 'January' },
        { value: '2', label: 'February' },
        { value: '3', label: 'March' },
        { value: '4', label: 'April' },
        { value: '5', label: 'May' },
        { value: '6', label: 'June' },
        { value: '7', label: 'July' },
        { value: '8', label: 'August' },
        { value: '9', label: 'September' },
        { value: '10', label: 'October' },
        { value: '11', label: 'November' },
        { value: '12', label: 'December' },
    ];

    const year = [
        { value: '2023', label: '2023' },
        { value: '2022', label: '2022' },
    ];


    const { employeeID } = useSelector((state) => state.employeeProfile);
    const { uid } = useSelector((state) => state.signin);
    const [payslipdata, setpayslipData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [detail, setOpenDetail] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [currentDate, setCurrentDate] = useState('');

    const [inputs, setInputs] = useState({
        year: null,
        month: null,
        startDate: null,
        endDate: null,
    });


    const getpaySlip = async () => {


        try {
            const body = {
                "params": {
                    "model": "hr.payslip.line",
                    "method": "search_read",
                    "args": [
                        [
                            ["slip_id.employee_id", "=", employeeID],
                            ["slip_id.date_from", "<=", `${inputs.year}-${inputs.month}-01`],
                            ["slip_id.date_to", ">=", `${inputs.year}-${inputs.month}-28`]
                        ]
                    ],
                    "kwargs": {
                        "fields": ["employee_id", "name", "code", "total", "category_id"]
                    }
                }
            }


            const response = await getEmployeePayslipApiWags({ body, navigation });
            console.log(response.data);
            setLoading(false)

            if (response?.data?.result) {

                if (response?.data?.result?.length > 0) {
                    setpayslipData(response?.data?.result);
                    setOpenDetail(true);
                }
                else {
                    setOpenDetail(false);
                    Alert.alert("EmployeeSlip Not Found !", "Payslip for this month not available right now ")

                }
            }


            else if (response?.data?.error) {
                Alert.alert(response?.data?.error?.message, response?.data?.error?.data?.message)
            }

            else if (response == 'AxiosError: Request failed with status code 404') {
                Alert.alert("Session Expired", `Please Login Again`);
            }

            else if (response == "AxiosError: Network Error") {
                Alert.alert("Internet Connection Failed", "Try to connect with Wifi or Mobile Network");
            }
            else {
                Alert.alert("Error", "Try Again");

            }

        }

        catch (error) {
            Alert.alert(error);
            setLoading(false);

        }
    }


    const validate = async () => {

        const result = await inputValidation(PayslipScema, inputs)

        if (result.isValidate) {
            setDisabled(false);


        } else {
            setInputs(prev => ({
                ...prev,
                errors: result?.err
            }))
        }

    }


    const handleInputChange = async (field, value) => {
        setInputs({
            ...inputs,
            [field]: value,
            errors: {
                ...inputs.errors,
                [field]: false
            }
        })

    }

    useEffect(() => {

        if (inputs.year !== null && inputs.month !== null) {
            validate();
        }
    }, [inputs]);


    useEffect(() => {
        setCurrentDate(getCurrentDate());

    }, [])


    const Item = ({ title, value }) => (
        <View style={{ flexDirection: 'row', marginVertical: 6 }}>
            <View style={{ flex: 1 }}>
                <Text style={[FontStyle.Regular12_400, { color: COLORS.grey5 }]}>{title}</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <Text style={[FontStyle.Regular12_400, { fontWeight: '500', color: COLORS.darkBlack }]}>{value}</Text>
            </View>
        </View>
    );

    const Button = ({ title, handlePress, disabled }) => (
        <TouchableOpacity
            activeOpacity={0.5}
            disabled={disabled}
            style={[Theme.Shadow, {
                backgroundColor: !disabled ? COLORS.blue : COLORS.grey4,
                paddingHorizontal: 16,
                height: 32, justifyContent: 'center',
                alignItems: 'center', borderWidth: 0,
                marginHorizontal: 4
            }]}
            onPress={handlePress}>
            <Text style={[FontStyle.Regular14, { color: COLORS.white }]}>{title}</Text>
        </TouchableOpacity>
    )

    return (
        <View style={styles.container}>

            <View style={{ marginBottom: 16 }}>
                <Text style={styles.dateText}>{currentDate}</Text>
            </View>

            <View style={{ flexDirection: 'row', borderWidth: 0, }}>
                <View style={{ flex: 1 }}>

                    <YearPicker label={'Year'} data={year} placeholder={'Select Year'}
                        onChange={(selectedYear) => handleInputChange('year', selectedYear)}
                    />
                </View>

                <View style={{ flex: 1 }}>
                    <YearPicker label={'Month'} data={month} placeholder={'Select Month'}
                        onChange={(selectedMonth) => handleInputChange('month', selectedMonth)} />
                </View>
            </View>

            <View style={{ marginTop: 8, alignItems: 'flex-end', marginRight: 4, zIndex: -1 }}>
                <Button title={'Generate'}
                    disabled={disabled}
                    handlePress={() => {
                        setLoading(true);
                        getpaySlip()
                    }} />

            </View>

            {detail &&
                <View style={{ zIndex: -1, flex: 1 }}>
                    <ScrollView style={{ marginTop: 12, }} showsVerticalScrollIndicator={false}>
                        <View style={styles.detailsView}>

                            {payslipdata?.map((item, index) => (
                                <Item key={index} title={item.name} value={item.total} />
                            ))}


                        </View>
                    </ScrollView>
                    <View style={{ marginVertical: 16, alignItems: 'flex-end' }}>
                        <Button title={'Download PDF'}
                            handlePress={() => {
                                setLoading(true);
                                GetPaySlipAPI(uid, `${inputs.year}-${inputs.month}`, setLoading, navigation);
                            }}
                        />
                    </View>
                </View>
            }
            <Loader loading={loading} title={'Loading...'} />
        </View>
    )
}

export default GeneratePayslip