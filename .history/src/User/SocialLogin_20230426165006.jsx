import React, { useContext } from 'react';
import { AuthContext } from '../Context/User/UserContext';

const SocialLogin = () => {
    const { signInWithGoogle } = useContext(AuthContext)
    console.log(signInWithGoogle)
    const signWithGoogleHandle=()=>{
     console.log('connect with google')
     signInWithGoogle()
     .then((result) => {
         const user = result.user;
         saveUserSocialLogin(user?.displayName, user?.email, user?.photoURL);
         navigate(form, { replace: true })
        console.log(user)
     })
     .then((error) => {
         console.log(error);
     })
    }
    return (
        <div className='mt-6'>
        <div className="divider font-semibold my-6">OR</div>
         <div className='relative'>
            
            <div className='absolute left-4 top-[20%] text-black' >
                <img src="https://i.ibb.co/GW2pwSv/google.png" alt="" className='w-[30px]' />
            </div>
            <button
            onClick={signWithGoogleHandle}
            className="py-3 w-full bg-white border border-gray-300 rounded-full shadow-sm flex-grow px-4   font-semibold  outline-none pl-12 bg-none"
            >SignIn With Google</button>
        </div>
    </div>
    );
};

export default SocialLogin;