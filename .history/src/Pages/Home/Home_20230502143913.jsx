import React, { useContext, useEffect} from 'react';
import Banner from './Banner';
import Chefs from '../Chefs/Chefs';

const Home = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
        <Banner />
        <Chefs/>
        </>
    );
};

export default Home;