import React from 'react';

const Home = () => {
    return (
        <div className='w-96 p-7'>

            <h2 className="text-4xl">Add A Doctor</h2>
            <form >
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Name</span></label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <input className='btn btn-accent w-full mt-4' value="Add Doctor" type="submit" />
            </form>

        </div>
    );
};

export default Home;