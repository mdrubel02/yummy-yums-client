import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import React, { createContext } from 'react';
import app from '../Firebase/firebase.config';

export const AuthContext = createContext(null)
const AuthProviders = ({children}) => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    console.log(children);
  
    const googleSignIn = ()=>{
        return signInWithPopup(auth, provider)
    }
    const user = { googleSignIn}
    return (
        <AuthContext.Provider value={user}>
            {children }
        </AuthContext.Provider>
    );
};

export default AuthProviders;