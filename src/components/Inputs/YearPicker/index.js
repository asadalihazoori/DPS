import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { FontStyle } from '../../../theme/FontStyle'
import { COLORS } from '../../../theme/colors'
import Theme from '../../../theme/theme'
import DropDownPicker from 'react-native-dropdown-picker'

const YearPicker = ({
    label,
    placeholder,
    // value,
    onChangeText,
    error,
    editable = true,
    keyboardType,
    marginBottom,
}) => {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: '2024', value: '2024' },
        { label: '2023', value: '2023' },
        { label: '2022', value: '2022' },
        { label: '2021', value: '2021' },
        { label: '2020', value: '2020' },
        { label: '2019', value: '2019' },
        { label: '2018', value: '2018' },
        { label: '2017', value: '2017' },
    ]);

    return (
        <View
            style={[styles.container, { marginBottom: marginBottom ? marginBottom : 12 }]}>
            <View>
                <Text style={[FontStyle.Regular14, { color: COLORS.darkBlack }]}>{label}</Text>
            </View>

            {/* <View style={[styles.inputView, {
                backgroundColor: !editable ? COLORS.backgroundInput : COLORS.white,
                borderColor: error ? COLORS.red : "#BEBEBE"
            }]}>
                </View> */}
            {/* <TextInput
                    placeholder={placeholder}
                    value={value}
                    editable={editable}
                    keyboardType={keyboardType}
                    onChangeText={onChangeText}
                    style={[FontStyle.Regular12_400, {
                        color: COLORS.darkBlack,
                        paddingVertical: 10,
                        // margin:0
                    }]}
                    placeholderTextColor={{ color: COLORS.grey3 }}
                /> */}

            <DropDownPicker

                open={open}
                placeholderStyle={[FontStyle.Regular12_400, { color: COLORS.grey3 }]}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                placeholder={'Select Year'}

                style={[
                    Theme.Shadow, {
                        marginTop: 8,
                        color: COLORS.red,
                    }]}

                labelStyle={[FontStyle.Regular12_400, {
                    color: COLORS.darkBlack,
                }]}

                dropDownContainerStyle={[{
                    borderRadius: 12,
                    backgroundColor: COLORS.white,
                    borderWidth: 1,
                    borderColor: 'rgba(0, 0, 0, 0.10)',
                    borderTopWidth: 0,
                    paddingHorizontal: 8,
                    // zIndex: 990
                    // position: 'absolute'

                }]}

                showTickIcon={false}

                listItemLabelStyle={[
                    FontStyle.Regular12, {
                        color: '#455A64',
                        fontWeight: '500',

                    }]}

                selectedItemLabelStyle={{ color: COLORS.darkBlack }}
                selectedItemContainerStyle={{
                    backgroundColor: '#F6F6F6',
                    borderRadius: 8,
                }}

            />
        </View>
    )
}

export default YearPicker

const styles = StyleSheet.create({
    container: {
        // borderWidth: 1,
        marginHorizontal: 4,

    },

    inputView: {
        ...Theme.Shadow,
        marginTop: 8,
        borderRadius: 8,
        // backgroundColor: COLORS.white,
        paddingHorizontal: 8,
        // borderWidth: 1,
        // elevation: 4,
        // borderColor: 'red'


    }
})