import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from '@mui/material'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import {useNavigate, Link} from "react-router-dom";

export const Sidebar = () => {

const navigate = useNavigate() //used for button redirects

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
                   
                    <Button href="https://app.10to8.com/book/miaywtclmfjagujsef/">Schedule Meeting</Button>
                </li>

                <li>
                    <CalendarMonthIcon className = "icon" />

                    <Link to = "/calendar"> Calendar
                   
                    {/* <button onClick = {() => navigate('/calendar')} >Open Calendar</button> */}
                    </Link>
                </li>


                <p className = "title">ACCOUNT</p>
                <li>
                    <PersonIcon className = "icon"/>
                    <span> Users </span>
                </li>
                <li>
                    <LogoutIcon className = "icon" />
                    <span> Logout </span>
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