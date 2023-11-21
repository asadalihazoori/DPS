import { StyleSheet, Text, View, Modal, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { RadioButton } from 'react-native-paper';
import Button from './Buttons/Button';
import { COLORS } from '../theme/colors';

const RadioSelectionModal = ({ modalVisible, setModalVisible, header, data, onChangeSelection }) => {

    const [selectedType, setSelectedType] = useState(null);

    const handleRadioButtonChange = (itemId) => {
        setSelectedType(itemId);
    };

    const handleOkButtonPress = () => {
        if (selectedType) {
            onChangeSelection(selectedType);

        }
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
                    <ScrollView showsVerticalScrollIndicator={false}>


                        <View style={styles.textView}>
                            <Text style={styles.header}>{header}</Text>
                        </View>

                        <View style={{}}>
                            {data?.map((item) => (
                                <View key={item.id} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
                                    <RadioButton.Android
                                        value={item.id}
                                        status={selectedType?.id === item.id ? 'checked' : 'unchecked'}
                                        onPress={() => handleRadioButtonChange(item)}
                                    />
                                    <View style={{ flex: 1 }}>
                                        <Text style={styles.text}>{item.name}</Text>
                                    </View>
                                </View>
                            ))}
                        </View>

                        <Button title='OK' handelSubmit={handleOkButtonPress} height={40} />

                    </ScrollView>
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
        alignItems: 'center',
        // borderWidth: 1,

    },

    innerContainer: {
        // borderWidth: 2,
        // paddingHorizontal: 32,
        // paddingTop: 40,
        padding: 20,
        // flex: 1,
        backgroundColor: COLORS.white,
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

    header: {
        fontWeight: '700',
        color: COLORS.black,
        fontSize: 16,
        marginBottom: 8,

    },

    text: {
        color: COLORS.black,

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