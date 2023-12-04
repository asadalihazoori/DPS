import { StyleSheet, View, Alert } from 'react-native'
import React from 'react'
import Pdf from 'react-native-pdf';
import RNFS from 'react-native-fs';
import { PermissionsAndroid, Platform } from 'react-native';
import Button from './Buttons/Button';

const PDF = ({ b64_pdf, title }) => {
    const downloadPdf = async (b64Pdf) => {
        try {
            // Check for permission to write to external storage (Android only)
            // if (Platform.OS === 'android') {
            //     const granted = await PermissionsAndroid.request(
            //         PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            //         {
            //             title: 'Storage Permission',
            //             message: 'App needs access to storage to download the PDF.',
            //             buttonNeutral: 'Ask Me Later',
            //             buttonNegative: 'Cancel',
            //             buttonPositive: 'OK',
            //         }
            //     );

            //     if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
            //         console.log('Storage permission denied.');
            //         return;
            //     }
            // }

            // customize the path
            const pdfDir = `${RNFS.ExternalStorageDirectoryPath}/Download`;
            await RNFS.mkdir(pdfDir, { NSURLIsExcludedFromBackupKey: true });

            const timestamp = new Date().getTime();
            // const pdfFileName = `Payslip ( ${timestamp} ).pdf`;
            const pdfFilePath = `${pdfDir}/${title}`;

            // Save the base64 PDF data to the file
            await RNFS.writeFile(pdfFilePath, b64Pdf, 'base64');

            console.log('PDF Downloaded', `PDF saved to: ${pdfFilePath}`);
            Alert.alert(`PDF saved to: ${pdfFilePath}`);

            // Open the PDF using the default PDF viewer (you can use a library to view PDFs within the app)
            // await RNFS.openFile(pdfFilePath);
        } catch (error) {
            console.error('Error while downloading PDF:', error);
        }
    };


    return (
        <View style={styles.container}>
            <Pdf
                source={{ uri: `data:application/pdf;base64,'${b64_pdf}`, cache: true }}
                onLoadComplete={(numberOfPages, filePath) => {
                    // console.log(`Number of pages: ${filePath}`);
                }}
                onPageChanged={(page, numberOfPages) => {
                    // console.log(`Current page: ${page}`);
                }}
                onError={(error) => {
                    console.log(error);
                }}
                onPressLink={(uri) => {
                    console.log(`Link pressed: ${uri}`);
                }}
                style={styles.pdf} />
            {/* <Button title="Download PDF" onPress={downloadPdf} /> */}
            {/* <Button title="Download PDF" onPress={() => downloadPdf(b64_pdf)} /> */}

            <View style={{ marginHorizontal: 20 }}>
                <Button title={'Download PDF'} handelSubmit={() => downloadPdf(b64_pdf)} />

            </View>
        </View>

    )
}

export default PDF

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // borderWidth: 1,
        // justifyContent: 'flex-start',
        // alignItems: 'center',
        // marginTop: 25,
        backgroundColor: 'white',
    },
    pdf: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    }
})