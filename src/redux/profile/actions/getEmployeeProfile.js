import { useSelector } from "react-redux";
import { getEmployeeProfileApi } from "../../../utilities/api/ApiLists/ProfileApiList";
import { get_employee_profile } from "../profile.actions";


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

            if (response?.status == 200) {
                dispatch(get_employee_profile(response?.data?.result?.response))
                // console.log(response?.data?.result?.response)

            } else {

            }
        }

        catch (error) {
            console.log(error, "error")
        }

    }
}