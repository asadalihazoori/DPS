import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FontStyle } from '../../theme/FontStyle'
import { COLORS } from '../../theme/colors'
import { SvgXml } from 'react-native-svg'
import { ProfileIcons } from '../../assets/SvgIcons/ProfileIcons'

const ProfileItem = ({
    icon,
    title,
    caption,
    onPress,
    rightIcon
}) => {

    return (

        <TouchableOpacity style={styles.container}
            activeOpacity={0.5}
            onPress={onPress}
        >
            <View style={styles.iconView}>
                <SvgXml xml={icon} />
            </View>

            <View style={styles.textView}>
                <Text style={[FontStyle.Regular14_500, { fontWeight: '700', color: COLORS.darkBlack }]}>{title}</Text>
                <View style={{ marginTop: 4 }}>

                    <Text style={[FontStyle.Regular12_400,]}>{caption}</Text>
                </View>

            </View>

            {rightIcon &&
                <View style={styles.rightIconView} >
                    <SvgXml xml={ProfileIcons.right_Arrow} />
                </View>
            }


        </TouchableOpacity>
    )
}

export default ProfileItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        // borderWidth: 1,
        marginBottom: 16
    },

    iconView: {
        // borderWidth: 1
    },

    textView: {
        marginLeft: 8,
        flex: 1,
        // borderWidth: 1
    },
    rightIconView: {
        marginHorizontal: 16,
        // borderWidth: 1,
        justifyContent: 'center'
    }
})