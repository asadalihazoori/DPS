import * as yup from 'yup';

export const CreateAttendanceSchema = yup.object().shape({

    startDate: yup.string().nullable(),
    endDate: yup.string().nullable(),
})
    .test('at-least-one-required', 'Either Start Time or End Time is required', function (values) {
        const { startDate, endDate } = values;
        if (!startDate && !endDate) {
            return this.createError({
                path: 'startDate',
                message: 'Either Start Date or End Date is required',
            });
        }
        return true;
    })