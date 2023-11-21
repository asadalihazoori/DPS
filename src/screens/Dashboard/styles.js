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
        marginTop: 24,
        // marginHorizontal: 16,
        paddingVertical: 12,
        paddingHorizontal: 8,
        // borderWidth: 1,
        borderColor: 'green',

    },

    row: {
        flexDirection: 'row',
        marginBottom: 12,
        // borderWidth: 1,
        justifyContent: 'space-evenly'

        // paddingHorizontal: 8,
    },


    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        // borderWidth: 1,
        // position: 'absolute'
    },
    imageView: {
        width: '100%',
        // height: 290,
        // maxHeight: 330,
        backgroundColor: COLORS.grey
    },

    mainView: {
        paddingLeft: 10,
        flex: 1,
        // borderWidth: 1,
    },

    functionView: {
        // borderWidth: 1,
        // borderColor: 'green',
        // borderRadius: 16,
        height: 170,
        marginVertical: 20,
    },

    innerView: {

        // borderWidth: 1,
        // flex: 1
    },

    taskView: {
        // borderWidth: 1,
        backgroundColor: COLORS.grey, //'#c6c9c6',
        // borderColor: 'green',
        borderRadius: 12,
        // height: 200,
        width: 210,
        // flex:1
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