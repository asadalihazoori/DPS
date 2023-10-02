import { StyleSheet, Text, View, Modal, Button } from 'react-native'
import React, { useState } from 'react'
// import { useSelector } from 'react-redux'
// import { SvgXml } from 'react-native-svg'
// import { icons } from '../assets/icons/icons'
// import { colors } from '../theme/colors'
// import { fontStyle } from '../theme/fonstStyle'
// import LoaderAnimation from './LoaderAnimation'
import { RadioButton } from 'react-native-paper';

const RadioSelectionModal = ({ modalVisible, setModalVisible, header, loanTypes, onSelectLoanType }) => {

    // const loanTypeList = useSelector(()=>)

    const [selectedLoanType, setSelectedLoanType] = useState(null);

    const handleRadioButtonChange = (loanTypeId) => {
        setSelectedLoanType(loanTypeId);
    };

    const handleOkButtonPress = () => {
        // Pass the selectedLoanType to the parent screen
        onSelectLoanType(selectedLoanType);
        // Close the modal
        setModalVisible(false);
    };




    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(false);
            }}

        // presentationStyle='overFullScreen'

        >
            <View style={styles.container}>
                <View style={styles.innerContainer}>

                    <View style={styles.textView}>
                        <Text >{header}</Text>
                    </View>

                    <View style={{}}>
                        {loanTypes.map((loanType) => (
                            <View key={loanType.id} style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <RadioButton.Android
                                    value={loanType.id}
                                    status={selectedLoanType?.id === loanType.id ? 'checked' : 'unchecked'}
                                    onPress={() => handleRadioButtonChange(loanType)}
                                />
                                <Text>{loanType.name}</Text>
                            </View>
                        ))}
                    </View>

                    <Button title='OK' onPress={handleOkButtonPress} />
                    {/* <Button title='OK' onPress={() => setModalVisible(false)} /> */}


                </View>
            </View>
        </Modal>
    )
}

export default RadioSelectionModal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center'

    },

    innerContainer: {
        // borderWidth: 2,
        // paddingHorizontal: 32,
        // paddingTop: 40,
        padding: 20,
        // flex: 1,
        backgroundColor: 'white',
        borderRadius: 13,
        width: '85%',

    },
    // innerContainer: {
    //     // borderWidth: 1,
    //     alignItems: 'center',
    //     // flex:1 
    // },
    textView: {
        // borderWidth: 1,
        // marginTop: 32,
        // alignItems: 'center'
    },

    loaderView: {
        marginTop: 50,
        marginBottom: 25,
        // borderWidth: 1,
        alignItems: 'center'

    },
    innerLoaderView: {
        // borderWidth: 1,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    }
})