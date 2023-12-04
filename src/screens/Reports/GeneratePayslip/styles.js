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
})

export default styles