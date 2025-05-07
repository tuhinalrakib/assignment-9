import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div>
            <div className='min-h-screen flex flex-col justify-center items-center'>
                <img src="https://i.ibb.co.com/Xx7d93z8/404-error-3060993-1280.png" className='w-[70%] h-[400px]' />
                <h3 className='text-5xl font-extrabold text-red-500'>404 - Page NOT FOUND</h3>
                <Link to="/" className='btn btn-primary mt-3 w-[50%] py-5 text-xl'>GO TO HOME</Link>
            </div>
        </div>
    );
};

export default ErrorPage;