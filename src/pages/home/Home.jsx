import React from 'react'
import "./home.scss"

import spirit from "../../images/splash.jpg"

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Button } from '@mui/material'



const Home = () => {
  return (
    <div className = "no-scrollHome">
    <div className="home">
      <img src={spirit} alt="spirit" className="splash" />

      <div className = "schedule">
      <Button href="https://app.10to8.com/book/miaywtclmfjagujsef/">
      Schedule a Meeting </Button>
     
      
      </div>
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
      <div className = "fileupload">
      <Button href="/fileupload">
      Upload a file </Button>
      </div>

      
        </div>
        </div>
  )
}


export default Home