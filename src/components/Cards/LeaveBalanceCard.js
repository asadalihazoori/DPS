import { StyleSheet, Text, View } from "react-native";
import { FontStyle } from "../../theme/FontStyle";
import { COLORS } from "../../theme/colors";

const LeaveBalanceCard = ({ item, index, leavesLength }) => {
    const backColors = ['#3bca7840', '#f73c3c40', '#f8b14240', '#9e9ea040'];
    const borderColors = ['#3BCA78', '#F73C3C', '#F8B142', '#9E9EA0'];
    return (
        <View style={[styles.container, {
            marginLeft: index % 2 != 0 ? 12 : 0,
            flex: index === leavesLength - 1 ? 0.48 : 1,
            borderColor: borderColors[index % backColors.length],
            backgroundColor: backColors[index % backColors.length],
        }]} >

            <Text style={styles.title}>{item?.leaves_type}</Text>
            <Text style={[styles.title, { marginTop: 8 }]}>
                {Number.isInteger(item?.leave_remaining)
                    ? item?.leave_remaining
                    : item?.leave_remaining.toFixed(2)}
                /
                {item?.total_leaves}
            </Text>
        </View>
    )
}

export default LeaveBalanceCard


const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        height: 80,
        marginBottom: 12,
        alignItems: 'center',
        borderRadius: 8,
        justifyContent: 'center',
    },

    title: {
        ...FontStyle.Regular14_500,
        lineHeight: 24,
        color: COLORS.darkBlack,
    }

})