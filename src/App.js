import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Navbar} from "./components/navbar/navbar";
import {HomePage} from "./pages/homepage";
import {AboutPage} from "./pages/about";
import {SchedulerPage} from "./pages/scheduler";
import {ContactPage} from "./pages/contact";
import { getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from "./firebase";
import { useState } from "react";
import './App.css';


function App() {
  const auth = getAuth(app);

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

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


  signOut(auth).then(() => {
    
    alert("User Signed Out Successfully");
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});

  return (
    <div className = "main">
      <div className = 'App'>
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
