import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        // paddingHorizontal: 24,
        // borderWidth: 1,
    },

    profileView: {
        // backgroundColor: '#e8e7fc',
        backgroundColor: '#eff1f0',
        // backgroundColor: 'grey',
        height: 220,
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 1,
        // borderColor: 'red'
    },

    image: {
        // borderWidth: 1,
        alignItems: 'center',
        position: 'absolute',
        justifyContent: 'center'
        // borderRadius:100

    },

    iconView: {
        position: 'absolute',
        right: 0,
        marginRight: 10,
        marginTop: 10

    },

    title: {
        fontSize: 16,
        marginTop: 6,
        fontWeight: 'bold',
        // borderWidth: 1,
        color: 'black',
        // flex:1
    },
    caption: {
        marginTop: 2,
        fontSize: 14,
        // lineHeight: 10,
        // borderWidth: 1
    },

    text: {
        color: 'black',
        marginVertical: 7
    },

    mainView: {
        marginTop: -15,
        backgroundColor: 'white',
        // paddingTop: 20,
        flex: 1,
        // borderWidth: 1,
        borderColor: 'green',
        borderTopLeftRadius: 28,
        borderTopRightRadius: 28,
        // paddingHorizontal: 24,
        // marginBottom: 15,

    },

    innerView: {
        borderWidth: 0.5,
        borderRadius: 10,
        marginVertical: 8,
        borderColor: 'grey'
    },

    touchableView: {
        padding: 14,
        // justifyContent: 'center',
        flexDirection: 'row',

        alignItems: 'center'
    },

    headerText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'black',
        flex: 1
    },





    header: {
        marginTop: '3%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    ordersView: {
        // marginHorizontal: scale(7),
        marginHorizontal: 7,
        // marginBottom: verticalScale(50)
        marginBottom: 50
    },



    TabViewCreateContainer: {
        backgroundColor: 'white',
        width: '100%',
        height: 60,
        justifyContent: 'center',
        // alignSelf: 'center',
        borderRadius: 5,
        // marginTop: '2%',
        elevation: 10,
        // ...NewTheme.Shadow
        // borderWidth: 1
        borderTopLeftRadius: 28,
        borderTopRightRadius: 28,
    },
    TabViewCreateIndicator: {
        // backgroundColor: Theme.colors.blackcolor,
        backgroundColor: 'black',
        width: '22%',
        marginHorizontal: 10,
        // borderWidth: 1,
    },




















});