import React from 'react'
import {BrowserRouter, BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from "./contexts/AuthContext";

//paths to each page
import Home from './pages/home/Home.jsx';
import Login from './pages/login/Login.jsx';

import Single from './pages/single/Single.jsx';
import Scheduler from './pages/scheduler/Scheduler';
import Calendar from './pages/calendar/Calendar';
import About from './pages/about/About';
import Navbar from "./components/navbar/Navbar"




//a lot of code here is from firebase docs, above imports are for the nav bar and redirects
function App() {

const {currentUser} = useContext(AuthContext);




//checks if current user is logged in, if not, redirects to login page
const RequireAuth = ({children}) => {
  return currentUser ? children : <Navigate to ="/login" />
};
//test if user logged in
//console.log(currentUser)


//routes setup to each page
//can potentially remove all links here and just have the navbar, attempt at finalization step
  return (
       <div className = "App">
        <BrowserRouter>
        
        <Navbar />
          <Routes>
            <Route path = "/">
            <Route path = "login" element = {<Login/>} /> {/*login page */}
            <Route path = "scheduler" element = {<RequireAuth><Scheduler/></RequireAuth>} /> {/*schedule page */}
            <Route path = "calendar" element = {<RequireAuth><Calendar/></RequireAuth>} /> {/*schedule page */}
            <Route path = "about" element = {<About/> } /> {/*schedule page */}
            <Route index element = {<RequireAuth><Home/></RequireAuth>} /> {/*home page */}
            <Route path = "users"> {/*anything with /user/ takes to list page, anything with /user/xyz takes to single page */}
              <Route index element = {<RequireAuth><Single/></RequireAuth>} />
              <Route path=":userId" element={<RequireAuth><Single/></RequireAuth>} />
              </Route>
            </Route>
          </Routes>
        
        
        </BrowserRouter>
        </div>
        
  );

}



export default App;
