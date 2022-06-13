import { useContext, createContext, useReducer } from "react";

const authContext = createContext();

const useAuth = () => useContext(authContext);

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
            }
            case "SIGNUP" :
                return{
                    ...state,
                    loading: false,
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
}

const AuthProvider = ({children}) => {
    const [authState, authDispatch] = useReducer(authReducer, initialAuthState);
    return (
        <authContext.Provider value = {{authState, authDispatch}}>
            {children}
        </authContext.Provider>
    )
}

export { useAuth, AuthProvider}

