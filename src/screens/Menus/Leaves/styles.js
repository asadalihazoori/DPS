import { StyleSheet } from "react-native";
import { COLORS } from "../../../theme/colors";

export const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,
        // borderWidth: 1,
        flex: 1,
    },

    tabBar: {
        borderColor: 'red',
        flexDirection: 'row',
        marginVertical: 14,
        marginHorizontal: 48,
        // borderWidth:1,
    },

    iconView: {
        // borderWidth: 1,
        justifyContent: 'center'
    },

    TabViewCreateContainer: {
        backgroundColor: COLORS.background1,
        // borderWidth: 1,

        elevation: 0,
        flex: 1,

    },

    TabViewIndicator: {
        backgroundColor: COLORS.green,
        borderRadius: 16,
        // width: 50,
    },

    bodyView: {
        borderWidth: 1,
        flex: 1
    }


});