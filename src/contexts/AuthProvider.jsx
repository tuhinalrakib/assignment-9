import React, { useEffect, useState } from 'react';
import AuthContexct from './AuthContexct';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const [isGoogleLogin, setIsGoogleLogin] = useState(false)

    const registerUserByEmail = (email,password)=>{
        setLoading(true)
        setIsGoogleLogin(false)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    const loginUserByEmail = (email,password)=>{
        setLoading(true)
        setIsGoogleLogin(false)
        return signInWithEmailAndPassword(auth,email,password)
    }
    
    const updateUser = (updatedData)=>{
        return updateProfile(auth.currentUser,updatedData)
    }
    
    const loginWithGoogle = ()=>{
        setLoading(true)
        setIsGoogleLogin(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = ()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
    },[])

    const authData = {
        user,
        setUser,
        registerUserByEmail,
        loginUserByEmail,
        logOut,
        updateUser,
        loginWithGoogle,
        loading,
        isGoogleLogin,
        setIsGoogleLogin
    }
    
    return <AuthContexct value={authData}>
        {children}
    </AuthContexct> 
};

export default AuthProvider;