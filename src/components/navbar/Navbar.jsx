import Logo from  '../../images/ucf_pegasus logo.png'
import './navbar.scss'
import React from 'react'

import {useLocation} from 'react-router-dom'




const Navbar = () => {
  //const navigate = useNavigate() //used for button redirects
  const  location = useLocation()

  if (location.pathname === '/admin'){

    return null
  }
  
  return (
    <nav className = 'nav'>
      <a href = "/" className = "site-title">
        <img src = {Logo} alt = "UCF Logo" className = "logo"/>
      </a>
      <ul>
        <li>
          
          <a href = "/about"> About </a>
          </li> 
        <li>
          <a href = "/login"> Log In </a>
          </li> 
      </ul>
      </nav>
    
  )
}

export default Navbar