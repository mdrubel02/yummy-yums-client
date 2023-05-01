import React from 'react';

const Home = () => {
    return (
        <div className='w-96 p-7'>
            <h1 className="text-4xl">hello</h1>
            <form>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Name</span></label>
                    <input type="text" placeholder="Type Here" className="input input-bordered w-fu
          max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Name</span></label>
                    <input type="text" placeholder="Type Here" className="input input-bordered w-fu
          max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Name</span></label>
                    <input type="text" placeholder="Type Here" className="input input-bordered w-fu
          max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Name</span></label>
                    <input type="text" placeholder="Type Here" className="input input-bordered w-fu
          max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Name</span></label>
                    <input type="text" placeholder="Type Here" className="input input-bordered w-fu
          max-w-xs" />
                </div>
                <input className='btn btn-accent w-full mt-4' value="Add Doctor" type="submit" />
            </form>
        </div>
    );
};

export default Home;