import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefSingle = () => {
    const singleDetails = useLoaderData()
    console.log(singleDetails)
    const recipes = singleDetails.recipes;
    return (
        <section className='container mx-auto'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8' data-aos="fade-up">
                <div>
                    <figure><img src={singleDetails.chef_picture} className='object-cover w-full h-96 col-span-2 rounded shadow-lg' alt="Movie" /></figure>
                </div>
                <div style={{ 'backgroundImage': 'linear-gradient(90deg, #0201010d 40%, #BBCED5 80%)' }}>
                    <div className="card-body">
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Watch</button>
                        </div>
                        <h2 className="card-title">{singleDetails.chef_name}</h2>
                        <p><span className=''>Description:</span> {singleDetails.bio}</p>
                        <p><span className='font-semibold'>Recipes :</span> {singleDetails.num_of_recipes}</p>
                        <p><span className='font-semibold'>Experience :</span> {singleDetails.years_of_experience} Years</p>
                        <p className='mt-2 font-semibold'>Likes <span className='text-red-600 font-semibold text-2xl'>{singleDetails.likes}</span></p>
                    </div>
                </div>
            </div>
            <div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Name</th>
                                <th>Ingredients</th>
                                <th>Method</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                recipes.map(recipe => <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="w-24 rounded-full">
                                                    <img src={singleDetails?.chef_picture}/>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{recipe?.name}</div>
                                                <div className="text-sm opacity-50">Recipes: {singleDetails?.num_of_recipes}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        Zemlak, Daniel and Leannon
                                        <br />
                                        <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                    </td>
                                    <td>Purple</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">details</button>
                                    </th>
                                </tr>)
                            }


                            {/* foot */}
                            <tfoot>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Job</th>
                                    <th>Favorite Color</th>
                                    <th></th>
                                </tr>
                            </tfoot>

                        </tbody>


                    </table>
                </div>
            </div>
        </section>
    );
};

export default ChefSingle;