import React, { use, useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaGoogle, FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router';
import AuthContexct from '../contexts/AuthContexct';
import { GoEye } from 'react-icons/go';
import { toast } from 'react-toastify';

const Register = () => {
    const [error, setError] = useState("")
    const [visibleEye, setVisibleEye] = useState(false)

    const navigate = useNavigate()
    const location = useLocation()
    const { 
        setUser,
        registerUserByEmail,
        updateUser,
        loginWithGoogle,
        setIsGoogleLogin
        } = use(AuthContexct)

    const handleRegister = e => {
        e.preventDefault()
        const name = e.target.name.value
        const photo = e.target.photo.value
        const email = e.target.email.value
        const password = e.target.password.value

        const passwordRegExpD = /(?=.*\d)/
        const passswordRegExpL = /(?=.*[a-z])/
        const passswordRegExpU = /(?=.*[A-Z])/
        const passswordRegExpN = /.{6,}/

        if (passswordRegExpN.test(password) === false) {
            setError("Password must be more than 6 characters")
            return
        } else if (passwordRegExpD.test(password) === false) {
            setError("Passowrd must be number")
            return
        } else if (passswordRegExpL.test(password) === false) {
            setError("Password must be at least one lowercase letter")
            return
        } else if (passswordRegExpU.test(password) === false) {
            setError("Passowrd must be at least one Uppercase letter")
            return
        }

        registerUserByEmail(email, password)
            .then(result => {
                const user = result.user
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo })
                        toast("✔ Congratulation Registration on your account successfully")
                        navigate("/")
                    })
                    .catch(er => {
                        setError(er.message)
                        setUser(user)
                    })
                })
                .catch(e => {
                    setError(e.message)
            })
        }
        
        const handleGoogleLogin = () => {
        loginWithGoogle()
        .then(res => {
            const user = res.user;
            setUser(user)
            setIsGoogleLogin(true);
            toast("✔ Congratulation Logging on your Google account successfully")
            navigate("/");
        })
        .catch(e => {
            setError(e.message);
        });
    };
    

    return (
        <div>
            <Helmet>
                <title>{location.pathname.slice(6)}</title>
            </Helmet>
            <div className='mt-10'>
                <div className="card bg-primary w-full mx-auto max-w-sm p-3 shrink-0 shadow-2xl">
                    <h1 className="text-2xl font-semibold text-white text-center">Register your account</h1>
                    <form onSubmit={handleRegister} className="card-body ">
                        <fieldset className="fieldset">
                            {/* Name */}
                            <label className="label text-accent text-[16px]">Enter Name</label>
                            <input type="text" required className="input mb-3 py-5" placeholder="Enter your name" name='name' />
                            {/* Photo URL */}
                            <label className="label text-accent text-[16px]">Enter your Photo URL</label>
                            <input type="text" required className="input mb-3 py-5" placeholder="Enter your Photo URL Link" name='photo' />
                            {/* Email */}
                            <label className="label text-accent text-[16px]">Enter Email Address</label>
                            <input type="email" required className="input mb-3 py-5" placeholder="Enter you email address" name='email' />
                            {/* Password */}
                            <label className="label text-accent text-[16px]">Enter Password</label>
                            <div className='relative'>
                                <input type={visibleEye ? "text" : "password"} required className="input mb-1 py-5" placeholder="Password" name='password' />
                                <button onClick={() => setVisibleEye(!visibleEye)} className=' absolute top-2 right-2'> {visibleEye ? <GoEye size={24} /> : <FaRegEyeSlash size={24} />} </button>
                            </div>
                            <button type='submit' className="py-2 px-5 rounded-2xl text-white cursor-pointer text-xl bg-secondary mt-4">Sign Up</button>
                            <p className='text-xs font-semibold text-white mt-3'>Are you already have an account? <Link to="/auth/login" className='text-blue-500 underline'>Log In</Link></p>

                            {
                                error && <p className='text-red-500'>{error}</p>
                            }

                            {/* Google Login */}
                        </fieldset>
                    </form>
                    <div className="text-white text-center mt-2 mb-3">
                        <div className="flex items-center justify-center mb-4">
                            <hr className="flex-grow border-t border-gray-300" />
                            <span className="mx-2 text-sm text-white">Or Login With</span>
                            <hr className="flex-grow border-t border-gray-300" />
                        </div>
                        <div className="flex flex-col justify-center items-center gap-4">

                            <button onClick={handleGoogleLogin} className="flex items-center justify-center gap-2 bg-[#DB4437] hover:opacity-90 px-4 py-2 text-white rounded-md w-40 text-xl cursor-pointer">
                                <FaGoogle size={24} />
                                Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;