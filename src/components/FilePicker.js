import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

import DocumentPicker from 'react-native-document-picker';
import TouchableView from './Buttons/TouchableView';

const FilePicker = () => {
  const [singleFile, setSingleFile] = useState('');
  const [multipleFile, setMultipleFile] = useState([]);

  const selectOneFile = async () => {

    try {
      const res = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.allFiles],

      });

      console.log(res);

      setSingleFile(res);
    } catch (err) {

      if (DocumentPicker.isCancel(err)) {
        alert('Canceled from single doc picker');
      }
      else {
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  const selectMultipleFile = async () => {
    try {
      const results = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
        // presentationStyle: 'fullScreen',
        allowMultiSelection: true,
      });

      console.log(results);
      setMultipleFile(results);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        alert('Canceled from multiple doc picker');
      } else {
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  return (

    // <SafeAreaView style={{ flex: 1 }}>
    //   <Text style={styles.titleText}>
    //     Example of File Picker in React Native
    //   </Text>
    //   <View style={styles.container}>
    //     <TouchableOpacity
    //       activeOpacity={0.5}
    //       style={styles.buttonStyle}
    //       onPress={selectOneFile}>
    //       <Text style={{ marginRight: 10, fontSize: 19 }}>
    //         Click here to pick one file
    //       </Text>
    //       <Image
    //         source={{
    //           uri: 'https://img.icons8.com/offices/40/000000/attach.png',
    //         }}
    //         style={styles.imageIconStyle}
    //       />
    //     </TouchableOpacity>
    //     <Text style={styles.textStyle}>
    //       File Name: {singleFile.name ? singleFile.name : ''}
    //       {'\n'}
    //       Type: {singleFile.type ? singleFile.type : ''}
    //       {'\n'}
    //       File Size: {singleFile.size ? singleFile.size : ''}
    //       {'\n'}
    //       URI: {singleFile.uri ? singleFile.uri : ''}
    //       {'\n'}
    //     </Text>
    //     <View
    //       style={{
    //         backgroundColor: 'grey',
    //         height: 2,
    //         margin: 10
    //       }} />
    //     <TouchableOpacity
    //       activeOpacity={0.5}
    //       style={styles.buttonStyle}
    //       onPress={selectMultipleFile}>
    //       <Text style={{ marginRight: 10, fontSize: 19 }}>
    //         Click here to pick multiple files
    //       </Text>
    //       <Image
    //         source={{
    //           uri: 'https://img.icons8.com/offices/40/000000/attach.png',
    //         }}
    //         style={styles.imageIconStyle}
    //       />
    //     </TouchableOpacity>
    //     <ScrollView>
    //       {multipleFile?.map((item, key) => (
    //         <View key={key}>
    //           <Text style={styles.textStyle}>
    //             File Name: {item.name ? item.name : ''}
    //             {'\n'}
    //             Type: {item.type ? item.type : ''}
    //             {'\n'}
    //             File Size: {item.size ? item.size : ''}
    //             {'\n'}
    //             URI: {item.uri ? item.uri : ''}
    //             {'\n'}
    //           </Text>
    //         </View>
    //       ))}
    //     </ScrollView>
    //   </View>
    // </SafeAreaView>
    <TouchableView label={'Select File'} text={singleFile?.name ? singleFile?.name : 'Choose'} handleModal={selectOneFile} />
  );
};

export default FilePicker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    backgroundColor: '#fff',
    fontSize: 15,
    marginTop: 16,
    color: 'black',
  },
  buttonStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#DDDDDD',
    padding: 5,
  },
  imageIconStyle: {
    height: 20,
    width: 20,
    resizeMode: 'stretch',
  },
});