// Sign Up
const signUp = () => {
    return {
        message: "You have successfully signed up",
        user: {
            username: "4fr0c0d3"
        }
    };
};

// Login 
const login = () => {
    return {
        message: "You have successfully logged in",
        token: "token",
        user: {
            username: "4fr0c0d3"
        }
    };
};

export default {
    signUp,
    login
}