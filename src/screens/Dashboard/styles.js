import { StyleSheet } from "react-native";
import { COLORS } from "../../theme/colors";

export const styles = StyleSheet.create({

    scrollView: {
        marginHorizontal: 16,
    },

    textView: {
        marginTop: 16,
        // borderWidth: 1
    },

    featureView: {
        marginTop: 16,
        // borderWidth: 1,
        borderColor: 'green',

        paddingVertical: 8,
        paddingHorizontal: 4,
    },

    row: {
        flexDirection: 'row',
        marginBottom: 16,
        // borderWidth: 1,
        justifyContent: 'space-between'
    },


    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        // borderWidth: 1,K'
    },
    imageView: {
        width: '100%',
        backgroundColor: COLORS.grey
    },

    mainView: {
        paddingLeft: 10,
        flex: 1,
        // borderWidth: 1,
    },

    functionView: {
        // borderWidth: 1,
        height: 170,
        marginVertical: 20,
    },

    innerView: {

    },

    taskView: {
        // borderWidth: 1,
        backgroundColor: COLORS.grey, //'#c6c9c6',
        borderRadius: 12,
        width: 210,
        marginTop: 10,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },

    header: {
        color: COLORS.black,
        fontSize: 20,
        fontWeight: 'bold'
    },

    text: {
        color: COLORS.black,
        fontWeight: '500',
        fontSize: 14,

    }



});