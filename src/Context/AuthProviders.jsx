import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app);
const AuthProviders = ({children}) => {
   const [user,setUser]=useState(null)
   const [loading,setLoading] = useState(true)
    const provider = new GoogleAuthProvider();
  //sign with create user
  const createUser = (email,password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
  }
  //signIn with google
    const googleSignIn = ()=>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
       // update user profile 
       const updateUserProfile=(profile)=>{
        setLoading(true)
        return updateProfile(auth.currentUser,profile)
    }
    //handle logout 
    const handleLogout = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) =>{
            console.log('user is here', user);
            setUser(user)
            setLoading(false)
        })
        return ()=>{
            return unsubscribe()
        }
    },[])
    const userInfo = { googleSignIn,createUser,user,handleLogout,updateUserProfile,loading}
    return (
        <AuthContext.Provider value={userInfo}>
            {children }
        </AuthContext.Provider>
    );
};

export default AuthProviders;