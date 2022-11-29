import Logo from  '../../images/ucf_pegasus logo.png'
import './nav.scss'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import {useLocation} from 'react-router-dom'
import { useAuth } from "../../contexts/AuthContext";
import { useState } from "react"


const Nav = () => {

    const [error, setError] = useState("")
    const { logout } = useAuth()
  //const navigate = useNavigate() //used for button redirects
//   const  location = useLocation()

//   if (location.pathname === '/admin'){

//     return null
//   }
const navigate = useNavigate();
async function handleLogout() {
    setError("")

    try {
      await logout()
      navigate('/')
      navigate(0)
    } catch {
      setError("Failed to log out")
    }
  }
  
  
  return (
    <nav className = 'nav'>
      <a href = "/admin" className = "site-title">
        <img src = {Logo} alt = "UCF Logo" className = "logo"/>
      </a>
      <ul>
        <li>
          
          <a href = "/about"> About </a>
          </li> 
          <li>
          <a href = "/list"> User List </a>
          </li> 
        <li>
          <a href = "/signUp"> Create a New Admin </a>
          </li> 

          <li>
          <a href = "javascript:null" onClick={handleLogout}> Sign Out </a>
          </li> 
      </ul>
      </nav>
    
  )
}

export default Nav