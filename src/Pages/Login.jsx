import React, { use, useState } from 'react';
import { Helmet } from "react-helmet";
import { Link, useLocation, useNavigate } from 'react-router';
import AuthContexct from '../contexts/AuthContexct';
import { toast } from 'react-toastify';

const Login = () => {
    const location = useLocation()
    const {loginUserByEmail} = use(AuthContexct)
    const [error,setError] = useState("")
    const navigate = useNavigate()

    // const notify = ()=>toast("Oaaqwwwww")

    const handleLogin = e=>{
        e.preventDefault()
        const email = e.target.email.value 
        const password = e.target.password.value 
        console.log(email,password)

        loginUserByEmail(email,password)
        .then(res=>{
            const user = res.user
            console.log(user)
            toast("Tuhin Al Rakib")
            navigate("/")
        })
        .catch(e=>{
            setError(e.message)
        })
    }
    return (
        <div className='py-10'>
            <Helmet>
                <title>{location.pathname.slice(6)}</title>
                <meta name="description" content="Welcome to the Login Page" />
            </Helmet>
            <div className='my-10'>
                <div className="card bg-primary w-full mx-auto max-w-sm p-3 shrink-0 shadow-2xl">
                <h1 className="text-2xl font-semibold text-white text-center">Log In your account</h1>
                    <form onSubmit={handleLogin} className="card-body ">
                        <fieldset className="fieldset">
                            {/* email */}
                            <label className="label text-accent text-[16px]">Enter Email Address</label>
                            <input type="email" className="input mb-3 py-5" placeholder="Enter you email address" name='email'/>
                            {/* password */}
                            <label className="label text-accent text-[16px]">Enter Password</label>
                            <input type="password" className="input mb-1 py-5" placeholder="Password" name='password'/>
                            <div><a className="link link-hover text-white text-sm">Forgot password?</a></div>
                            <button type="submit" className="py-2 px-5 rounded-2xl text-white cursor-pointer text-xl bg-secondary mt-4">Log In</button>
                            {
                                error && <p className='text-red-500'>{error}</p>
                            }
                            <p className='text-xs font-semibold text-white mt-3'>Don have an account? Register <Link to="/auth/register" className='text-blue-500 underline'>Here</Link></p>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;