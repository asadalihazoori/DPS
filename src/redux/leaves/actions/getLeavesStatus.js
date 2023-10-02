import { useSelector } from "react-redux";
import { getLeaveStatusApi } from "../../../utilities/api/apiController";
import { get_leaves_status } from "../leaves.action";
// import { getEmployeeProfileApi } from "../../../utilities/api/ApiLists/ProfileApiList";
// import { get_employee_profile } from "../profile.actions";


export const getLeavesStatus = ({ uid, navigation }) => {

    // const uid = useSelector((state) => state.signin.uid);

    return async (dispatch) => {

        try {

            const body = {
                "jsonrps": 2.0,
                "params": {
                    "employee_id": uid
                }
            }

            const response = await getLeaveStatusApi({ body, navigation });

            if (response?.data?.result?.status == 200) {
                dispatch(get_leaves_status(response?.data?.result?.response))
                // console.log(response?.data?.result?.response)

            } else {

            }
        }

        catch (error) {
            console.log(error, "error")
        }

    }
}