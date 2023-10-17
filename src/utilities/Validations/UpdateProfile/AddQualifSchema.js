import * as yup from 'yup';

export const AddQualifSchema = yup.object().shape({


    qualification: yup
        .string().trim().required("Company is required"),
    passing_year: yup.string().trim().required("Designation is required"),
    institue: yup.string().required("Date is required"),
    // child_id: yup.string().trim().required('B.Form is required')
    // phone: yup.string()
    //     .matches("^[0-9]+$", "Plaese enter number")
    //     .required("Phone number is required"),
})
