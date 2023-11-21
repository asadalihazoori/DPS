import { COLORS } from "./colors";

const { StyleSheet } = require("react-native");

const Theme = StyleSheet.create({

    SafeArea: {
        flex: 1,
        backgroundColor: COLORS.background1
    },

    Shadow: {
        // shadowColor: 'rgba(0, 0, 0, 0.25)',
        // shadowColor: 'black',

        // shadowOffset: {
        //     width: 0,
        //     height: 4,
        // },
        // shadowOpacity: 1,
        // shadowRadius: 4,
        elevation: 4
    },
})



export default Theme;