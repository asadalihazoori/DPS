import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        // borderWidth: 1,
        // position: 'absolute'
    },
    imageView: {
        width: '100%',
        // height: 290,
        // maxHeight: 330,
        backgroundColor: 'grey'
    },

    mainView: {
        paddingLeft: 10,
        flex: 1,
        // borderWidth: 1,
    },

    functionView: {
        // borderWidth: 1,
        borderColor: 'green',
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
        backgroundColor: '#dbddda', //'#c6c9c6',
        borderColor: 'green',
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
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    },

    text: {
        color: 'black',
        fontWeight: '500',
        fontSize: 14,

    }



});