import * as yup from 'yup';

export const MedicalClaimRequestSchema = yup.object().shape({

    claimFor: yup.object().required("Claim Person is required"),
    disease: yup.object().required("Disease is required"),
    claimAmount: yup.number()
        .required("Amount is required")
        .typeError("Invalid Amount"),
    description: yup.string().trim().required("Description is required"),


})