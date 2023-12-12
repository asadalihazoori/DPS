import { StyleSheet, Text, View, Modal } from 'react-native'
import React from 'react'
import { SvgXml } from 'react-native-svg'
import { COLORS } from '../theme/colors'
import { ActivityIndicator } from 'react-native-paper'
import Theme from '../theme/theme'
import { FontStyle } from '../theme/FontStyle'
// import { icons } from '../assets/icons/icons'
// import { colors } from '../theme/colors'
// import { fontStyle } from '../theme/fonstStyle'
// import LoaderAnimation from './LoaderAnimation'

const Loader = ({ loading, setLoading, title }) => {
    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={loading}
            onRequestClose={() => {
                setLoading && setLoading(false);
            }}

        // presentationStyle='overFullScreen'

        >
            <View style={styles.container}>
                {/* <View style={styles.container1}>
                    <View style={styles.innerContainer}>
                        <SvgXml xml={icons.alertModalConfirmFrame} />
                    </View>

                    <View style={styles.textView}>
                        <Text style={fontStyle.regular24}>Congratulations!</Text>
                        <Text style={[fontStyle.regular18, { fontSize: 16, marginTop: 16 }]}>Your account is ready to use. You will be redirected to the Home page in a few seconds..</Text>
                    </View>

                    <View style={styles.loaderView}>
                        <View style={styles.innerLoaderView}>
                            <LoaderAnimation />
                        </View>



                    </View>

                </View> */}

                <View style={styles.container1}>

                    <ActivityIndicator color={COLORS.primaryColor} />
                    <Text style={styles.text}>{title}</Text>

                </View>
            </View>
        </Modal>
    )
}

export default Loader

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
        // borderWidth: 1,
        gap: 18,
        ...Theme.Shadow

    },
    innerContainer: {
        // borderWidth: 1,
        alignItems: 'center',
        // flex:1 
    },
    text: {
        ...FontStyle.Regular14_500,
        color: COLORS.darkBlack

    },

})