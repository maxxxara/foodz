import React from 'react'
import {FiCloudRain, FiCoffee, FiGrid, FiMapPin, FiMessageSquare} from 'react-icons/fi';
const Services = () => {
  return (
    <div className='pt-28 container'>
        <h1 className='font-alice text-4xl text-center'>How we keep your <br /> meal <span className='font-alice text-green'>Delicious</span></h1>
        <div className='grid grid-cols-1 mt-10 gap-10 md:grid-cols-3'>
            <div className='bg-white shadow-lg rounded-xl flex flex-col h-[300px] px-4 justify-center items-center pt-10 pb-7'>
                <div className='w-20 h-20 p-6 shadow-lg text-gray4 bg-white rounded-full flex justify-center items-center'>
                    <FiCoffee className='w-full h-full' />
                </div>
                <h4 className='font-alice text-2xl mt-5 md:text-xl lg:text-2xl text-center'>Prepair your Meal</h4>
                <p className='text-md text-center mt-2 md:text-xs lg:text-md'>That help us know what delicious meal you will try, but I don’t write anything</p>
            </div>
            <div className='bg-white shadow-lg rounded-xl flex flex-col h-[300px] px-4 justify-center items-center pt-10 pb-7'>
                <div className='w-20 h-20 p-6 shadow-lg text-gray4 bg-white rounded-full flex justify-center items-center'>
                    <FiGrid className='w-full h-full' />
                </div>
                <h4 className='font-alice text-2xl mt-5 md:text-xl lg:text-2xl text-center'>Prepair your Meal</h4>
                <p className='text-md text-center mt-2 md:text-xs lg:text-md'>That help us know what delicious meal you will try, but I don’t write anything</p>
            </div>
            <div className='bg-white shadow-lg rounded-xl flex flex-col h-[300px] px-4 justify-center items-center pt-10 pb-7'>
                <div className='w-20 h-20 p-6 shadow-lg text-gray4 bg-white rounded-full flex justify-center items-center'>
                    <FiMessageSquare className='w-full h-full' />
                </div>
                <h4 className='font-alice text-2xl mt-5 md:text-xl lg:text-2xl text-center'>Prepair your Meal</h4>
                <p className='text-md text-center mt-2 md:text-xs lg:text-md'>That help us know what delicious meal you will try, but I don’t write anything</p>
            </div>
        </div>
    </div>
  )
}

export default Services