import * as yup from 'yup';

export const ChangePasswordSchema = yup.object().shape({

    password: yup.string().trim().required("Password is required"),
    confirmPassword: yup.string().trim()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required("Confirm Password is required"),

})