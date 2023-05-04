import React, { useContext, useEffect} from 'react';
import Banner from './Banner';
import Chefs from '../Chefs/Chefs';
import Activities from './Activities';
import About from '../About/About';

const Home = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
        <Banner />
        <Chefs/>
        <Activities/>
        <About />
        </>
    );
};

export default Home;