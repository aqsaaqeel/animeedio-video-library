import { useContext, createContext, useReducer } from "react";

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

const authReducer = (state, action) => {
    switch(action.type){
        case "LOADING" :
            return {
                ...state,
                loading : true
            }
        case "LOGIN" :
            return {
                ...state,
                loading : false,
                encodedToken : action.token,
                isLoggedIn : true,
                user : action.user,
                error: false
            }
        default :
        return { ...state };
    }
};

const initialAuthState = {
    loading : false,
    encodedToken : localStorage.getItem("encodedToken") ? localStorage.getItem("encodedToken") : "",
    isLoggedIn : localStorage.getItem("encodedToken") ? true : false,
    user : "",
    error: false
}

const AuthProvider = ({children}) => {
    const [authState, authDispatch] = useReducer({authReducer, initialAuthState})
    return (
        <AuthContext.Provider value = {{authState, authDispatch}}>
            {children}
        </AuthContext.Provider>
    )
}

export { useAuth, AuthProvider}

