
import InfoIcon from '@mui/icons-material/Info';
import {useNavigate, Link} from "react-router-dom";
import { Button } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Logo from  '../../images/ucf_logo.png'
import './navbar.scss'



const Navbar = () => {
  //const navigate = useNavigate() //used for button redirects

  return (
    <nav className = 'nav'>
      <a href = "/" className = "site-title"> UCF SCO</a>
      <ul>
        <li>
          <a href = "/about"> About </a>
          </li> 
        <li>
          <a href = "/logout"> Logout </a>
          </li> 
      </ul>
      </nav>
    
  )
}

export default Navbar