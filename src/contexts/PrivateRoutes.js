import { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from "../contexts/AuthContext";



const ProtectedRoute = ({ children }) => {
    const { currentUser} = useAuth()
    
    
    
    //if there is no current user go back to log in
    if (!currentUser) {
      return <Navigate to='/' />;
    }
    return children;
  };
  
  export default ProtectedRoute;