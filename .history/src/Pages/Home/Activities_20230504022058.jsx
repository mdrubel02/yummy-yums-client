import React from 'react';
import Categories from './categories';

const Activities = () => {
    // const categories = [
    //     {
    //         image: "https://i.ibb.co/5K4QVgq/jennifer-griffin-os-Nl3-g9-Vo-U-unsplash-1.jpg",
    //         categoryName: "nice food"
    //     },
    //     {
    //         image: "https://i.ibb.co/5K4QVgq/jennifer-griffin-os-Nl3-g9-Vo-U-unsplash-1.jpg",
    //         categoryName: "nice food"
    //     },
    //     {
    //         image: "https://i.ibb.co/5K4QVgq/jennifer-griffin-os-Nl3-g9-Vo-U-unsplash-1.jpg",
    //         categoryName: "nice food"
    //     },
    // ]
    return (
        <section className='px-4 sm:px-10 lg:px-20 py-32' style={{'backgroundImage': 'linear-gradient(90deg, #0201010d 40%, #BBCED5 0%)' }}>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5' data-aos="fade-right">
        <div>
            <div className="w-full shadow-xl relative">
                <figure className='h-[350px]'><img src='https://i.ibb.co/5K4QVgq/jennifer-griffin-os-Nl3-g9-Vo-U-unsplash-1.jpg"' alt="Shoes" className='brightness-75 object-cover w-full h-full hover:scale-[1.1] ease-in duration-200' /></figure>
                <div className="absolute bottom-10 left-10 ">
                    <h2 className="text-white font-semibold capitalize text-2xl font-jost ">nice food</h2>
                    <button
                        // to={`/products/${categoryName}`}
                        aria-label=""
                        className="block font-medium px-5 py-2 bg-[#BBCED5] hover:bg-[#819aa3] hover:text-white mt-4"
                    >
                        View Product
                    </button>
                </div>
            </div>
        </div>
       </div>
      </section>
    );
};

export default Activities;