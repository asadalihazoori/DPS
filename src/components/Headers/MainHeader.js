import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FontStyle } from '../../theme/FontStyle'
import { SvgXml } from 'react-native-svg'
import { HeaderIcons } from '../../assets/SvgIcons/HeaderIcons'
import { COLORS } from '../../theme/colors'
import { useSelector } from 'react-redux'

const MainHeader = ({ navigation }) => {
    const name = useSelector((state) => state.employeeProfile.name);

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

            {/* <TouchableOpacity style={styles.iconView}
                activeOpacity={0.5}
                onPress={() => { }}>
                <SvgXml xml={HeaderIcons.bell} />
            </TouchableOpacity> */}

            <TouchableOpacity style={{ height: 32, width: 32, borderRadius: 16, justifyContent: 'center', backgroundColor: COLORS.blue }}
                activeOpacity={0.5}
                onPress={() => { }}
                disabled={true}>
                {/* <SvgXml xml={HeaderIcons.bell} /> */}
                <Text style={[FontStyle.Regular16, { textAlign: 'center', fontWeight: '400', color: COLORS.white }]}>{name?.[0]}</Text>
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
        // paddingVertical: 4,//12,
        marginTop: 16
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