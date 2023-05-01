import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import {GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup} from 'firebase/auth'
import app from '../../Firebase/firebase.config';



const auth = getAuth(app)
export const AuthContext = createContext()
const UserContext = ({ children }) => {
    const [loading , setLoading] = useState(true)
    const [user,setUser]= useState({})
    const provider = new GoogleAuthProvider()

    const signInWithGoogle =()=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
          setUser(currentUser)
          setLoading(false)
        })
    
        return () => {
          unsubscribe()
        }
      }, [])
    const authInfo = {signInWithGoogle,user}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;