import React from 'react';

const categories = ({}) => {
    return (
        <div>
        <div className="w-full shadow-xl relative">
        <figure className='h-[350px]'><img src={image} alt="Shoes" className='brightness-75 object-cover w-full h-full hover:scale-[1.1] ease-in duration-200' /></figure>
        <div className="absolute bottom-10 left-10 ">
            <h2 className="text-white font-semibold capitalize text-2xl font-jost ">{categoryName}</h2>
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
    );
};

export default categories;