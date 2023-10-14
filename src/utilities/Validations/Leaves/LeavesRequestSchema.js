import * as yup from 'yup';

export const LeavesRequestSchema = yup.object().shape({

    holidayType: yup.object().required("LeaaveType is required"),
    startDate: yup.string().required("Date is required"),
    endDate: yup.string().required("Date is required"),
    reason: yup.string().trim().required("Reason is required"),

})
