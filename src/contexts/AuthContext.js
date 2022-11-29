
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { setDoc, doc, collection, onSnapshot,  query, where } from "firebase/firestore";
import React, { useContext, useState, useEffect } from "react"
import { auth, db } from "../firebase"



const AuthContext = React.createContext({})


export function useAuth(){
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }) =>{
    
    const [currentUser, setCurrentUser] = useState({})
    const [role, setRole] = useState({})
    const [document, setDocument] = useState({})
    const [loading, setLoading] = useState(true)

    //These functions are taken straight from firebase website
    function login(email, password){
        return signInWithEmailAndPassword(auth, email, password)
            
    }

    //this creates user auth and assigns admin role as false for the account
    function signup(email, password, firstName, lastName){
        return createUserWithEmailAndPassword(auth, email, password,firstName, lastName).then(async (cred) => {
            const ref = doc(db, "users", cred.user.uid);
                const docRef = await setDoc(ref,  {
                    email: email,
                    name : firstName, lastName,
                    admin: false
                });
        })
    }
    
    function logout() {
        return signOut(auth)
      }

    const findRole = (cred) => {
        return db.collection('users').doc(cred.user.uid).get().then((querySnapshot) => {
            if(querySnapshot.data()){
                const data = querySnapshot.data();
                setDocument(data);
                setRole(data.email)
                console.log(data);
            }
        }).catch((err) => {
            console.log("error fetching document");
            console.log("ERROR : " + err.message);
        })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            
            setCurrentUser(user)

            setLoading(false)
        });

        return () => {
            unsubscribe();
          };
    }, []);
    

    const value = {
        currentUser,
        login,
        signup,
        logout,
        findRole,
        role
        

    }
  
    return (
    <AuthContext.Provider value = {value}>
        {children}

    </AuthContext.Provider>
  )
}