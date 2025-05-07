import React, { use } from 'react';
import AuthContexct from './AuthContexct';
import { Navigate, useLocation } from 'react-router';
import Loading from '../components/Loading';

const PrivateRoute = ({children}) => {
    const {user, loading} = use(AuthContexct)
    const location = useLocation()

    if(loading){
        return <Loading></Loading>
    }

    if(user && user.email){
        return children
    }
    return <Navigate state={location.pathname} to="/auth/login"></Navigate>
};

export default PrivateRoute;