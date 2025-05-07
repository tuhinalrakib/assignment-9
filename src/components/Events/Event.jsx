import React from 'react';
import { Link } from 'react-router';

const Event = ({event}) => {
    const {thumbnail,name, category, date, location, entry_fee,id} = event
    return (
        <div className='shadow-3xl rounded-2xl p-3 bg-base-200'>
            <img src={thumbnail} alt="" className='rounded-t-2xl h-1/2 w-full '/>
            <h1 className='text-xl font-bold mt-2'>{name}</h1>
            {
                category.map(item=><button className='btn btn-xs m-2 bg-gray-300 rounded-2xl '>{item}</button>)
            }
            <p className='text-[#000] font-semibold'>Date: {new Date(date).toDateString()}</p>
            <h5 className='font-medium text-gray-400 mt-2'>Location: {location}</h5>
            <h3 className='text-xl font-semibold mt-3'>Entry Fee: <span className='font-extrabold'>{entry_fee}$</span></h3>
            <Link to={`/events/${id}`}><button className='px-6 py-3 cursor-pointer bg-fuchsia-700 rounded-2xl w-full text-[#fff] font-bold my-4'>View More</button></Link>
        </div>
    );
};

export default Event;