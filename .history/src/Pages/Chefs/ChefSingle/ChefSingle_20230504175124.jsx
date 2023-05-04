import React from 'react';

const ChefSingle = () => {
    return (
        <section className='container mx-auto'>
            <div className="card card-side bg-base-100 shadow-xl">
                
               
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8' data-aos="fade-up">
                <div>
                <figure><img src="https://i.ibb.co/5K4QVgq/jennifer-griffin-os-Nl3-g9-Vo-U-unsplash-1.jpg" className='object-cover w-full h-[400] col-span-2 rounded shadow-lg' alt="Movie" /></figure>
                </div>
                <div style={{'backgroundImage': 'linear-gradient(90deg, #0201010d 40%, #BBCED5 40%)' }}>
                <div className="card-body">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
};

export default ChefSingle;