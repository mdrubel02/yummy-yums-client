import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app);
const AuthProviders = ({children}) => {
   const [user,setUser]=useState(null)
   const [loading,setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
  //sign with create user
  const createUser = (email,password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
  }
  // user signin
  const userSignIn=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}
  //signIn with google
    const googleSignIn = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
  //signIn with google
    const githubSignIn = ()=>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
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
    const userInfo = { googleSignIn,createUser,user,handleLogout,updateUserProfile,loading,githubSignIn,userSignIn}
    return (
        <AuthContext.Provider value={userInfo}>
            {children }
        </AuthContext.Provider>
    );
};

export default AuthProviders;