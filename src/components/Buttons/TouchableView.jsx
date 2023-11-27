import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../../theme/colors'
import { FontStyle } from '../../theme/FontStyle'
import Theme from '../../theme/theme'
import { SvgXml } from 'react-native-svg'
import { Icons } from '../../assets/SvgIcons/Icons'

const TouchableView = ({ text, header, label, error, marginBottom, data, onChange }) => {
    const [items, setOpenItems] = useState(false);

    const OnchangeType = (item) => {
        onChange(item);
        setOpenItems(!items)

    }

    return (
        <View style={{ marginBottom: marginBottom ? marginBottom : 12, }}>

            <View style={styles.container}>
                <View>
                    <Text style={[FontStyle.Regular14, { color: COLORS.darkBlack }]}>{label}</Text>
                </View>

                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => setOpenItems(!items)} style={[styles.inputView, {
                        borderColor: error ? COLORS.red : "#BEBEBE",
                        // borderWidth: 2,
                        flexDirection: 'row',
                    }]}>

                    <Text style={[FontStyle.Regular12_400, { color: text ? COLORS.darkBlack : COLORS.grey3, flex: 1 }]}>{text?.name ? text?.name : header}</Text>
                    <SvgXml xml={Icons.downArrow1} />
                </TouchableOpacity>

            </View>

            {items &&
                <View style={styles.dropDownView}>
                    {data?.map((item) => {
                        const isSelectedItem = item.id === text?.id
                        return (
                            <TouchableOpacity
                                activeOpacity={0.5}
                                key={item.id}
                                onPress={() => OnchangeType(item)}
                                style={[styles.dropDown, {
                                    backgroundColor: isSelectedItem && '#F0F5FF'
                                }]}>
                                <Text style={[styles.dropDownText, { color: isSelectedItem && COLORS.black }]}>{item.name}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </View>
            }

        </View>
    )
}

export default TouchableView

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 4,
        // borderWidth: 1,
    },

    inputView: {
        ...Theme.Shadow,
        marginTop: 8,
        borderRadius: 8,
        paddingHorizontal: 8,
        // paddingVertical: 14,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center'
        // borderWidth: 1,
    },

    dropDownView: {
        marginHorizontal: 8,
        marginTop: 4
    },

    dropDown: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 8,
        marginBottom: 4,
        // borderWidth: 1,
    },

    dropDownText: {
        ...FontStyle.Regular12,
        color: COLORS.metallic,
        fontWeight: '500'
    },


})