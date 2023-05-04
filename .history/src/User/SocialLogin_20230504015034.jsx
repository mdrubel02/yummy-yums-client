import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProviders';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
const SocialLogin = () => {
    const { googleSignIn, githubSignIn } = useContext(AuthContext)
    const navigate=useNavigate()
    const signWithGoogleHandle = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
                toast.success('SignIn with Github successfully', { duration: 1200 })
                navigate('/home')
                console.log(user)
            })
            .then((error) => {
                console.log(error);
            })
    }
    const signWithGithubHandle = () => {
        githubSignIn()
            .then((result) => {
                const user = result.user;
                toast.success('SignIn with Github successfully', { duration: 1200 })
                navigate(from ? (from, { replace: true }) : '/')
                
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
                    onClick={() => signWithGithubHandle()}
                    className="py-3 w-full bg-white border border-gray-300 rounded-full shadow-sm flex-grow px-4   font-semibold  outline-none pl-12 bg-none"
                >SignIn With GitHub</button>
            </div>
        </div>
    );
};

export default SocialLogin;