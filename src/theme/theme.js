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
        borderWidth: 0.6,

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

    BottomTabButtonShadow: {
        ...Platform.select({
            ios: {
                shadowColor: 'rgba(53, 97, 232, 0.84)',
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.6,
            },
            android: {
                elevation: 16,
                shadowColor: 'rgba(53, 97, 232, 0.84)',
            },
        }),
    }

})



export default Theme;