const yup = require("yup");

const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#\$%\^\&*\\-]{8,}$/;
const passwordLiteral = /[^password]/;

const userPayload = yup.object().shape({
    username: yup
                .string()
                .trim()
                .min(3, "Username should be more than 3 characters")
                .max(12, "Username should be less than 12 characters")
                .required("Username is required"),
    password: yup
                .string()
                .trim()
                .min(8, "Password should be more 8 characters")
                .required("Password is required")
                .matches(passwordLiteral, "Password cannot be 'Password'")
                .matches(passwordRegex, "Password must have a 1 number, 1 lowercase and 1 uppercase")
});

const validateUserPayload = async (schema, payload) => {
    try {
        await schema.validate(payload);

    } catch(error){
        return error;
    }
};

module.exports = {
    userPayload,
    validateUserPayload
};
