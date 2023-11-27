import { COLORS } from "./colors";

const { StyleSheet, Platform } = require("react-native");

const Theme = StyleSheet.create({

    SafeArea: {
        flex: 1,
        backgroundColor: COLORS.background
    },

    Shadow: {
        // shadowColor: 'rgba(0, 0, 0, 0.25)',
        // shadowColor: 'black',

        // shadowOffset: {
        //     width: 0,
        //     height: 4,
        // },
        // shadowOpacity: 1,


        //     shadowColor: '#D7D7D7',
        //     shadowOffset: {
        //         width: 0,
        //         height: 2,
        //     },
        //     shadowOpacity: 0.25,
        //     shadowRadius: 3.6,

        //     backgroundColor: COLORS.white,
        //     borderWidth: 0.4,
        //     borderRadius: 8,
        //     borderColor: '#BEBEBE',
        //     // elevation: 2,
        // },

        backgroundColor: COLORS.white,
        borderRadius: 8,
        borderColor: '#BEBEBE',
        borderWidth: 0.4,

        ...Platform.select({
            ios: {
                shadowColor: '#D7D7D7',
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.6,
            },
            android: {
                elevation: 2, // Android uses elevation for shadows
            },
        }),
    }

})



export default Theme;