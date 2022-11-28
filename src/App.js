import React from 'react'
import {BrowserRouter, BrowserRouter as Router, Route, Routes, Navigate, Switch} from "react-router-dom";
import { useContext } from 'react';
import { AuthProvider, useAuth } from "./contexts/AuthContext";


//paths to each page
import Home from './pages/home/Home.jsx';
import Login from './pages/login/Login.jsx';
import List from './pages/list/List.jsx';
import Scheduler from './pages/scheduler/Scheduler';
import Calendar from './pages/calendar/Calendar';
import Signup from './pages/signup/signup';
import About from './pages/about/About';
import ProtectedRoute from './contexts/PrivateRoutes';
import FileUpload from "./pages/upload/FileUpload";
import FileAccess from "./pages/fileaccess/FileAccess";
import Navbar from "./components/navbar/Navbar.jsx"




//a lot of code here is from firebase docs, above imports are for the nav bar and redirects
function App() {
  
 

//console.log(currentUser)
//routes setup to each page
  return (
       
       <div className = "App">
        <BrowserRouter>
        <AuthProvider>
        <Navbar />
          <Routes>
            
                <Route element={<Login/>} path="/login"/>
                <Route element={<Signup/>} path="/signup"/>
                <Route element={<About/>} path="/about"/>
                <Route element={<ProtectedRoute><List/></ProtectedRoute>} path="/'list"/>
                <Route element={<Scheduler/>} path="/scheduler"/>
                 <Route element={<ProtectedRoute><Calendar/></ProtectedRoute>} path="/calendar"/> {/*protect this one only  can go- signout button on home to sign up */}
                <Route element={<FileUpload/>} path="/fileupload"/>
                <Route element={<FileAccess/>} path="/fileaccess"/>
                
                <Route element={<Home/>} path="/" />
              
          </Routes>
        
          </AuthProvider>
        </BrowserRouter>
        </div>
        
  );

}



export default App;