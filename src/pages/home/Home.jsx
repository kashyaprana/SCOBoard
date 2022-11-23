import React from 'react'
import "./home.scss"
import { Button } from '@mui/material'
import Navbar from "../../components/navbar/Navbar"
import spirit from "../../images/splash.jpg"


const Home = () => {
  return (
    <div className="home">
      <img src={spirit} alt="spirit" className="splash" />
      <div className = "schedule">
      <Button href="https://app.10to8.com/book/miaywtclmfjagujsef/">Schedule Meeting</Button>
      </div>
      <div className = "calendar">
      <Button a href="/calendar">Open Calendar</Button>
      </div>
        </div>
  )
}


export default Home