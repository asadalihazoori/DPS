import { StyleSheet, TouchableOpacity, View, Image, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../theme/colors';

const Header = ({ title }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.topView}>
            <View style={styles.backView}>
                <TouchableOpacity onPress={() => { navigation.goBack() }} style={styles.iconView}>

                    <Icon name="arrow-back"
                        size={24}
                        style={{ color: COLORS.black }}
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
        justifyContent: 'center',

    },
    backView: {
        flexDirection: 'row',
        width: '100%',

    },

    text: {
        color: COLORS.black,
        fontSize: 20,
        fontWeight: '600'

    },

    iconView: {
        justifyContent: 'center'

    },

    textView: {
        marginLeft: 12,
    }


})