import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FontStyle } from '../theme/FontStyle'
import { COLORS } from '../theme/colors'
import Icon from 'react-native-vector-icons/FontAwesome';

const CustomCheckBox = ({
    status,
    onPress
}) => {

    console.log(status);
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: COLORS.black,
            // borderWidth: 1,
            marginTop: 10
        }}>
            <Text style={[FontStyle.Regular14_500, { fontSize: 16, marginRight: 12, }]}>{'Keep me logged in'}</Text>

            <TouchableOpacity style={{
                borderWidth: 2,
                height: 18,
                width: 18,
                borderRadius: 4,
                borderColor: COLORS.primaryColor,
                backgroundColor: status ? COLORS.primaryColor : 'transparent',
                justifyContent: 'center', alignItems: 'center'
            }}
                onPress={onPress}
            >
                {status &&

                    <Icon
                        name={'check'}
                        style={{ color: COLORS.white, fontSize: 14 }}
                    />
                }


            </TouchableOpacity>

        </View>
    )
}

export default CustomCheckBox

const styles = StyleSheet.create({})