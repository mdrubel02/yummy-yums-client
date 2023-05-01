import React from 'react';
import BannerItem from './BannerItem';
import banner02 from '../../assets/banner/rsz_food-recipes-banner02-01.jpg'

const Banner = () => {
    const bannerData = [
        {
            image:"https://i.ibb.co/gWk8BJd/rsz-5435031-01.jpg",
            prev: 3,
            id: 1,
            next: 2
        },
        {
            image: banner02,
            prev: 1,
            id: 2,
            next: 3
        },
        {
            image: "https://i.ibb.co/gWk8BJd/rsz-5435031-01.jpg",
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