import React from 'react';
import Navbar from '../components/Navbar';
import { Helmet } from 'react-helmet';
import { Outlet } from 'react-router';
import UpcommingEvent from '../components/UpcommingEvent';
import Footer from '../components/Footer';
import Banner from '../Pages/Banner';

const HomeLayout = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='w-11/12 mx-auto'>
                <Outlet></Outlet>
                <Banner></Banner>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;