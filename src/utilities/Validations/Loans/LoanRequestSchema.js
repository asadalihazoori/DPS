import * as yup from 'yup';

export const LoanRequestSchema = yup.object().shape({

    amount: yup.number()
        .typeError("Invalid Amount")
        .required("Amount is required"),
    type: yup.object().required("Loan Type is required"),
    reason: yup.string().trim().required("Reason is required"),


})