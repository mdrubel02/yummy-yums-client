import React from 'react';

const ChefSingle = () => {
    return (
        <section className='container'>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src="https://i.ibb.co/5K4QVgq/jennifer-griffin-os-Nl3-g9-Vo-U-unsplash-1.jpg" className='object-cover w-full h-full col-span-2 rounded shadow-lg' alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChefSingle;