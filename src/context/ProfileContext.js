import React, { createContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UpdateEmployeeProfile } from "../redux/profile/actions/UpdateEmployeeProfile";

const ProfileContext = createContext();

const ProfileProvider = ({ children, navigation }) => {

    const dispatch = useDispatch();
    const employeeID = useSelector((state) => state.employeeProfile.employeeID);

    const [profileFields, setProfileFields] = useState({
        image: null,
        name: null,
        cnic: null,
        address: null,

        father_name: null,
        father_live: null,

        mother_name: null,
        mother_live: null,

        spouse_name: null,
        child_info: null,


        spouse_tree_id: [],
        family_tree_id: [],
        employee_qualify_id: [],
        employee_expert_id: [],

        errors: null
    });

    const handelSubmit = (setLoading) => {

        console.log(profileFields);
        setLoading(true);

        dispatch(UpdateEmployeeProfile({
            employeeID,
            profileFields,
            navigation,
            setLoading
        }))
    }

    return (
        <ProfileContext.Provider
            value={{
                profileFields,
                setProfileFields,
                handelSubmit
            }}
        >
            {children}
        </ProfileContext.Provider>
    );
};

export { ProfileContext, ProfileProvider };