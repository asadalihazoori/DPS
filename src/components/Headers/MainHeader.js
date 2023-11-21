import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FontStyle } from '../../theme/FontStyle'
import { SvgXml } from 'react-native-svg'
import { HeaderIcons } from '../../assets/SvgIcons/HeaderIcons'

const MainHeader = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <TouchableOpacity style={[styles.iconView, { 
                // marginLeft: 10
             }]}
                activeOpacity={0.5}
                onPress={() => navigation.openDrawer()}>
                <SvgXml xml={HeaderIcons.burger} />
            </TouchableOpacity>

            <View style={styles.textView}>
                <Text style={FontStyle.Regular18}>Dashboard</Text>
            </View>

            <TouchableOpacity style={styles.iconView}
                activeOpacity={0.5}
                onPress={() => { }}>
                <SvgXml xml={HeaderIcons.bell} />
            </TouchableOpacity>


        </View>
    )
}

export default MainHeader

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        // borderWidth: 1,
        paddingHorizontal: 16,
        paddingVertical: 12
    },

    textView: {
        // borderWidth: 1,
        flex: 1,
        marginHorizontal: 24,
        alignItems: 'center'
    },

    iconView: {
        justifyContent: 'center',
        // borderWidth: 1,
        alignItems: 'center',
        width: 24,
    }
})