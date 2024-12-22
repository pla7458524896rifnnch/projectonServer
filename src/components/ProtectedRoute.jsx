import React from 'react';
import { Navigate} from 'react-router-dom';
import useGetCookie from '../Hooks/Cookie';

// توابع کمکی

// گارد مسیر
const ProtectedRoute = ({children}) => { 
  const {getCookie}=useGetCookie();
  const token = getCookie('accessToken');
  if (!token) {
    return <Navigate to="/login" replace />;
  }else{
    return children;
  }
};

export default ProtectedRoute;
