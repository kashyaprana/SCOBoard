import "./login.scss"
import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { AuthProvider, useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom"
import videoUCF from "../../images/chargeon.mp4"





export default function Login(){

    const emailRef = useRef()
    const passwordRef = useRef()
    
    const { login, currentUser,} = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
   
    const navigate = useNavigate()
    

      async function handleLogin(e){
      e.preventDefault()
      
      try {
        setError("")
        setLoading(true)
        await login(emailRef.current.value, passwordRef.current.value) 

        navigate('/home')     
      } catch {
        setError("Failed to log in")
      }
  
      setLoading(false)
    }


    return (

        
        <div className="login">
          <div className = "overlay"></div>
          <video src = {videoUCF} autoPlay loop muted />
            <div className="wrapper">
          </div>
        <form onSubmit = {handleLogin}>
          <h1> Welcome to the UCF Student Conduct Office</h1>
          {error && <Alert variant="danger">{error}</Alert>}
          
            <input type = "email" placeholder = "Email" ref = {emailRef}/>
            <input type = "password" placeholder = "Password" ref = {passwordRef} />
            <button disabled = {loading}  type = "submit"> Login</button> 
            
            <div>
        Don't have an account? <Link to="/signup">Sign Up!</Link>
          </div>
        </form>
        </div>
      
        
    )
    }


