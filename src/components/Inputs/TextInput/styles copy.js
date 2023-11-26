import { StyleSheet } from "react-native";
import { FontStyle } from "../../../theme/FontStyle";

export const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
    },

    label: {
        ...FontStyle.Regular16,
        position: 'absolute',
        top: 0,
        left: 16,
        zIndex: 100,
        backgroundColor: 'white',
        paddingHorizontal: 4,
        lineHeight: 22.4,
        letterSpacing: 0.16
    },



    inputView: {
        borderWidth: 2,
        borderColor: '#B5B5B5',
        flexDirection: 'row',
        borderRadius: 10,
        paddingHorizontal: 5,
        paddingTop: 5,
    },

    textInput: {
        flex: 1,
        paddingHorizontal: 14,
    }


})