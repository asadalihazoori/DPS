import { StyleSheet, TouchableOpacity, View, Image, Text } from 'react-native'
import React from 'react'
// import { SvgXml } from 'react-native-svg'
// import { icons } from '../assets/icons/icons'
// import { fontStyle } from '../theme/fonstStyle'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons';

const Header = ({ title }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.topView}>
            <View style={styles.backView}>
                <TouchableOpacity onPress={() => { navigation.goBack() }} style={styles.iconView}>
                    {/* <SvgXml xml={icons.back} /> */}

                    <Icon name="arrow-back"
                        // color={color}
                        size={24}
                        style={{ color: "black" }}
                    />

                </TouchableOpacity>
                {title &&
                    <View style={styles.textView}>
                        <Text style={styles.text}>{title}</Text>
                    </View>
                }

            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({

    topView: {
        height: 50,
        // padding: 12px 0px;
        // alignItems: 'center',
        // alignSelf: 'stretch',
        // backgroundColor: 'pink',
        justifyContent: 'center',
        // alignContent: 'center',

        // borderWidth: 1,
        // borderColor: 'red',
        // paddingVertical: 12

    },
    backView: {
        // borderWidth: 1,
        flexDirection: 'row',
        borderColor: 'red',

        // height: 28,
        width: '100%',
        // alignItems: 'center'
        // justifyContent: 'center',
        // backgroundColor: 'red',
        // flex:1


    },

    text: {
        color: 'black',
        fontSize: 20,
        fontWeight: '600'

    },

    iconView: {
        // justifyContent: 'center',
        // flex:1,
        // height: 28,
        // width: 28,
        // marginLeft: 10,
        // borderWidth: 1,
        borderColor: 'red',
        // alignItems: 'center',
        justifyContent: 'center'

    },

    textView: {
        // borderWidth: 1,
        marginLeft: 12,
        // justifyContent: 'center',
        // alignContent: 'center',
        // alignItems: 'center'
    }


})