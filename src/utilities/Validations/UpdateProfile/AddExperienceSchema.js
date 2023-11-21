import * as yup from 'yup';

export const AddExperienceSchema = yup.object().shape({

    company: yup.string().trim().required("Company is required"),
    designation: yup.string().trim().required("Designation is required"),
    experience_from: yup.string().required("Date is required"),
    experience_to: yup.string().trim().required('Date is required'),

})
