import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app);
const AuthProviders = ({children}) => {
   const [user,setUser]=useState(null)
    const provider = new GoogleAuthProvider();
    console.log(children);
  
    const googleSignIn = ()=>{
        return signInWithPopup(auth, provider)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) =>{
            console.log('user is here', user);
            setUser(user)
        })
        return ()=>{
            return unsubscribe()
        }
    },[])
    const userInfo = { googleSignIn}
    return (
        <AuthContext.Provider value={userInfo}>
            {children }
        </AuthContext.Provider>
    );
};

export default AuthProviders;