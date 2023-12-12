import { FontStyle } from "../../../theme/FontStyle";
import { COLORS } from "../../../theme/colors";
const { StyleSheet } = require("react-native");
export const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,
        borderWidth: 1,
        flex: 1,
    },

    frameView: {
        alignItems: 'center',
    },

    captionText: {
        ...FontStyle.Regular12,
        fontWeight: '500',
        color: COLORS.metallic,
        marginTop: 8
    }
})