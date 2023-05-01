import React, { createContext } from 'react';



const AuthContext = createContext(null)
const AuthProviders = ({children}) => {
    const user = { name: 'Tasfya'}
    return (
        <AuthContext.Provider>
            {children }
        </AuthContext.Provider>
    );
};

export default AuthProviders;