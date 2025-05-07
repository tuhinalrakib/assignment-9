import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayout from '../Layouts/HomeLayout';
import ErrorPage from '../components/ErrorPage';
import AuthLayout from '../Layouts/AuthLayout';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Profile from '../Pages/Profile';
import Home from '../Pages/Home';
import PrivateRoute from '../contexts/PrivateRoute';
import Loading from '../components/Loading';
import Events from '../components/Events/Events';
import EventDetails from '../components/Events/EventDetails';
import UpcommingEvent from '../components/UpcommingEvent';

const Routes = createBrowserRouter([
    {
        path : "/",
        element : <HomeLayout></HomeLayout>,
        children : [
            {
                path : "",
                element : <Home></Home>,
            }            
        ]
    },
    {
        path : "*",
        element : <ErrorPage></ErrorPage>
    },
    {
        path : "events/:id",
        element : <PrivateRoute>
            <EventDetails></EventDetails>
        </PrivateRoute>,
        loader : ()=>fetch("/events.json"),
        hydrateFallbackElement : <Loading></Loading>
    },
    {
        path : "/events",
        element : <PrivateRoute>
            <Events></Events>
        </PrivateRoute>,
        loader : ()=>fetch("/events.json"),
        hydrateFallbackElement : <Loading></Loading>
    },
    {
        path : "/auth",
        element : <AuthLayout></AuthLayout>,
        children : [
            {
                path : "login",
                element : <Login></Login>
            },
            {
                path : "register",
                element : <Register></Register>
            }
        ]
    },
    {
        path : "/profile",
        element : <Profile></Profile>
    },
    {
        path : "/upcoming",
        element : <UpcommingEvent></UpcommingEvent>
    }
])

export default Routes;