import "./login.scss"
import {useState } from "react"
import { signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const Login = () => {

    const [error, setError] = useState(false);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const {dispatch} = useContext(AuthContext)

    const handleLogin = (e) => {
        e.preventDefault();
          
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      //console.log('user logged in');
      //alert("User logged in");
      dispatch({type: "LOGIN", payload: user}) //from auth reducer page
      navigate('/')
    })
    .catch((error) => {
      setError(true);
      //const errorMessage = error.message;
    
      // ..
    });
  }


  //also from firebase docs
  // Currently not using, have preset logins already in firebase setup
    // const signIn = () => {

    // createUserWithEmailAndPassword(auth, email, password)
    // .then((userCredential) => {
    //   // Signed in 
    //   const user = userCredential.user;
    //   console.log(user);
    //   alert("User Signed In Successfully");
    //   // ...
    // })
    // .catch((error) => {
    //   const errorCode = error.code;
    //   //const errorMessage = error.message;
    //   alert(errorCode);
    // });

    // }

    return (
        <div className="login">
        <form onSubmit = {handleLogin}>
            <input type = "email" placeholder = "email" onChange = {(e) => setEmail(e.target.value)}/>
            <input type = "password" placeholder = "password" onChange = {(e) => setPassword(e.target.value)} />
            <button type = "submit"> Login</button> 
            {error && <span> Wrong Email or Password! </span>}
        </form>
        </div>
    )
    }


export default Login