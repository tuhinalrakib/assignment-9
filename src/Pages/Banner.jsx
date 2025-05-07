import React from 'react';
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className='flex justify-around gap-5 py-10 px-3 items-center bg-green-800 rounded-2xl'>
            <div className='my-10 ml-5'>
                <h1 className='text-4xl font-extrabold text-[#fff]'>Thsnks for vistiting our events management website</h1>
                <p className='mt-5 text-gray-400'>Events Explorer is your all-in-one destination to discover, plan, and manage events.<br/> Whether you're attending or organizing,<br/> we make it easy to explore trending events, book tickets, and promote your own gatherings—anytime, anywhere.</p>
            </div>
            <div>
                <Link to="/events"><button className='btn bg-fuchsia-500 py-3 px-6 rounded-2xl text-base-100 font-bold cursor-pointer'>Visit Our Events Pagge</button></Link>
            </div>
        </div>
    );
};

export default Banner;