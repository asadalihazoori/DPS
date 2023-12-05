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






        if (Platform.OS === 'android') {

            PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                {
                    title: 'Storage Permission',
                    message: 'App needs access to storage to download the PDF.',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                }
            )
                .then(async (granted) => {
                    console.log(granted);
                    if (granted === PermissionsAndroid.RESULTS.GRANTED) {

                        const pdfDir = `${RNFS.ExternalStorageDirectoryPath}/Download`;
                        await RNFS.mkdir(pdfDir, { NSURLIsExcludedFromBackupKey: true });

                        const pdfFilePath = `${pdfDir}/${title}`;

                        await RNFS.writeFile(pdfFilePath, b64Pdf, 'base64');

                        console.log('PDF Downloaded', `PDF saved to: ${pdfFilePath}`);
                        setLoading(false);
                        Alert.alert(`PDF Downloaded`, `PDF saved to: ${pdfFilePath}`);


                    } else {
                        setLoading(false);
                        Alert.alert('Storage Permission denied', 'Enable Permission to Write in Storage');
                    }
                });
        }










        // const pdfDir = `${RNFS.ExternalStorageDirectoryPath}/Download`;
        // await RNFS.mkdir(pdfDir, { NSURLIsExcludedFromBackupKey: true });

        // const pdfFilePath = `${pdfDir}/${title}`;

        // await RNFS.writeFile(pdfFilePath, b64Pdf, 'base64');

        // console.log('PDF Downloaded', `PDF saved to: ${pdfFilePath}`);
        // setLoading(false);
        // Alert.alert(`PDF Downloaded`, `PDF saved to: ${pdfFilePath}`);










    } catch (error) {
        console.log('Error while downloading PDF:', `${error}`);
        Alert.alert('Storage Permission denied', 'Enable Permission to Write in Storage');
        setLoading(false);
    }
};
