import * as yup from 'yup';

export const CreateCustomerValidation = yup.object().shape({

    email: yup
        .string().email().required("Email is required"),
    name: yup.string().required("First Name is required"),
    phone: yup.string()
        .matches("^[0-9]+$", "Plaese enter number")
        .required("Phone number is required"),
})