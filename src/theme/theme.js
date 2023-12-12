import { COLORS } from "./colors";

const { StyleSheet, Platform } = require("react-native");

const Theme = StyleSheet.create({

    SafeArea: {
        flex: 1,
        backgroundColor: COLORS.background
    },

    Shadow: {

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
                elevation: 2,
            },
        }),
    },

    ImageShadow: {
        ...Platform.select({
            ios: {
                shadowColor: 'rgba(0, 0, 0, 0.25)',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 1,
                shadowRadius: 4,
            },
            android: {
                elevation: 4,
            },
        }),
    },

})



export default Theme;