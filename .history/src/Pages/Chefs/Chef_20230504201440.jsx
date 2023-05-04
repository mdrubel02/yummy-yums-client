import React from 'react';
import { Link } from 'react-router-dom';
import PrivateRoute from '../../Layout/PrivateRoute';

const Chef = ({ chef }) => {
    const { chef_picture, years_of_experience, chef_name, num_of_recipes, likes,id } = chef;
    return (
        <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md font-jost bg-white">
            <div className="flex space-x-4 justify-between">
                <div className="flex flex-col space-y-1">
                    {/* <div className='flex items-center'>
                
                    <img src="https://i.ibb.co/D8SPXJg/verified-2.png" alt="" className='w-4 h-4 ml-2' />
                
                </div> */}
                </div>
            </div>
            <div>
                <img src={chef_picture} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
                <h2 className="mb-1 text-xl font-semibold capitalize">{chef_name}</h2>
                {/* <p className=" dark:text-gray-400">
                {
                    description && description.slice(0,120)+"..."
                }           
            </p> */}
            </div>
            <div className="text-[17px] space-y-1 capitalize">
                <p><span className='font-semibold'>Recipes :</span> {num_of_recipes}</p>
                <p><span className='font-semibold'>Experience :</span> {years_of_experience} Years</p>
                <p className='mt-2 font-semibold'>Likes <span className='text-red-600 font-semibold text-2xl'>{likes}</span></p>
                <div className='flex justify-between items-center'>
                    <PrivateRoute>
                    <Link 
                    to={`/chefSingle/${id}`}
                    >
                        <button className="inline-flex items-center font-semibold px-6 py-2 bg-primary hover:bg-orange-600 text-white text-lg  cursor-pointer mt-7 ">
                            View Recipes
                        </button>
                    </Link>
                    </PrivateRoute>
                </div>
            </div>
        </div>
    );
};

export default Chef;