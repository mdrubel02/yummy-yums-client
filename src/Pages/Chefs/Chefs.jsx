import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import Chef from './Chef';

const Chefs = () => {
    const [chefs, setChefs] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/chefs')
        .then(res => res.json())
        .then(data =>setChefs(data.chefs))
    },[])
    console.log(chefs);
    const content = {heads:"latest",title:'advertise'}
    return (
        <>
        {
         chefs.length>0 &&
         <section className='px-4 sm:px-10 lg:px-20 py-12 md:py-20 bg-[#0201010d]' >
         <div>
           <SectionTitle content={content}></SectionTitle>
         </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8' data-aos="fade-up">
            {
             chefs.map(chef=><Chef key={chef.id} chef={chef}></Chef>)
            }
         </div>
        </section> 
        }
        </>
    );
};

export default Chefs;