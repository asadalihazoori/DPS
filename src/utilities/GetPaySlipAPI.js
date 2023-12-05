import { Alert } from "react-native";
import { getEmployeePayslipApi } from "./api/apiController";
import { downloadPdf } from "./DownloadPdf";

export const GetPaySlipAPI = async (uid, dateStr, setLoading, navigation) => {

    // setDate(dateStr);
    // setLoading(true);
    // console.log(uid, dateStr, setLoading)

    try {
        const body = {
            "jsonrps": 2.0,
            "params": {
                "employee_id": uid,
                "date": `${dateStr}-01`
            }
        };
        const response = await getEmployeePayslipApi({ body, navigation });
        console.log(response?.data?.result);

        if (response?.data?.result?.response?.b64_pdf) {
            // setLoading(false)
            // console.log(response?.data?.result?.response?.b64_pdf)
            const base64 = response?.data?.result?.response?.b64_pdf;
            downloadPdf(base64, `Wags Payslip ( ${dateStr} ).pdf`, setLoading)
        }

        else if (response?.data?.result?.status == 400) {
            setLoading(false)
            Alert.alert("PDF Not Downloaded", response?.data?.result?.response)
        }

        else if (response?.data?.error) {
            setLoading(false)
            Alert.alert(response?.data?.error?.message, response?.data?.error?.data?.message)
        }

        else if (response == 'AxiosError: Request failed with status code 404') {
            setLoading(false)
            Alert.alert("Session Expired", `Please Login Again`);
        }

        else if (response == "AxiosError: Network Error") {
            setLoading(false)
            Alert.alert("Internet Connection Failed", "Try to connect with Wifi or Mobile Network");
        }

        else {
            setLoading(false)
            Alert.alert("Error", "Try Again");

        }

    }

    catch (error) {
        console.log(error);
        setLoading(false);

    }
};

