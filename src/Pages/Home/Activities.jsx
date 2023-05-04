import React, { useEffect, useState } from 'react';
import Categories from './categories';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

const Activities = () => {
const [categories, setCategories] = useState([]);

useEffect(()=>{
    fetch('http://localhost:5000/categories')
    .then(res => res.json())
    .then(data => setCategories(data))
},[])
const content = {heads:"latest",title:'Gallary'}
    return (
        <section className='px-4 sm:px-10 lg:px-20 py-32' style={{'backgroundImage': 'linear-gradient(90deg, #0201010d 40%, #BBCED5 0%)' }}>
              <div>
           <SectionTitle content={content}></SectionTitle>
         </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5' data-aos="fade-right">
          {
           categories.map(category=><Categories key={category.id} category={category}></Categories>)
          }
       </div>
      </section>
    );
};

export default Activities;