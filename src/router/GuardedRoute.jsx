import React from 'react'
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const GuardedRoute = ({children }) => {

    const user = useSelector(state => state.auth.user)

    if (!user) {
      return <Navigate to="/login" replace={true} />;
    }
    return children;
};

export default GuardedRoute