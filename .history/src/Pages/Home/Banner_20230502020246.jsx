import React from 'react';
import BannerItem from './BannerItem';

const Banner = () => {
    const bannerData = [
        {
            image:"https://i.ibb.co/gWk8BJd/rsz-5435031-01.jpg",
            prev: 3,
            id: 1,
            next: 2
        },
        {
            image: "https://ibb.co/mX6XfQP",
            prev: 1,
            id: 2,
            next: 3
        },
        {
            image: "https://i.ibb.co/5MWh0z2/r-architecture-TRCJ-87-Yoh0-unsplash.jpg",
            prev: 2,
            id: 3,
            next: 1
        }
    ]
    return (
        <div className="carousel w-full">
            {
                bannerData.map((banner,index)=><BannerItem key={index} banner={banner}></BannerItem>)
            }
        </div>
    );
};

export default Banner;