import React from 'react';

const Event = ({event}) => {
    const {thumbnail,name, category, date, location} = event
    return (
        <div className='shadow-3xl rounded-2xl p-3 bg-base-200'>
            <img src={thumbnail} alt="" width={400} height={400} className='rounded-t-2xl'/>
            <h1 className='text-xl font-bold mt-2'>{name}</h1>
            {
                category.map(item=><button className='btn btn-xs m-2 bg-gray-300 rounded-2xl '>{item}</button>)
            }
            <p className='text-[#000] font-semibold'>Date: {new Date(date).toDateString()}</p>
            <h5 className='font-medium text-gray-400'>Location: {location}</h5>
        </div>
    );
};

export default Event;