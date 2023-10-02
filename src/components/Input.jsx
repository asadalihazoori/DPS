import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
// import { colors } from '../theme/colors'
// import { SvgXml } from 'react-native-svg';
// import { fontStyle } from '../theme/fonstStyle';
// import { icons } from '../assets/icons/icons';
// import CountryCodePicker from './CountryCodePicker';

const Input = ({
    error,
    icon,
    placeholder,
    password,
    keyboardType,
    autoCapitalize,
    marginTop,
    rightIcon,
    textInput,
    onChangeText,
    countryPicker,
    editable,
    value }) => {

    const [hidePassword, setHidePassword] = useState(password);
    const [isFocused, setIsFocused] = useState(false);
    return (
        <View style={[styles.container, {
            marginTop: marginTop,
            borderColor: error ? colors.error : isFocused ? 'green' : 'black',
            backgroundColor: isFocused ? 'white' : 'white'
        }]}>
            <View style={styles.innerView}>
                {/* {icon &&
                    <View style={[styles.iconView, { marginRight: 12, }]}>
                        <SvgXml xml={isFocused ? icon.green :  icon.grey} />
                        <SvgXml xml={isFocused ? icon.green : value ? icon.black : icon.grey} />
                    </View>
                } */}

                {/* {countryPicker &&
                    <View style={[styles.iconView, { marginRight: 12, width: 24, height: 18 }]}>
                        <CountryCodePicker />
                    </View>} */}


                <TextInput

                    placeholder={placeholder}
                    placeholderTextColor={'grey'}
                    keyboardType={keyboardType}
                    autoCorrect={false}
                    onFocus={() => {
                        setIsFocused(true)
                    }}
                    onBlur={() => setIsFocused(false)}
                    secureTextEntry={hidePassword}
                    autoCapitalize={autoCapitalize}
                    editable={editable}
                    style={[
                        // fontStyle.regular14,
                        styles.input,]}
                    onChangeText={onChangeText}
                    value={value}
                />

                {/* {password &&
                    <TouchableOpacity style={styles.iconView} onPress={() => setHidePassword(!hidePassword)}>
                        <SvgXml xml={isFocused ? icons.eye.green : value ? icons.eye.black : icons.eye.grey} />
                    </TouchableOpacity>
                } */}

                {/* {rightIcon &&
                    <TouchableOpacity style={styles.iconView} onPress={() => { }}>
                        <SvgXml xml={isFocused ? rightIcon.green : value ? rightIcon.black : rightIcon.grey} />
                    </TouchableOpacity>
                } */}

            </View>




        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        // borderRadius: 16,
        padding: 15,
        // width: 380,
        height: 50,


    },

    innerView: {
        flexDirection: 'row',
        //  borderWidth: 1

    },

    iconView: {
        justifyContent: 'center',
        // borderWidth: 1,

    },
    input: {
        // borderWidth: 1,
        flex: 1,
        // marginLeft: 12,
        // height: 60,
        padding: 0
    }
})