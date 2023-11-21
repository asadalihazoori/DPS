import * as yup from 'yup';

export const AddSpouseSchema = yup.object().shape({

    spouse_name: yup.string().trim().required("Name is required"),
    s_dob: yup.string().trim().required('DOB is required'),
    s_cnic: yup.string().trim().required('B.Form is required'),
    s_contact: yup.string()
        .matches("^[0-9]+$", "Plaese enter number")
        .required("Phone number is required"),
})
