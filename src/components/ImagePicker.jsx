import React from 'react';
import {
  View,
  PermissionsAndroid,
  Modal,
  StyleSheet,
} from 'react-native';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import Button from './Buttons/Button';
import { COLORS } from '../theme/colors';
// import Button from './Button';

const ImagePicker = ({ modalVisible, setModalVisible, onImageSelected }) => {

  const openImagePicker = async (source) => {
    setModalVisible(false);


    try {
      if (source === 'camera') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Permission Camera',
            message: 'We need access to your camera to take a photo.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          const options = {
            mediaType: 'photo',
            includeBase64: true,
            // maxHeight: 2000,
            // maxWidth: 2000,
          };

          launchCamera(options, (response) => {
            if (response.didCancel) {
              console.log('User cancelled camera');
            } else if (response.error) {
              console.log('Camera error: ', response.error);
            } else {
              // let imageUri = response.assets[0].uri;
              let imageBase64 = response.assets?.[0]?.base64;
              onImageSelected(imageBase64);
              // let base64 = response.assets[0].base64;
              // console.log(response);
              // onImageSelected(`data:image/png;base64,${base64}`);
            }
          });
        } else {
          console.log('Camera permission denied');
        }
      } else if (source === 'gallery') {
        const options = {
          mediaType: 'photo',
          // maxHeight: 2000,
          // maxWidth: 2000,
          includeBase64: true
        };

        launchImageLibrary(options, (response) => {
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('Image picker error: ', response.error);
          } else {
            // console.log(response);
            // let imageUri = response.uri || response.assets?.[0]?.uri;
            let imageBase64 = response.assets?.[0]?.base64;
            onImageSelected(imageBase64);
          }
        });
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(false);
      }}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>

          {/* <Button title={'Take Photo'} onPress={() => openImagePicker('camera')} /> */}
          {/* <View style={{ marginTop: 10 }}></View> */}
          {/* <Button title={'Choose from Gallery'} onPress={() => openImagePicker('gallery')} /> */}
          {/* <Button title={'Cancel'} onPress={() => setModalVisible(false)} /> */}

          <Button title={'Take Photo'} handelSubmit={() => openImagePicker('camera')} />
          <Button title={'Choose from Gallery'} handelSubmit={() => openImagePicker('gallery')} />



        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: COLORS.backgroundModal,
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    padding: 20,
  },

});

export default ImagePicker;
