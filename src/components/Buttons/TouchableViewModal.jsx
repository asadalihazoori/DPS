import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../../theme/colors'
import { FontStyle } from '../../theme/FontStyle'
import Theme from '../../theme/theme'

const TouchableViewModal = ({ text, header, handleModal, label, error, marginBottom }) => {
    return (
        // <View>

        //     {label &&
        //         <Text style={styles.label}>{label}</Text>
        //     }
        //     <View style={styles.container}>

        //         <TouchableOpacity style={[styles.touchableView,
        //         {
        //             borderColor: error ? COLORS.red : COLORS.black
        //         }]} onPress={handleModal}>
        //             <Text style={styles.text}>{text ? text : header}</Text>
        //         </TouchableOpacity>
        //         {error && (
        //             <Text style={{ marginTop: 5, marginLeft: 4, color: COLORS.red, fontSize: 12 }}>
        //                 {error}
        //             </Text>
        //         )}
        //     </View>
        // </View>
        <View
            style={[styles.container, { marginBottom: marginBottom ? marginBottom : 12 }]}>
            <View>
                <Text style={[FontStyle.Regular14, { color: COLORS.darkBlack }]}>{label}</Text>
            </View>

            <TouchableOpacity
                activeOpacity={0.5}
                onPress={handleModal} style={[styles.inputView, {
                    backgroundColor: COLORS.white,
                    borderColor: error ? COLORS.red : "#BEBEBE"
                }]}>

                <Text style={[FontStyle.Regular12_400, { color: text ? COLORS.darkBlack : COLORS.grey3 }]}>{text ? text : header}</Text>
            </TouchableOpacity>

        </View>

    )
}

export default TouchableViewModal

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
        paddingVertical: 14,
        // borderWidth: 1,
        // borderColor: 'red'

    }
})