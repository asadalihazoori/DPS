import React, { createContext, useState } from "react";
import { useDispatch } from "react-redux";
import inputValidation from "../utilities/Validations/YupValidate";
import { LoginSchema } from "../utilities/Validations";
import { siginin } from "../redux/users/actions/signin";

const AuthContext = createContext();

const AuthProvider = ({ children, navigation }) => {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    const [inputs, setInputs] = useState({
        username: null,
        password: null,
        loggedIn: true,
        errors: null,
    });

    const handleOnChange = (field, value) => {
        setInputs({
            ...inputs,
            [field]: value,
            errors: {
                ...inputs.errors,
                [field]: false
            }
        })
    }


    const validate = async () => {

        const result = await inputValidation(LoginSchema, inputs)

        if (result.isValidate) {
            handleLogin();

        } else {
            setInputs(prev => ({
                ...prev,
                errors: result?.err
            }))
        }

    }

    const handleLogin = async () => {

        setLoading(true);

        dispatch(siginin({
            navigation, inputs, setLoading
        }))
    }


    return (
        <AuthContext.Provider
            value={{
                loading,
                inputs,
                validate,
                handleOnChange,
                setInputs,

            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };