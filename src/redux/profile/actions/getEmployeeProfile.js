import { getEmployeeProfileApi, getEmployeeProfileWagsApi } from "../../../utilities/api/ApiList/ProfileApiList";
import { get_employee_profile } from "../profile.actions";
import { Alert } from "react-native";


export const getEmployeeProfile = ({ uid, navigation, setLoading }) => {

    return async (dispatch) => {

        try {

            const body = {
                "params": {
                    "model": "hr.employee.wags",
                    "method": "search_read",
                    "args": [[["user_id", "=", uid]]],
                    "kwargs": {
                        "fields": ["id",
                            "name",
                            "image_1920",
                            "category_ids",
                            "employee_code",
                            "company_id",
                            "work_email",
                            "mobile_phone",
                            "emergency_name",
                            "emergency_relation",
                            "emergency_cell_number",
                            "passport_id",
                            "passport_issue_date",
                            "passport_expiry_date",
                            "joining_date",
                            "no_of_years",
                            "nationality_type",
                            "country_id",
                            "visa_no",
                            "visa_expiry",
                            "identification_id",
                            "id_issue_date",
                            "id_expiry_date",
                            "bank_name",
                            "bank_account",
                            "gender",
                            "marital",
                            "birthday",
                            "place_of_birth",
                            "department_id",
                            "job_id",
                            "company_location",
                            "manager_id",
                            "wage"]
                    }
                }
            }

            const response = await getEmployeeProfileWagsApi({ body, navigation });
            // console.log(response.data);
            // setLoading(false);

            if (response?.data?.result) {

                if (response?.data?.result?.[0]) {


                    const profieData = response?.data?.result?.[0];
                    dispatch(get_employee_profile(profieData))

                    if (setLoading) {
                        setLoading(false)
                        navigation.reset({
                            index: 0,
                            routes: [
                                {
                                    name: 'DrawerNavigation',
                                },
                            ],
                        });
                    }
                }
                else {
                    Alert.alert("Profile Not Found !", `Please create profile of this user or link user with an Employee`);
                }

            }


            else if (response?.data?.error) {
                Alert.alert(response?.data?.error?.message, `${response?.data?.error?.data?.message}`);
            }

            else if (response == 'AxiosError: Request failed with status code 404') {
                Alert.alert("Session Expired", `Please Login Again`);
            }

            else if (response == "AxiosError: Network Error") {
                Alert.alert("Internet Connection Failed", "Try to connect with Wifi or Mobile Network");
            }
            else {
                Alert.alert("Error", "Try Again");

            }
        }

        catch (error) {
            console.log("EmployeeProfile", error)
        }

    }
}