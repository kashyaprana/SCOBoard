import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import LogoutIcon from '@mui/icons-material/Logout';
import React, { useRef, useState } from "react"
import { AuthProvider, useAuth } from "../../contexts/AuthContext";
import { useNavigate } from 'react-router-dom';


export const Sidebar = () => {

    
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
  
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
    <div className = 'sidebar'>
        <div className = "top">
            <span className = "logo"> SCO Scheduler </span>
            </div>
            <hr />
        <div className = "center">
             <ul>
                <p className = "title">MAIN</p>
                <li>
                    <DashboardIcon className = "icon" />
                    <span> Dashboard </span>
                </li>
                <li>
                    <EventAvailableIcon className = "icon" />
                    <span> Schedule Meeting </span>
                </li>
                <p className = "title">ACCOUNT</p>
                <li>
                    <PersonIcon className = "icon"/>
                    <span> Users </span>
                </li>
                <li>
                    <LogoutIcon className = "icon" />
                    <span> <button variant="link" onClick={handleLogout}>
                    Log Out
                    </button> </span>
                    
                </li>
             </ul>
            </div>
        <div className = "bottom"> 
            <div className="colorOption"></div>
            <div className="colorOption"></div>
            
        
        </div>


    </div>
  );
};

export default Sidebar