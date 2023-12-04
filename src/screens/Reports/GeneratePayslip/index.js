import { View, Text, Alert, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import ProfileTextInput from '../../../components/Inputs/ProfileTextInput'
import DatePicker from '../../../components/DateTimePicker/DatePicker'
import Theme from '../../../theme/theme'
import { COLORS } from '../../../theme/colors'
import { FontStyle } from '../../../theme/FontStyle'
import DropDownPicker from 'react-native-dropdown-picker'
import YearPicker from '../../../components/Inputs/YearPicker'
import { useSelector } from 'react-redux'
import { getEmployeePayslipApi, getEmployeePayslipApiWags } from '../../../utilities/api/apiController'
import { getCurrentDate } from '../../../utilities/CurretDate'
import inputValidation from '../../../utilities/Validations/YupValidate'
import { PayslipScema } from '../../../utilities/Validations'
import Loader from '../../../components/Loader'

const GeneratePayslip = ({ navigation }) => {

    const { employeeID } = useSelector((state) => state.employeeProfile);

    console.log(employeeID);

    const [payslipdata, setpayslipData] = useState(null);
    const [detail, setOpenDetail] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [showStartDatePicker, setShowStartDatePicker] = useState(false);
    const [showEndDatePicker, setShowEndDatePicker] = useState(false);

    const [inputs, setInputs] = useState({
        year: null,
        month: null,
        startDate: null,
        endDate: null,
    });


    const [currentDate, setCurrentDate] = useState('');
    useEffect(() => {
        setCurrentDate(getCurrentDate());

    }, [])



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
                        // ["slip_id.date_from", "<=", "2023-10-01"],
                        // ["slip_id.date_to", ">=", "2023-10-30"]]
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
            // handleSubmit();'
            setDisabled(false);


        } else {
            setInputs(prev => ({
                ...prev,
                errors: result?.err
            }))
        }

    }


    const Item = ({ title, value, marginBottom }) => (
        <View style={{ flexDirection: 'row', marginBottom: marginBottom ? 0 : 12, }}>
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
                zIndex: -1,
                // width: 88, 
                paddingHorizontal: 16,
                height: 32, justifyContent: 'center',
                alignItems: 'center', borderWidth: 0,
                marginHorizontal: 4
            }]}
            onPress={handlePress}>
            <Text style={[FontStyle.Regular14, { color: COLORS.white }]}>{title}</Text>
        </TouchableOpacity>
    )



    const [loading, setLoading] = useState(false);

    const handleInputChange = async (field, value) => {
        setInputs({
            ...inputs,
            [field]: value,
            errors: {
                ...inputs.errors,
                [field]: false
            }
        })

        // setInputs(prev => ({
        //     ...prev,
        //     [field]: value,
        //     errors: {
        //         ...prev.errors,
        //         [field]: false
        //     }
        // }), validate);
        // await validate();
    }

    useEffect(() => {

        if (inputs.year !== null && inputs.month !== null) {
            validate();
        }
        // validate();
    }, [inputs]);


    const handleDateChange = (selectedDate, field) => {

        const dateObject = new Date(selectedDate);
        const formattedDate = dateObject.toISOString().split('T')[0];

        if (field === 'startDate') {
            setShowStartDatePicker(false);
        } else if (field === 'endDate') {
            setShowEndDatePicker(false);
        }

        handleInputChange(field, formattedDate);

    };
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
        { value: '2021', label: '2021' },
    ];


    return (
        <View style={styles.container}>
            {/* <ScrollView style={styles.container} showsHorizontalScrollIndicator={false}> */}

            {/* <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                placeholder={'Choose a fruit.'}
                style={[
                    Theme.Shadow, {

                    }]}
                labelStyle={{}}
            /> */}

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


            {/* <View style={{ flexDirection: 'row' }}>

                <View style={{ flex: 1 }}>

                    <DatePicker
                        date={new Date()}
                        label={'From'}
                        placeholder={'23 November'}
                        value={inputs.startDate}
                        onChange={(selectedDate) => handleDateChange(selectedDate, 'startDate')}
                        showDatePicker={showStartDatePicker}
                        setShowDatePicker={setShowStartDatePicker}
                        error={inputs?.errors?.startDate}
                    />
                </View>
                <View style={{ flex: 1, marginLeft: 4 }}>

                    <DatePicker
                        date={new Date()}
                        label={'To'}
                        value={inputs.endDate}
                        onChange={(selectedDate) => handleDateChange(selectedDate, 'endDate')}
                        showDatePicker={showEndDatePicker}
                        setShowDatePicker={setShowEndDatePicker}
                        placeholder={'27 October'}
                        error={inputs?.errors?.endDate}
                    />
                </View>
            </View> */}

            <View style={{ marginTop: 8, alignItems: 'flex-end', marginRight: 4, }}>
                <Button title={'Generate'}
                    disabled={disabled}
                    handlePress={() => {
                        setLoading(true);
                        getpaySlip()
                        // setOpenDetail(!detail)
                    }} />

                {/* onPress={() => setOpenDetail(!detail)} /> */}

            </View>

            {detail &&
                <View>
                    <View style={{
                        backgroundColor: COLORS.white,
                        borderRadius: 8,
                        marginTop: 12,
                        paddingVertical: 12,
                        paddingHorizontal: 30,
                    }}>

                        {/* <Item title={'Month/Year'} value={'November, 2023'} />
                        <Item title={'Gross Salary'} value={'Pkr 50,000/-'} />
                        <Item title={'Basic Salary'} value={'Pkr 35,000/-'} />
                        <Item title={'Other Allowances'} value={'Pkr 10,000/-'} />
                        <Item title={'PF Deduction'} value={'Pkr 5,000/-'} />
                        <Item title={'Tax'} value={'2%'} />
                        <Item title={'Net Salary'} value={'Pkr 43,000/-'} marginBottom={true} /> */}


                        {payslipdata?.map((item, index) => (
                            <Item key={index} title={item.name} value={item.total} />
                        ))}

                    </View>
                    {/* <View style={{ marginTop: 16, justifyContent: 'flex-end', flexDirection: 'row' }}>
                        <Button title={'Download PDF'}
                            onPress={() => { }} />
                        <Button title={'Print'}
                            onPress={() => { }} />
                    </View> */}
                </View>
            }
            <Loader loading={loading} />
            {/* </ScrollView> */}
        </View>
    )
}

export default GeneratePayslip