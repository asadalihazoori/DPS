import { FontStyle } from "../../../theme/FontStyle";
import { COLORS } from "../../../theme/colors";
const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,
        // borderWidth: 1,
        flex: 1
    },
    dateText: {
        ...FontStyle.Regular12,
        fontWeight: '500',
        color: COLORS.grey5
        // lineHeight: 18,

    },


    detailsView: {
        backgroundColor: COLORS.white,
        borderRadius: 8,
        marginTop: 12,
        paddingHorizontal: 30, paddingVertical: 8,
    }
})

export default styles