const { sign } = require("jsonwebtoken");
const { hash, compare } = require("bcryptjs");
const { v4 } = require("uuid");

const { userPayload, validateUserPayload } = require("../../utils");

/**
 * Create a new user in the DB
 * @param {{username: string; password: string;}} user
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
    const userExists = await context.prisma.user.findFirst({
        where: {
            username,
        }
    });
    if(userExists){
        return {
            error: {
                field: "username",
                message: "User already exists!"
            }
        };
    };
    const newUser = await context.prisma.user.create({
        data: {
            ...input,
            password: hashedPassord,
            user_id: v4()
        },
    });
    return {
        message: "Sign Up was successful",
        user: newUser
    };
};

/**
 * Log in/ Authenticate an existing user 
 * @param {{username: string; password: string;}} user
 * @returns
 */
const login = async (parent, { input }, context, info) => {
    const { username, password } = input;
    const userExists = await context.prisma.user.findFirst({
        where: {
            username,
        }
    });
    if(!userExists){
        return {
            error: {
                field: "Username",
                message: "User does not exist"
            }
        };
    };
    const validPassword = await compare(password, userExists.password);
    if(!validPassword){
        return {
            error: {
                field: "Password",
                message: "Invalid password"
            }
        };
    };
    const token = sign({
        user: input,
    }, "4fr0c0d3r0ck5!!") // TODO: Add this to .env
    return {
        payload: {
            message: "Login was successful",
            token,
            user: userExists
        },
    }
};
module.exports = {
    signUp,
    login
}
