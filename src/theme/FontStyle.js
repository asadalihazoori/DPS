import { StyleSheet } from "react-native";
import { COLORS } from "./colors";
import { fonts } from "./fonts";


export const FontStyle = StyleSheet.create({

    Regular10: {
        color: COLORS.darkBlack,
        fontFamily: fonts.regular,
        fontSize: 10,
        fontWeight: '700',
    },

    Regular12: {
        color: COLORS.grey,
        fontFamily: fonts.regular,
        fontSize: 12,
        fontWeight: '400',
    },

    Regular12_400: {
        color: COLORS.darkBlack,
        fontFamily: fonts.regular,
        fontSize: 12,
        fontWeight: '400',
    },

    Regular14_500: {
        color: COLORS.primaryColor,
        fontFamily: fonts.regular,
        fontSize: 14,
        fontWeight: '500',
    },

    Regular14: {
        color: COLORS.buttonText,
        fontFamily: fonts.regular,
        fontSize: 14,
        fontWeight: '700',
    },

    Regular16_500: {
        color: COLORS.primaryColor,
        fontFamily: fonts.regular,
        fontSize: 16,
        fontWeight: '500',
    },

    Regular16: {
        color: COLORS.darkBlack,
        fontFamily: fonts.regular,
        fontSize: 16,
        fontWeight: '700',
    },

    Regular18: {
        color: COLORS.darkBlack,
        fontFamily: fonts.regular,
        fontSize: 18,
        fontWeight: '700',
        lineHeight: 24
    },

    Regular20: {
        color: COLORS.primaryColor,
        fontFamily: fonts.regular,
        fontSize: 20,
        fontWeight: '400',
        lineHeight: 24,
    },

    Regular24: {
        color: COLORS.primaryColor,
        fontFamily: fonts.regular,
        fontSize: 24,
        fontWeight: '600',
    },

})