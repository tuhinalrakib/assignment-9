import React, { use } from 'react';
import { Helmet } from 'react-helmet';
import { Navigate, useLocation } from 'react-router';
import AuthContexct from '../contexts/AuthContexct';
import Loading from '../components/Loading';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Profile = () => {
    const location = useLocation();
    const { user, loading } = use(AuthContexct);

    if(loading){
        return <Loading />
    }
    if (!user) {
        return <Navigate to="/auth/login"></Navigate>;
    }
    console.log(user)

    return (
        <div className='bg-base-300 min-h-screen'>
            <Helmet>
                <title>{location.pathname.slice(1)}</title>
            </Helmet>

            <header>
                <Navbar />
            </header>

            <main className='flex justify-center text-center items-center'>
                <div className='shadow bg-base-100 p-10 mt-11 mb-14 rounded-2xl'>
                    <h2 className='text-3xl font-bold mb-4'>{user.displayName}</h2>
                    <p className='mb-4'>{user.email}</p>
                    {user?.photoURL && (
                        <img
                            src={user.photoURL}
                            alt="Profile"
                            className='w-60 h-60 rounded-full object-cover border border-gray-300'
                        />
                    )}
                </div>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Profile;
