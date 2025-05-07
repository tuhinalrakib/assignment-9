import React, { use} from 'react';
import AuthContexct from '../contexts/AuthContexct';
import Loading from '../components/Loading';
import { Navigate, } from 'react-router';
import Banner from '../components/Banner';

const Home = () => {
    const { user, loading } = use(AuthContexct)
    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to="/auth/login"></Navigate>
    }

    return (
        <div className='w-11/12 mx-auto'>
            <Banner></Banner>
        </div>
    );
};

export default Home;