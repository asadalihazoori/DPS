import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
    },

    imagesButtonView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    imagesButton: {
        marginTop: 24,
        padding: 12,
        backgroundColor: 'grey',
        width: 150,
        alignItems: 'center',
        justifyContent: 'center'
    },

    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14
    }


});