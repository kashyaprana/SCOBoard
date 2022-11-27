import React from 'react'
import {BrowserRouter, BrowserRouter as Router, Route, Routes, Navigate, Switch} from "react-router-dom";
import { useContext } from 'react';
import { AuthProvider, useAuth } from "./contexts/AuthContext";


//paths to each page
import Home from './pages/home/Home.jsx';
import Login from './pages/login/Login.jsx';
import List from './pages/list/List.jsx';
import Single from './pages/single/Single.jsx';
import Scheduler from './pages/scheduler/Scheduler';
import Calendar from './pages/calendar/Calendar';
import Signup from './pages/signup/signup';
import PrivateRoutes from './contexts/PrivateRoutes'
import ProtectedRoute from './contexts/PrivateRoutes';




//a lot of code here is from firebase docs, above imports are for the nav bar and redirects
function App() {
  
 

//console.log(currentUser)
//routes setup to each page
  return (
       
       <div className = "App">
        <BrowserRouter>
        <AuthProvider>
        
          <Routes>
            
                <Route element={<Login/>} path="/"/>
                <Route element={<Signup/>} path="/signup"/>
                <Route element={<ProtectedRoute><List/></ProtectedRoute>} path="/'list"/>
                <Route element={<ProtectedRoute><Scheduler/></ProtectedRoute>} path="/scheduler"/>
                <Route element={<ProtectedRoute><Calendar/></ProtectedRoute>} path="/calendar"/> //protect this one only
                <Route element={<ProtectedRoute><Single/></ProtectedRoute>} path="/single"/>// can go- signout button on home to sign up
          
                <Route element={<ProtectedRoute><Home/></ProtectedRoute>} path="/home" />
              
          </Routes>
        
          </AuthProvider>
        </BrowserRouter>
        </div>
        
  );

}



export default App;
