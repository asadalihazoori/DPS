import RNFS from 'react-native-fs';
import { Alert } from 'react-native';

export const downloadPdf = async (b64Pdf, title, setLoading) => {
    try {

        console.log("download ", title)

        const appDir = RNFS.DocumentDirectoryPath;
        await RNFS.mkdir(appDir, { NSURLIsExcludedFromBackupKey: true });

        const pdfFilePath = `${appDir}/${title}.pdf`;
        await RNFS.writeFile(pdfFilePath, b64Pdf, 'base64');


        console.log('PDF Downloaded', `PDF saved to: ${pdfFilePath}`);
        moveFileToDownloads(title, pdfFilePath, setLoading);
        console.log("download ", pdfFilePath)

    } catch (error) {
        console.log('Error while downloading PDF:', `${error}`);
        Alert.alert('Storage Permission denied', 'Enable Permission to Write in Storage');
        setLoading(false);
    }
};


async function moveFileToDownloads(title, sourceFilePath, setLoading) {
    try {


        const downloadsDir = RNFS.DownloadDirectoryPath;
        const timestamp = new Date().getTime().toString().substring(8, 12);

        const destinationFilePath = `${downloadsDir}/${title}_${timestamp}.pdf`;

        await RNFS.moveFile(sourceFilePath, destinationFilePath);

        console.log('File Moved', `File moved to: ${destinationFilePath}`);
        setLoading(false)
        Alert.alert('PDF Downloaded', `File saved to: ${destinationFilePath}`);

    } catch (error) {
        setLoading(false);
        console.log('Error moving file:', error);
        Alert.alert('Error', 'Failed to move the file. Please try again.');
    }
}
