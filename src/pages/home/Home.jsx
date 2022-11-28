import React from 'react'
import "./home.scss"

import spirit from "../../images/splash.jpg"

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
      
 
     
      <div className = "fileupload">
      <Button href="/fileupload">
      Upload a file </Button>
      </div>

      
        </div>
        </div>
  )
}


export default Home