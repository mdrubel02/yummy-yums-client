import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app);
const AuthProviders = ({children}) => {
   const [user,setUser]=useState(null)
    const provider = new GoogleAuthProvider();
  //sign with create user
  const createUser = (email,password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
  }
  //signIn with google
    const googleSignIn = ()=>{
        return signInWithPopup(auth, provider)
    }
    //handle logout 
    const handleLogout = ()=>{
        return signOut(auth)
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
    const userInfo = { googleSignIn,createUser,user,handleLogout}
    return (
        <AuthContext.Provider value={userInfo}>
            {children }
        </AuthContext.Provider>
    );
};

export default AuthProviders;