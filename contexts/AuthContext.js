import { useReducer,useEffect, createContext } from "react";
import AuthReducer from "./AuthReducer";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./../firebase";

const INITIAL_STATE = {
    //SHOULD NOT USE LOCAL STORAGE, SUPER RISKY
    currentUser: JSON.parse(localStorage.getItem("user")) || "{}", //gets current user from local storage or sets to null
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    useEffect(() => {
        //SHOULD NOT USE LOCAL STORAGE, SUPER RISKY
       // localStorage.setItem("user", JSON.stringify(state.currentUser)); //stores user in local storage so stays logged in
        onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch({
                    type: "LOGIN",
                    payload: user,
                });
            } else {
                dispatch({
                    type: "LOGOUT",
                });
            }
        });

    }, [state.currentUser])


    return (
        <AuthContext.Provider
            value={{
                currentUser: state.currentUser,
                dispatch
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}