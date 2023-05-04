import React from 'react';
import Categories from './categories';

const Activities = () => {
    const categories = [
        {
            image: "https://i.ibb.co/5K4QVgq/jennifer-griffin-os-Nl3-g9-Vo-U-unsplash-1.jpg",
            categoryName: "nice food"
        },
        {
            image: "https://i.ibb.co/5K4QVgq/jennifer-griffin-os-Nl3-g9-Vo-U-unsplash-1.jpg",
            categoryName: "nice food"
        },
        {
            image: "https://i.ibb.co/5K4QVgq/jennifer-griffin-os-Nl3-g9-Vo-U-unsplash-1.jpg",
            categoryName: "nice food"
        },
    ]
    return (
        <section className='px-4 sm:px-10 lg:px-20 py-32' style={{'backgroundImage': 'linear-gradient(90deg, #0201010d 40%, #BBCED5 0%)' }}>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5' data-aos="fade-right">
          {
           categories.map(category=><Categories  category={category}></Categories>)
          }
       </div>
      </section>
    );
};

export default Activities;