import { StyleSheet } from "react-native";
import { FontStyle } from "../../../theme/FontStyle";
import { COLORS } from "../../../theme/colors";

export const styles = StyleSheet.create({
    mainView: {
        marginHorizontal: 16,
        // borderWidth: 1,
        marginTop: 24,
    },

    imageView: {
        alignItems: 'center',
        // borderWidth: 1,
    },

    cameraIconView: {
        position: 'absolute',
        bottom: 0,
        right: 0
    },

    itemView: {
        marginBottom: 8
    },

    featuresView: {
        marginTop: 32,
        // borderWidth: 1
    },

    dropDowView: {
        marginHorizontal: 8,
        marginBottom: 16,
    },

    dropDown: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginBottom: 4,
        // borderWidth: 1
    },

    dropDownText: {
        ...FontStyle.Regular12,
        color: COLORS.metallic,
        fontWeight: '500'
    }

})