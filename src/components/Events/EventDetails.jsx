import React from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData, useLocation, useParams } from 'react-router';
import Navbar from '../Navbar';

const EventDetails = () => {
    const { id } = useParams()
    const pathLocation = useLocation()
    const data = useLoaderData()
    const userById = data.find(event => event.id == id)
    const {thumbnail,name, category, date, location, entry_fee} = userById
    // console.log(userById)
    return (
        <div>
            <Helmet>
                <title>Event Details:{pathLocation.pathname.slice(8)}</title>
            </Helmet>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='flex flex-col items-center'>
                <div className='shadow-xl p-5 bg-base-200 rounded-2xl mt-10'>
                    <img src={thumbnail} className='w-[600px] h-[400px]' />
                    <h1 className='text-3xl font-bold mt-5'>{name}</h1>
                    
                </div>
            </main>
        </div>
    );
};

export default EventDetails;