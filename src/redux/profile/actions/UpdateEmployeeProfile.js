import { UpdateEmployeeProfileApi, } from "../../../utilities/api/ApiList/ProfileApiList";
import { Alert } from "react-native";


export const UpdateEmployeeProfile = ({ employeeID, profileFields, navigation, setLoading }) => {

    return async (dispatch) => {

        try {
            const body = {
                "jsonrps": 2.0,
                "params": {
                    "method": "create",
                    "model": "employee.profile.change",
                    "args": [{
                        "employee_id": employeeID,
                        // "department_id": 2,
                        // "date": "2023-09-09",
                        // "father_name": "abc",
                        // "father_cnic": "abc",
                        // "father_dob": "2003-03-03",
                        "live_status": profileFields?.father_live?.value,
                        // "father_opp": "abc",
                        // "curr_emp_father": "abc",
                        // "mother_name": "abc",
                        // "mother_cnic": "abc",
                        // "mother_dob": "2003-03-03",
                        "mother_status": profileFields?.mother_live?.value,
                        // "mother_opp": "abc",
                        // "curr_emp": "abc",
                        // "country_id": 2,
                        // "identification_id": profileFields.cnic,
                        // "passport_id": "abc",
                        // "bank_account_id": 1,
                        // "iban_no": "abc",
                        // "ssnid": "abc",
                        // "eobi_no": "abc",
                        // "marriage_date_rec": false,
                        // "phone": "0302222",
                        // "mobile_num": "03011111",
                        // "offical_phone_number": "abc",
                        // "first_email": "email@gmail.com",
                        "emergency_address": profileFields?.address,
                        // "par_address": "par_address",
                        // "gender": "male",
                        // "marital": "married",
                        // "children": "2",
                        // "birthday": "2023-09-09",
                        // "place_of_birth": "Sargodha",
                        // "home_town": "Sargodha",
                        // "age": "26",
                        // "age_group": "30",
                        // "blood_group": "b_positive",
                        "spouse_tree_id": profileFields?.spouse_tree_id,
                        // "spouse_tree_id": [
                        //     [0, 0, {
                        //         "spouse_name": "spouse_name",
                        //         "s_dob": "2023-09-09",
                        //         "s_contact": "s_contact",
                        //         "s_cnic": "s_cninc",
                        //         "spouse_age": 22
                        //     }],
                        //     [0, 0, {
                        //         "spouse_name": "spouse_name",
                        //         "s_dob": "2023-09-09",
                        //         "s_contact": "s_contact",
                        //         "s_cnic": "s_cninc",
                        //         "spouse_age": 22
                        //     }]
                        // ],
                        "family_tree_id": profileFields.family_tree_id,
                        // "family_tree_id": [
                        //     [0, 0, {
                        //         "child_name": "child_name",
                        //         "status": "son",
                        //         "mother_name": "mother_name",
                        //         "dob": "2023-09-09",
                        //         "child_id": "child_name",
                        //         "child_age": 2
                        //     }],
                        //     [0, 0, {
                        //         "child_name": "child_name",
                        //         "status": "son",
                        //         "mother_name": "mother_name",
                        //         "dob": "2023-09-09",
                        //         "child_id": "child_name",
                        //         "child_age": 2
                        //     }]
                        // ],
                        "employee_expert_id": profileFields?.employee_expert_id
                        // "employee_expert_id": [
                        //     [0, 0, {
                        //         "company": "company",
                        //         "designation": "designation",
                        //         "experience_from": "2023-09-09",
                        //         "experience_to": "2023-09-09",
                        //         "total_experience_diff": 3,
                        //         "attachment": false
                        //     }],
                        //     [0, 0, {
                        //         "company": "company",
                        //         "designation": "designation",
                        //         "experience_from": "2023-09-09",
                        //         "experience_to": "2023-09-09",
                        //         "total_experience_diff": 3,
                        //         "attachment": false
                        //     }]
                        // ],

                        // "employee_qualify_id": profileFields.employee_qualify_id,

                        // "employee_qualify_id": [
                        //     [0, 0, {
                        //         "qualification": 2,
                        //         "passing_year": 2,
                        //         "institue": 2,
                        //         "attachment": false
                        //     }],
                        //     [0, 0, {
                        //         "qualification": 4,
                        //         "passing_year": 4,
                        //         "institue": 4,
                        //         "attachment": false
                        //     }]
                        // ],
                        // "employee_certify_id": [
                        //     [0, 0, {
                        //         "certification": "certification",
                        //         "year": 2,
                        //         "conducting_institute": 2,
                        //         "duration": 4,
                        //         "attachment": false
                        //     }],
                        //     [0, 0, {
                        //         "certification": "certification",
                        //         "year": 4,
                        //         "conducting_institute": 3,
                        //         "duration": 6,
                        //         "attachment": false
                        //     }]
                        // ],
                        // "personal_doc": [
                        //     [0, 0, {
                        //         "name": "name",
                        //         "bilty_attach_char": "bilty_attach_char",
                        //         "description": "description",
                        //         "date": "2023-09-09",
                        //         "attachment": false
                        //     }],
                        //     [0, 0, {
                        //         "name": "name",
                        //         "bilty_attach_char": "bilty_attach_char",
                        //         "description": "description",
                        //         "date": "2023-09-09",
                        //         "attachment": false
                        //     }]
                        // ]
                    }],
                    "kwargs": {}
                }
            }

            const response = await UpdateEmployeeProfileApi({ body, navigation });
            // setLoading(false);
            console.log("resp", response?.data);

            if (response?.data?.result) {
                setLoading(false);
                Alert.alert("Confirmation", "Profile Change Requested Successfully")
            }

            else if (response?.data?.error) {
                Alert.alert(response?.data?.error?.message, `${response?.data?.error?.data?.message}`);
            }

            else if (response == 'AxiosError: Request failed with status code 404') {
                Alert.alert("Session Expired", `Please Login Again`);
            }

            else {
                Alert.alert("Internet Connection Failed", `${response}`);
            }

        } catch (error) {
            console.error(error);
        }
    }
}