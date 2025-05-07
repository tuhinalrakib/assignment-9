import React from 'react';
import Navbar from '../Navbar';
import { useLoaderData } from 'react-router';
import Event from './Event';
import { Helmet } from 'react-helmet';
import Footer from '../Footer';

const Events = () => {
    const data = useLoaderData()
    // console.log(data)
    return (
        <div className='bg-emerald-500'>
            <Helmet>
                <title>Events</title>
            </Helmet>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='w-11/12 mx-auto my-5'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        data.map(event=> <Event event={event} key={event.id}></Event>)
                    }
                </div>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Events;