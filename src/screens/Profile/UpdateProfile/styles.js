import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',
        // borderWidth: 1,
        paddingHorizontal: 20,
        paddingTop: 5,
        paddingBottom: 5,

    },

    innerView: {

        // borderWidth: 2,
        backgroundColor: 'white',
        // paddingVertical: 70,
        borderColor: 'black',
        flex: 1,
        // shadowColor: '#000',
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 10,
        

    },

    TabViewCreateContainer: {
        backgroundColor: 'white',
        width: '100%',
        height: 60,
        justifyContent: 'center',
        // alignSelf: 'center',
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        // marginTop: '2%',
        elevation: 10,
        // ...NewTheme.Shadow
        // borderWidth: 1
        // borderTopLeftRadius: 28,
        // borderTopRightRadius: 28,
    },
    TabViewCreateIndicator: {
        // backgroundColor: Theme.colors.blackcolor,
        backgroundColor: 'black',
        width: '22%',
        marginHorizontal: 10,
        // borderWidth: 1,
    },
});
