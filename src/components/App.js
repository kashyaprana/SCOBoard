//import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

//imports to route to specific pages
// import {Navbar} from "./navbar/navbar";
// import {HomePage} from "../pages/homepage";
// import {AboutPage} from "../pages/about";
// import {SchedulerPage} from "../pages/scheduler";
// import {ContactPage} from "../pages/contact";

// //imports to setup login with firebase and react, email logins only
import { getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase";
import { useState } from "react";
import React from 'react'
import Signup from "./Signup";
import { Container } from "react-bootstrap";
//import { AuthProvider } from "../contexts/AuthContext";

//a lot of code here is from firebase docs, above imports are for the nav bar and redirects
function App() {

  const auth = getAuth(app);

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  //function to get user to sign up, uses firebase docs
  const signUp = () => {

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      alert("User Created");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      //const errorMessage = error.message;
      alert(errorCode)
      // ..
    });
  }
  //also from firebase docs
    const signIn = () => {

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      alert("User Signed In Successfully");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      //const errorMessage = error.message;
      alert(errorCode);
    });

}

// //sign out button, *** MAY NEED TO FIX **
// //   signOut(auth).then(() => {
    
// //     alert("User Signed Out Successfully");
// //   // Sign-out successful.
// // }).catch((error) => {
// //   // An error happened.
// // });

//buttons for email and password
  return (
    <div className = "main">
      <div className = 'App'>
        <h1> WELCOME TO THE UCF STUDENT CONDUCT OFFICE </h1>
        <input type = {"email"} placeholder = "Enter your email" onChange = {(e) => setEmail(e.target.value)}/>
        <input type = {"password"} placeholder = "Enter your password"onChange = {(e) => setPassword(e.target.value)} />

        <button onClick = {signUp}> Create Account </button>
        <button onClick = {signIn}> Sign in </button>
        <button onClick = {signOut}> Sign out </button>
      </div>
    </div>

    // <Router>
    //   <Navbar/>
    //   <Routes>
    //     <Route path = "/" exact element = {<HomePage/>}/>
    //     <Route path = "/about" element = {<AboutPage/>}/>
    //     <Route path = "/scheduler" element = {<SchedulerPage/>}/>
    //     <Route path = "/contact" element = {<ContactPage/>}/>
    //   </Routes>
    // </Router>

  );

}



export default App;
