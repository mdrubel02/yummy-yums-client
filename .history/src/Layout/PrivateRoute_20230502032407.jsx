import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProviders';

const PrivateRoute = () => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <Spinner></Spinner>
    }
    if(user){
        return children
    }
    return <Navigate to="/login" state={{from:location}}></Navigate>
};

export default PrivateRoute;