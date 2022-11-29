import "./signup.scss"
import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { AuthProvider, useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom"
import videoUCF from "../../images/chargeon.mp4"




export default function Signup() {
    const emailRef = useRef()
    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    
    const navigate = useNavigate()
    

    async function handleSubmit(e) {
      e.preventDefault()
  
      if (passwordRef.current.value !== passwordConfirmRef.current.value) {
        return setError("Passwords do not match")
      }
  
      try {
        setError("")
        setLoading(true)
        await signup(emailRef.current.value, passwordRef.current.value, firstNameRef.current.value, lastNameRef.current.value)
        navigate('/')  
      } catch {
        setError("Failed to create an account")
      }
  
      setLoading(false)
    }

    return (
        <div className="signup">
        <video src = {videoUCF} autoPlay loop muted />
          
        <div className = "overlay">
        
      <form onSubmit = {handleSubmit}>
        <h1> Welcome to the UCF Student Conduct Office</h1>
          {error && <Alert variant="danger">{error}</Alert>}
          <input type = "first" placeholder = "First Name" ref = {firstNameRef}/>
          <input type = "last" placeholder = "Last Name" ref = {lastNameRef}/>
          <input type = "email" placeholder = "Email" ref = {emailRef}/>
          <input type = "password" placeholder = "Password" ref = {passwordRef} />
          <input type = "password" placeholder = "Password Confirmation" ref = {passwordConfirmRef} />
          <button disabled = {loading}  type = "submit"> Sign up</button> 
          
          <div>
          <Link to="/admin">Go Back</Link>
          </div>
      </form>

      </div>
      </div>
      )
    }