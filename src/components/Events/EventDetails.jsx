import React from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData, useLocation, useParams } from 'react-router';
import Navbar from '../Navbar';
import { toast } from 'react-toastify';

const EventDetails = () => {
    const { id } = useParams()
    const pathLocation = useLocation()
    const data = useLoaderData()
    const userById = data.find(event => event.id == id)
    const { thumbnail, name, category, date, location, entry_fee, description } = userById

    const handleSubmit = e=>{
        e.preventDefault()
        toast("Congrats you got a sit")
    }
    
    return (
        <div>
            <Helmet>
                <title>Event Details:{pathLocation.pathname.slice(8)}</title>
            </Helmet>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='flex flex-col items-center'>
                <div className='shadow-2xl p-5 bg-base-200 rounded-2xl my-10'>
                    <img src={thumbnail} className='w-[600px] h-[400px]' />
                    <h1 className='text-3xl font-bold mt-5'>{name}</h1>
                    <p className='text-sm text-gray-500 mt-2'>{description}</p>
                    {
                        category.map(item => <button className='btn btn-xs m-2 bg-gray-300 rounded-2xl '>{item}</button>)
                    }
                    <p className='text-[#000] font-semibold mt-2'>Date: {new Date(date).toDateString()}</p>
                    <h5 className='font-medium text-gray-400 mt-2'>Location: {location}</h5>
                    <h3 className='text-xl font-semibold mt-3'>Entry Fee: <span className='font-extrabold'>{entry_fee}$</span></h3>
                    <div className="card bg-primary w-full mx-auto max-w-sm p-3 shrink-0 shadow-2xl">
                        <h1 className="text-2xl font-semibold text-white text-center">Reserve your Seat</h1>
                        <form onSubmit={handleSubmit}  className="card-body ">
                            <fieldset className="fieldset">
                                {/* name */}
                                <label className="label text-accent text-[16px]">Enter your name</label>
                                <input type="text" className="input mb-3 py-5" required placeholder="Enter your name" name='email' />
                                {/* email */}
                                <label className="label text-accent text-[16px]">Enter Email Address</label>
                                <input type="email" required className="input mb-3 py-5" placeholder="Enter your email address" name='email' />
                                
                                <button type="submit" className='px-6 py-3 cursor-pointer bg-fuchsia-700 rounded-2xl w-full text-[#fff] text-xl font-bold my-4'>Reserve seat</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default EventDetails;