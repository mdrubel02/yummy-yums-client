import React from 'react';

const Chef = ({chef}) => {
    const {chef_picture,years_of_experience,chef_name,num_of_recipes,likes} = chef;
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
            <img src={image} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
            <h2 className="mb-1 text-xl font-semibold capitalize">{title}</h2>
            <p className=" dark:text-gray-400">
                {
                    description && description.slice(0,120)+"..."
                }           
            </p>
        </div>
        <div className="text-[17px] space-y-1 capitalize">
            <p><span className='font-semibold'>Location :</span> {location}</p>
            <p><span className='font-semibold'>Years Of Purchase :</span> {yearsOfPurchase}</p>
            <p><span className='font-semibold'>Condition :</span> {condition}</p>
            <p><span className='font-semibold'>Original Price :</span> ${originalPrice}</p>
            <p className='mt-2 font-semibold'>Resale Price <span className='text-red-600 font-semibold text-2xl'>${resalePrice}</span></p>
            <div className='flex justify-between items-center'>
                <label onClick={()=>{
                    setBookingModalData(product)
                    !user?.uid && toast.error('please login first then book product',{duration:1200})
                }} htmlFor={`booking-modal${_id}`} className="inline-flex items-center font-semibold px-6 py-2 bg-primary hover:bg-orange-600 text-white text-lg  cursor-pointer mt-7 ">
                <FaCartPlus className='mr-2'></FaCartPlus>
                    Book Now
                </label>
                <button onClick={productDetailsHandle}>
                <FaArrowRight className='text-primary mt-7 '></FaArrowRight>
                </button>
            </div>
            {
                bookingModalData && user?.uid && <BookingModal product={product} setBookingModalData={setBookingModalData}></BookingModal>
            }
        </div>
    </div>
    );
};

export default Chef;