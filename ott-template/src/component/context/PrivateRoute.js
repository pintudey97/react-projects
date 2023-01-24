import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthCheck from './context'; 

const PrivateRoute = () => {
    
    const userlogintoken = useContext(AuthCheck);
    return userlogintoken ? <Outlet /> : <Navigate to="/login" />

}
 
export default PrivateRoute;