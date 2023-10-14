import * as yup from 'yup';

export const CreateShiftSchema = yup.object().shape({

    selectedShift: yup.object().required("Shift is required"),
    startDate: yup.string().required("Date is required"),
    endDate: yup.string().required("Date is required"),
    reason: yup.string().trim().required("Reason is required"),

})