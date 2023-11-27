import { StyleSheet } from "react-native";
import { COLORS } from "../../../theme/colors";

export const styles = StyleSheet.create({
    container: {
        // marginHorizontal: 16,
        // borderWidth: 1,
        flex: 1,
    },

    tabBar: {
        borderColor: 'red',
        flexDirection: 'row',
        marginTop: 12,
        marginBottom: 24,
        // borderWidth: 1,
        marginHorizontal: 16,
        // borderWidth:1,
    },

    iconView: {
        // borderWidth: 1,
        justifyContent: 'center'
    },

    TabViewCreateContainer: {
        backgroundColor: 'transparent',
        // borderWidth: 1,

        elevation: 0,
        flex: 1,

    },

    TabViewIndicator: {
        backgroundColor: COLORS.blue,
        borderRadius: 16,
        // width: 50,
    },

    bodyView: {
        borderWidth: 1,
        flex: 1
    }


});