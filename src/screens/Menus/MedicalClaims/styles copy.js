import { StyleSheet } from "react-native";
import { COLORS } from "../../../theme/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        // borderWidth: 1,
        alignItems: 'center'
        // position: 'absolute'
    },

    innerView: {

        // justifyContent: 'center'
        // borderWidth: 1,
        // flex: 1
    },

    taskView: {
        // borderWidth: 1,
        backgroundColor: COLORS.lightGrey, //'#c6c9c6',
        // borderColor: 'green',
        borderRadius: 12,
        height: 120,
        width: 210,
        // flex:1
        marginTop: 10,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },

    text: {
        color: COLORS.black,
        fontWeight: '500',
        fontSize: 14,

    }


});