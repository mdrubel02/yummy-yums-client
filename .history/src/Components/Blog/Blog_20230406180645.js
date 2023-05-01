import React from 'react';

const Blog = () => {
    return (
        <div>
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
        </div>
    );
};

export default Blog;