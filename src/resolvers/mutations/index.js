const { sign } = require("jsonwebtoken");
const { hash } = require("bcryptjs");
const { v4 } = require("uuid");

const { userPayload, validateUserPayload } = require("../../utils");

/**
 * Create a new user in the DB
 * @param {{usename: string; password: string;}} user
 * @returns
 */
const signUp = async (parent, { input }, context, info) => {
    const { username, password } = input;
    const error = await validateUserPayload(userPayload, input);
    if(error){
        const { path: field, message } = error;
        return {
            error: {
                field,
                message
            }
        };
    };
    const hashedPassord = await hash(password, 10);

    // TODO: Check if username exists in DB, if yes, exit with error
    const userExists = false;
    if(userExists){
        return {
            error: {
                field: "username",
                message: "User already exists!"
            }
        };
    };
    const newUser = {
        username,
        password,
        user_id: v4()
    };
    // TODO: Insert new user to DB
    return {
        message: "Sign Up was successful",
        user: newUser
    };
};

// Login Resolver
const login = () => {
    return {
        payload: {
            message: "Login was successful",
            token: "token",
            user: {
                username: "4fr0c0d3"
            }
        },
    }
};
module.exports = {
    signUp,
    login
}