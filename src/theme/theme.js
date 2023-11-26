import { COLORS } from "./colors";

const { StyleSheet } = require("react-native");

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

        backgroundColor: COLORS.white,
        borderWidth: 0.4,
        borderRadius: 8,
        borderColor: '#BEBEBE',
        elevation: 3.6,
    },

})



export default Theme;