import React, { useContext, useEffect} from 'react';
import Banner from './Banner';

const Home = () => {
    
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