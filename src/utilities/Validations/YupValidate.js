
const inputValidation = async (schema, data) => {

    try {
        const success = await schema.validate(data, { abortEarly: false });
        if (success) {
            return { isValidate: true };
        }
    } catch (err) {

        const validationErrors = {};

        err.inner.forEach(error => {
            if (error.path) {
                validationErrors[error.path] = error.message;
            }
        });

        return { isValidate: false, err: validationErrors };
    }
}

export default inputValidation