import React from 'react';

const Home = () => {
    return (
        <div>
            <div className='w-96 p-7'>
                <h2 className="text-4xl">Add A Doctor</h2>
                <form >
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text"  className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email" className="input input-bordered w-full max-w-xs" />
                       
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Specialty</span></label>
                        <select
                            className="select input-bordered w-full max-w-xs">
                          </select>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Photo</span></label>
                        <input type="file"  className="input input-bordered w-full max-w-xs" />
                       
                    </div>
                    <input className='btn btn-accent w-full mt-4' value="Add Doctor" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Home;