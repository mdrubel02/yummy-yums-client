import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import React, { useContext } from 'react';
import app from '../Firebase/firebase.config';
import { AuthContext } from '../Context/AuthProviders';
const SocialLogin = () => {
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()
    console.log(auth);
    console.log(provider);
    const { googleSignIn } = useContext(AuthContext)
    const signWithGoogleHandle = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
                //  saveUserSocialLogin(user?.displayName, user?.email, user?.photoURL);
                //  navigate(form, { replace: true })
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
                    onClick={() => signWithGoogleHandle()}
                    className="py-3 w-full bg-white border border-gray-300 rounded-full shadow-sm flex-grow px-4   font-semibold  outline-none pl-12 bg-none"
                >SignIn With Google</button>
            </div>
            <div className='relative mt-5'>

                <div className='absolute left-4 top-[20%] text-black' >
                    <img src="https://i.ibb.co/4YBtZG3/Git-Hub-Mark-removebg-preview.png" alt="" className='w-[30px]' />
                </div>
                <button
                    onClick={() => signWithGoogleHandle()}
                    className="py-3 w-full bg-white border border-gray-300 rounded-full shadow-sm flex-grow px-4   font-semibold  outline-none pl-12 bg-none"
                >SignIn With Google</button>
            </div>
        </div>
    );
};

export default SocialLogin;