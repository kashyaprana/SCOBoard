import React from 'react'
import "./admin.scss"

import spirit from "../../images/splash.jpg"

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Button } from '@mui/material'

import Nav from "../../components/adminNav/Nav.jsx"





const Admin = () => {
  return (
    <div className = "no-scrollHome">
    <div className="home">
      <Nav />

      <img src={spirit} alt="spirit" className="splash" />

      <div className = "fileaccess">
      <Button href="/fileaccess">
      Access Files </Button>
      </div>
      <CalendarMonthIcon className = "icon" />
      <div className = "calendarHome">
      <a href = "/calendar">
       Calendar 
      </a>
      
      </div>
     

      
        </div>
        </div>
  )
}


export default Admin