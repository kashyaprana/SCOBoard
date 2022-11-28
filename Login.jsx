import "./login.scss"
import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { AuthProvider, useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom"
import videoUCF from "../../images/chargeon.mp4"

const Login = () => {

  // const [error, setError] = useState(false);
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")

  // const navigate = useNavigate()

  // const { dispatch } = useContext(AuthContext)

  // const handleLogin = (e) => {
  //   e.preventDefault();

  //   signInWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       // Signed in 
  //       const user = userCredential.user;
  //       //console.log('user logged in');
  //       //alert("User logged in");
  //       dispatch({ type: "LOGIN", payload: user }) //from auth reducer page
  //       navigate('/')
  //     })
  //     .catch((error) => {
  //       setError(true);
  //       //const errorMessage = error.message;

  //       // ..
  //     });
  // }

  const emailRef = useRef()
  const passwordRef = useRef()

  const { login, currentUser, } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()


  async function handleLogin(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)

      navigate('/calendar')
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
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
      <div className="overlay"></div>
      <video src={videoUCF} autoPlay loop muted />
      <div className="wrapper">
      </div>
      <form onSubmit={handleLogin}>
        <h1 className="title"> Welcome to the UCF Student Conduct Office</h1>
        {error && <Alert variant="danger">{error}</Alert>}

        <input type="email" placeholder="Email" ref={emailRef} />
        <input type="password" placeholder="Password" ref={passwordRef} />
        <button disabled={loading} type="submit"> Login</button>

        <div>
          <Link to="/">Go Back</Link>
        </div>
      </form>
    </div>
    // <div className="login">
    //   <div className = "overlay"></div>
    //   <video src = {videoUCF} autoPlay loop muted />
    //     <div className="wrapper">
    //   </div>
    // <form onSubmit = {handleLogin}>
    //   <h1> Welcome to the UCF Student Conduct Office</h1>
    //     <input type = "email" placeholder = "email" onChange = {(e) => setEmail(e.target.value)}/>
    //     <input type = "password" placeholder = "password" onChange = {(e) => setPassword(e.target.value)} />
    //     <button type = "submit"> Login</button> 
    //     {error && <span> Wrong Email or Password! </span>}
    // </form>
    // </div>
  )
}


export default Login