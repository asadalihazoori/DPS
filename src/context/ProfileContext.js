import React, { createContext, useState } from "react";
import { useSelector } from "react-redux";

// const ProfileContext = React.createContext();
const ProfileContext = createContext();

const ProfileProvider = ({ children, navigation }) => {

    const profileData = useSelector((state) => state.employeeProfile.data);

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

        errors: null
    })

    return (
        <ProfileContext.Provider
            value={{
                profileFields,
                setProfileFields,
            }}
        >
            {children}
        </ProfileContext.Provider>
    );
};

export { ProfileContext, ProfileProvider };