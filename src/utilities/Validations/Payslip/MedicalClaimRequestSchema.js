import * as yup from 'yup';

export const PayslipScema = yup.object().shape({

    year: yup.string().required("year is required"),
    month: yup.string().required("month is required"),
    // claimAmount: yup.number()
    //     .required("Amount is required")
    //     .typeError("Invalid Amount"),
    // description: yup.string().trim().required("Description is required"),


})