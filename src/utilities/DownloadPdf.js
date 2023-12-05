import RNFS from 'react-native-fs';
import { Alert, PermissionsAndroid, Platform } from 'react-native';

export const downloadPdf = async (b64Pdf, title, setLoading) => {
    try {
        // Check for permission to write to external storage(Android only)
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
        //         setLoading(false);
        //         return;
        //     }
        // }






        // if (Platform.OS === 'android') {

        //     PermissionsAndroid.request(
        //         PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        //         {
        //             title: 'Storage Permission',
        //             message: 'App needs access to storage to download the PDF.',
        //             buttonNeutral: 'Ask Me Later',
        //             buttonNegative: 'Cancel',
        //             buttonPositive: 'OK',
        //         }
        //     )
        //         .then(async (granted) => {
        //             console.log(granted);
        //             if (granted === PermissionsAndroid.RESULTS.GRANTED) {

        //                 const appDir = RNFS.DocumentDirectoryPath;

        //                 // Create a directory if it doesn't exist
        //                 await RNFS.mkdir(appDir, { NSURLIsExcludedFromBackupKey: true });
        //                 const pdfFilePath = `${appDir}/${title}.pdf`;


        //                 // const pdfDir = `${RNFS.ExternalStorageDirectoryPath}/Download`;
        //                 // await RNFS.mkdir(pdfDir, { NSURLIsExcludedFromBackupKey: true });

        //                 // const pdfFilePath = `${pdfDir}/${title}`;

        //                 await RNFS.writeFile(pdfFilePath, b64Pdf, 'base64');

        //                 console.log('PDF Downloaded', `PDF saved to: ${pdfFilePath}`);
        //                 setLoading(false);
        //                 Alert.alert(`PDF Downloaded`, `PDF saved to: ${pdfFilePath}`);


        //             } else {
        //                 setLoading(false);
        //                 Alert.alert('Storage Permission denied', 'Enable Permission to Write in Storage');
        //             }
        //         });
        // }










        // const pdfDir = `${RNFS.ExternalStorageDirectoryPath}/Download`;
        // await RNFS.mkdir(pdfDir, { NSURLIsExcludedFromBackupKey: true });

        // const pdfFilePath = `${pdfDir}/${title}`;




        const appDir = RNFS.DocumentDirectoryPath;
        await RNFS.mkdir(appDir, { NSURLIsExcludedFromBackupKey: true });
        const pdfFilePath = `${appDir}/${title}`;
        // console.log(pdfFilePath);
        // console.log(title);

        await RNFS.writeFile(pdfFilePath, b64Pdf, 'base64');

        console.log('PDF Downloaded', `PDF saved to: ${pdfFilePath}`);
        // setLoading(false);
        // Alert.alert(`PDF Downloaded`, `PDF saved to: ${pdfFilePath}`);

        moveFileToDownloads(title, setLoading);








    } catch (error) {
        console.log('Error while downloading PDF:', `${error}`);
        Alert.alert('Storage Permission denied', 'Enable Permission to Write in Storage');
        setLoading(false);
    }
};




async function moveFileToDownloads(title, setLoading) {
    try {
        // Get the app's document directory
        const appDir = RNFS.DocumentDirectoryPath;

        // Specify the current file path within the app's directory
        const sourceFilePath = `${appDir}/${title}`;

        // Get the device's downloads directory
        const downloadsDir = RNFS.DownloadDirectoryPath;

        // Specify the destination file path in the downloads directory
        const destinationFilePath = `${downloadsDir}/${title}`;

        // Move the file from the app's directory to the downloads directory
        await RNFS.moveFile(sourceFilePath, destinationFilePath);


        setLoading(false);
        console.log('File Moved', `File saved to: ${destinationFilePath}`);
        Alert.alert('PDF Downloaded', `File saved to: ${destinationFilePath}`);
    } catch (error) {
        setLoading(false);
        console.error('Error moving file:', error);
        Alert.alert('Error', 'Failed to move the file. Please try again.');
    }
}
