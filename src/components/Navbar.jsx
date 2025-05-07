import React, { use, useState } from 'react';
import { Link, Navigate, NavLink } from 'react-router';
import AuthContexct from '../contexts/AuthContexct';

const Navbar = () => {
    const { user, logOut } = use(AuthContexct)
    const [isHovered, setIsHovered] = useState(false)

    const links = <>
        <NavLink to="/" className="text-[16px] py-2 px-3 hover:bg-base-300 rounded">Home</NavLink>
        <NavLink to="/profile" className="text-[16px] py-2 px-3 hover:bg-base-300 rounded">Profile</NavLink>
        <NavLink to="/events" className="text-[16px] py-2 px-3 hover:bg-base-300 rounded">Events</NavLink>
    </>

    const handleLogout = () => {
        logOut()
        return <Navigate to="/auth-login"></Navigate>
    }

    return (
        <div className=' bg-base-100 shadow-sm'>
            <div className="w-11/12 mx-auto navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl"><span className='text-[#ff5e57] text-xl lg:text-3xl'>Event</span> Manager</a>
                </div>
                <div className="navbar-center hidden  lg:flex ">
                    <ul className="menu menu-horizontal px-1 gap-1 lg:gap-3">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ?
                        <>
                            <div className='relative inline-block' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                                <img src={user?.photoURL}
                                    className='w-20 mr-5 h-20 rounded-2xl object-cover border border-gray-300'
                                />
                                {
                                    isHovered && <div className='absolute top-0 left-0 w-full h-full items-center justify-center  font-bold text-[#000] flex'>{user.displayName}</div>
                                }
                            </div>
                            <button onClick={handleLogout} className='btn btn-primary'>Log Out</button>
                        </>
                        : <Link to="/auth/login" className="btn btn-primary">Log In</Link>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;