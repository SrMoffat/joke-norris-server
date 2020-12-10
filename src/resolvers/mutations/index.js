// Sign Up Resolver
const signUp = () => {
    return {
        message: "Sign Up was successful",
        user: {
            username: "4fr0c0d3"
        }
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