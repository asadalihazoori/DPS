import { Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AlertModal = () => {
    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={loading}
            onRequestClose={() => {
                // setLoading && setLoading(false);
            }}

        // presentationStyle='overFullScreen'

        >
            <View style={styles.container}>



                <View style={styles.container1}>


                    {/* <ActivityIndicator color={COLORS.primaryColor} />
                    <Text style={styles.text}>{title}</Text> */}

                </View>
            </View>
        </Modal>
    )
}

export default AlertModal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        justifyContent: 'center',
        alignItems: 'center'

    },

    container1: {
        paddingVertical: 20,
        paddingHorizontal: 24,
        flexDirection: 'row',
        backgroundColor: COLORS.white,
        borderRadius: 8,
        borderWidth: 1,
        gap: 18,
        ...Theme.Shadow

    },
})