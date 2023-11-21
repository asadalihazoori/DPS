import * as yup from 'yup';

export const AddQualifSchema = yup.object().shape({

    qualification: yup.string().trim().required("Company is required"),
    passing_year: yup.string().trim().required("Designation is required"),
    institue: yup.string().required("Date is required"),

})
