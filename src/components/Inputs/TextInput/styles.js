import { StyleSheet } from "react-native";
import { FontStyle } from "../../../theme/FontStyle";
import { COLORS } from "../../../theme/colors";

export const styles = StyleSheet.create({
    container: {
        // paddingTop: 10,

        // borderWidth: 1,
    },

    label: {
        ...FontStyle.Regular14_500,
        // position: 'absolute',
        // top: 0,
        // left: 16,
        // zIndex: 100,
        // backgroundColor: 'white',
        fontWeight: '400',
        paddingHorizontal: 1,
        lineHeight: 20,
        letterSpacing: 0.16
    },



    inputView: {
        marginTop: 4,
        borderWidth: 0.4,
        borderColor: '#BEBEBE',
        // flexDirection: 'row',
        borderRadius: 8,
        backgroundColor: COLORS.white,
        elevation: 4,
        // paddingHorizontal: 8,
        // paddingTop: 5,
    },

    textInput: {
        // flex: 1,
        // borderWidth: 1,
        paddingHorizontal: 10,
    }


})