import { View, Text } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import ProfileTextInput from '../../../components/Inputs/ProfileTextInput'
import DatePicker from '../../../components/DateTimePicker/DatePicker'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Theme from '../../../theme/theme'
import { COLORS } from '../../../theme/colors'
import { FontStyle } from '../../../theme/FontStyle'
import DropDownPicker from 'react-native-dropdown-picker'
import YearPicker from '../../../components/Inputs/YearPicker'

const GeneratePayslip = () => {

    const Item = ({ title, value, marginBottom }) => (
        <View style={{ flexDirection: 'row', marginBottom: marginBottom ? 0 : 12, }}>
            <View style={{ flex: 1 }}>
                <Text style={[FontStyle.Regular12_400, { color: COLORS.grey5 }]}>{title}</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <Text style={[FontStyle.Regular12_400, { fontWeight: '500', color: COLORS.darkBlack }]}>{value}</Text>
            </View>
        </View>
    )

    const [detail, setOpenDetail] = useState(false);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' },
        { label: 'Pear', value: 'pear' },
    ]);


    const [showStartDatePicker, setShowStartDatePicker] = useState(false);
    const [showEndDatePicker, setShowEndDatePicker] = useState(false);

    const [inputs, setInputs] = useState({
        // name: name,
        // holidayType: null,
        // type: null,
        startDate: null,
        endDate: null,
        // reason: null,
    });

    const handleInputChange = (field, value) => {
        setInputs({
            ...inputs,
            [field]: value,
            errors: {
                ...inputs.errors,
                [field]: false
            }
        })
    }


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

    return (
        <View style={styles.container}>



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
            <YearPicker label={'Year'} />

            {/* <ProfileTextInput
                label={'Year'}
                // editable={false}
                placeholder={'2023'}
            /> */}

            <View style={{ flexDirection: 'row' }}>

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
            </View>

            <View style={{ marginTop: 12, alignItems: 'flex-end' }}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={[Theme.Shadow, {
                        backgroundColor: detail ? COLORS.blue : COLORS.grey4,
                        width: 88, height: 32, justifyContent: 'center',
                        alignItems: 'center', borderWidth: 0, margin: 4
                    }]}
                    onPress={() => setOpenDetail(!detail)}>
                    <Text style={[FontStyle.Regular14, { color: COLORS.white }]}>Generate</Text>
                </TouchableOpacity>
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


                        <Item title={'Month/Year'} value={'November, 2023'} />
                        <Item title={'Gross Salary'} value={'Pkr 50,000/-'} />
                        <Item title={'Basic Salary'} value={'Pkr 35,000/-'} />
                        <Item title={'Other Allowances'} value={'Pkr 10,000/-'} />
                        <Item title={'PF Deduction'} value={'Pkr 5,000/-'} />
                        <Item title={'Tax'} value={'2%'} />
                        <Item title={'Net Salary'} value={'Pkr 43,000/-'} marginBottom={true} />


                    </View>
                    <View style={{ marginTop: 12, justifyContent: 'flex-end', flexDirection: 'row' }}>
                        <TouchableOpacity
                            activeOpacity={0.5}
                            style={[Theme.Shadow, {
                                backgroundColor: COLORS.blue,
                                width: 120, height: 32, justifyContent: 'center',
                                alignItems: 'center', borderWidth: 0, margin: 4
                            }]}
                            onPress={() => { }}>
                            <Text style={[FontStyle.Regular14, { color: COLORS.white }]}>Download PDF</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.5}
                            style={[Theme.Shadow, {
                                backgroundColor: COLORS.blue,
                                width: 88, height: 32, justifyContent: 'center',
                                alignItems: 'center', borderWidth: 0, margin: 4
                            }]}
                            onPress={() => { }}>
                            <Text style={[FontStyle.Regular14, { color: COLORS.white }]}>Print</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            }
        </View>
    )
}

export default GeneratePayslip