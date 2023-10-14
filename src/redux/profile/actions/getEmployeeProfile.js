import { useSelector } from "react-redux";
import { getEmployeeProfileApi } from "../../../utilities/api/ApiList/ProfileApiList";
import { get_employee_profile } from "../profile.actions";
import { Alert } from "react-native";


export const getEmployeeProfile = ({ uid, navigation }) => {

    return async (dispatch) => {

        try {

            const body = {
                "jsonrps": 2.0,
                "params": {
                    "employee_id": uid
                }
            }

            const response = await getEmployeeProfileApi({ body, navigation });
            console.log(response.data);

            if (response?.data?.result?.status == 200) {

                const profieData = response?.data?.result?.response;

                const family_info = [];
                family_info.push({
                    'relation': 'self',
                    'id': uid,
                    'name': profieData.name
                });

                if (profieData.father_live != 'dead') {
                    family_info.push({
                        'relation': 'father',
                        'id': '-1',
                        'name': profieData.father_name
                    });
                }

                if (profieData.mother_live != 'dead') {
                    family_info.push({
                        'relation': 'mother',
                        'id': '-2',
                        'name': profieData.mother_name
                    });
                }

                var spousData = profieData.spouse_info;
                for (var item = 0; item < spousData.length; item++) {
                    family_info.push(
                        {
                            'relation': 'spouse',
                            'id': spousData[item].id,
                            'name': spousData[item].spouse_name
                        }
                    )
                };

                var childData = profieData.child_info;
                for (var item = 0; item < childData.length; item++) {

                    family_info.push(
                        {
                            'relation': 'children',
                            'id': childData[item].id,
                            'name': childData[item].child_name
                        }
                    )
                }

                dispatch(get_employee_profile(profieData, family_info))

            }
            else if (response?.data?.error) {
                console.log('response?.data?.error');
                console.log(response?.data?.error);
                Alert.alert(response?.data?.error?.message, `${response?.data?.error?.data?.message}`);
            }

            else if (response == 'AxiosError: Request failed with status code 404') {
                Alert.alert("Session Expired", `Please Login Again`);
            }

            else {
                Alert.alert("Internet Connection Failed", `${response}`);

            }
        }

        catch (error) {
            console.log("EmployeeProfile", error)
        }

    }
}