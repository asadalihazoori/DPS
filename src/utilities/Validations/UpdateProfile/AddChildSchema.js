import * as yup from 'yup';

export const AddChildSchema = yup.object().shape({

    child_name: yup.string().trim().required("Name is required"),
    mother_name: yup.string().trim().required("Mother Name is required"),
    status: yup.string().required("Relation is required"),
    dob: yup.string().trim().required('DOB is required'),
    child_id: yup.string().trim().required('B.Form is required')
})
