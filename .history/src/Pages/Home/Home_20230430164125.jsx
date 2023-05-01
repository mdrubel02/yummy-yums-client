import React, { useContext, useEffect} from 'react';
import Banner from './Banner';
import { AuthContext } from '../../Context/AuthProviders';


const Home = () => {
    const {user} = useContext(AuthContext)
    console.log(user.name)
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
        <Banner />
        {/* {user.name} */}
        </>
    );
};

export default Home;