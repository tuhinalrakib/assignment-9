import React, { use, useEffect, useState } from 'react';
import { DiFirefox } from 'react-icons/di';
import { Link } from 'react-router';

const eventsPromise = fetch("/events.json").then(res => res.json())

const UpcommingEvent = () => {
    const data = use(eventsPromise)
    const [timeLeft, setTimeLeft] = useState({})

    const now = new Date()
    const upcomming = data
        .map(event => ({ ...event, dateObj: new Date(event.date) }))
        .filter(event => event.dateObj > now)
        .sort((a, b) => a.dateObj - b.dateObj)[0]
    // console.log(upcomming)

    useEffect(() => {
        const updateTimer = () => {
            const difference = new Date(upcomming.date) - new Date()
            const time = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            }
            setTimeLeft(time)
        }
        const timer = setInterval(updateTimer, 1000)
        return () => clearInterval(timer)
    }, [upcomming])

    if (!upcomming) return <p>No upcoming events.</p>;

    return (
        <div style={{ backgroundImage: `url(${upcomming.thumbnail})` }} className={`rounded-2xl bg-cover bg-center bg-no-repeat text-white py-16 px-8 text-center relative`}>
            <h1 className='text-8xl font-extrabold mb-16 text-blue-400'>Upcomming Event</h1>
            <div className=' p-10 rounded-2xl max-w-3xl mx-auto'>
                <h1 className='text-5xl text-fuchsia-400 font-bold mb-5'>{upcomming.name}</h1>
                <p>{new Date(upcomming.date).toDateString()} | {upcomming.location}</p>
                <div className='flex justify-center gap-5 text-2xl mb-5 mt-24'>
                    <strong className='text-7xl text-[#000]'>{timeLeft.days ?? '--'} Days </strong><br />
                    <strong className='text-7xl text-[#000]'>{timeLeft.hours ?? '--'}</strong><br />
                    <strong className='text-7xl text-[#000]'>{timeLeft.minutes ?? '--'}</strong><br />
                    <strong className='text-7xl text-[#000]'>{timeLeft.seconds ?? '--'}</strong><br />
                </div>
                <Link to="/events"><butto className='bg-orange-800 py-3 px-6 rounded-2xl font-bold cursor-pointer'>GO TO EVENT PAGE</butto></Link>
            </div>
        </div>
    );
};

export default UpcommingEvent;