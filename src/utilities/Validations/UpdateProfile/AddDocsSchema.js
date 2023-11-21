import * as yup from 'yup';

export const AddDocsSchema = yup.object().shape({

    name: yup.string().trim().required("Company is required"),
    description: yup.string().trim().required("Designation is required"),
    date: yup.string().required("Date is required"),

})
