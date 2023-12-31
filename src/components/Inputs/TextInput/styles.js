import { StyleSheet } from "react-native";
import { FontStyle } from "../../../theme/FontStyle";
import { COLORS } from "../../../theme/colors";
import Theme from "../../../theme/theme";

export const styles = StyleSheet.create({
    container: {

    },

    label: {
        ...FontStyle.Regular14_500,
        fontWeight: '400',
        paddingHorizontal: 1,
        lineHeight: 20,
        letterSpacing: 0.16
    },



    inputView: {
        marginTop: 4,
        ...Theme.Shadow,
        // flex: 1,
        paddingHorizontal: 12,

    },

    textInput: {
        flex: 1,
        // borderWidth: 1,
        padding: 0,
        margin: 0,
        height: 45,
        ...FontStyle.Regular12_400,
        color: COLORS.darkBlack,

    },

    iconView: {
        justifyContent: 'center',
        marginLeft: 10

    },


})