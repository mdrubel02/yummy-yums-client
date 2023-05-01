import React, { useEffect} from 'react';
import Banner from './Banner';


const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
        <Banner />
        </>
    );
};

export default Home;