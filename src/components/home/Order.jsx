import React from 'react'
import img from '../../images/homeorder.png';
import { Link } from 'react-router-dom';
import { FiMap, FiPlus, FiMapPin, FiChevronDown } from 'react-icons/fi';

const Order = () => {
  return (
    <div className='container pt-20'>
        <div className='flex flex-col items-center'>
            <h4 className='font-alice text-4xl text-center text-black tracking-wider'>Get The Best Taste <span className='text-green font-alice'>Now!</span></h4>
            <p className='text-gray4 text-sm text-center w-full lg:w-[560px] mt-4'>Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes.</p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-10 mt-8 lg:items-center mt-20'>
            <div>
                <h4 className='text-md text-dark'>What's Your Taste?</h4>
                <p className='text-sm text-gray3 mt-1'>Fill the form and let us know your taste.</p>
                <div className='mt-6 space-y-4'>
                    <div>
                        <div className='flex justify-between items-center'>
                            <p className='text-sm'>Select your Meal</p>
                            <Link className='text-xs text-green'>View menu</Link>
                        </div>
                        <input type="text" className='mt-2 py-3 px-6 border rounded-lg w-full border-gray4' placeholder="What's your Taste?" />
                        <p className='flex items-center text-green mt-2'>Add Taste <FiPlus className='ml-1'/></p>
                    </div>
                    <div className='flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4'>
                        <div>
                            <p className='text-sm'>Order name</p>
                            <input type="text" className='mt-2 py-3 px-6 border rounded-lg w-full border-gray4' placeholder="Order name..." />
                        </div>
                        <div>
                            <p className='text-sm'>Phone number</p>
                            <input type="text" className='mt-2 py-3 px-6 border rounded-lg w-full border-gray4' placeholder="(+995) 557 000 000" />
                        </div>
                    </div>
                    <div>
                        <p className='text-sm'>Your Address</p>
                        <div className='relative'>
                            <input type="text" className='mt-2 py-3 px-6 border rounded-lg w-full border-gray4' placeholder="17 Acb Street" />
                            <FiMapPin className='text-gray4 absolute right-3 top-1/2 transform -translate-y-[30%]'/>
                        </div>
                    </div>
                    <div>
                        <p className='text-sm'>Payment Method</p>
                        <div className='relative'>
                            <input type="text" className='mt-2 py-3 px-6 border rounded-lg w-full border-gray4' placeholder="I'll pay with cash" />
                            <FiChevronDown className='text-gray4 absolute right-3 top-1/2 transform -translate-y-[28%]'/>
                        </div>
                    </div>
                    <div className='pb-4'>
                        <p className='text-sm'>Note for us</p>
                        <input type="text" className='mt-2  px-6 pb-28 pt-4 border rounded-lg w-full border-gray4' placeholder="More spicy, more sauce, ..." />
                    </div>
                    <button className='w-full py-3 rounded-xl text-white text-sm bg-green'>ORDER NOW</button>
                </div>
            </div>
            <div className='hidden lg:flex lg:justify-end'>
                <img src={img} className='w-[500px] h-[400px]'/>
            </div>
        </div>
    </div>
  )
}

export default Order