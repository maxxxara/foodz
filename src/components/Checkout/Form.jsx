import React from 'react'
import { FiMapPin, FiChevronDown } from 'react-icons/fi';

const Form = ({handleForm}) => {
  return (
    <>
    <h4 className='font-alice text-4xl text-black tracking-wider'>Confirm And Pay</h4>
        <p className='text-gray4 text-lg w-full mt-4 mb-6'>Horayy! This is last steps before<br /> enjoying your meal.</p>
        <div className='flex flex-col space-y-4'>
            <div className=''>
                <p className='text-sm'>Order name</p>
                <input type="text" className='mt-2 py-3 px-6 border rounded-lg w-full border-gray4' placeholder="Order name..." />
            </div>
            <div className=''>
                <p className='text-sm'>Phone number</p>
                <input type="text" className='mt-2 py-3 px-6 border rounded-lg w-full border-gray4' placeholder="(+995) 557 000 000" />
            </div>
        </div>
        <div className='mt-4'>
            <p className='text-sm'>Your Address</p>
            <div className='relative'>
                <input type="text" className='mt-2 py-3 px-6 border rounded-lg w-full border-gray4' placeholder="17 Acb Street" />
                <FiMapPin className='text-gray4 absolute right-3 top-1/2 transform -translate-y-[30%]'/>
            </div>
        </div>
        <div className='mt-4'>
            <p className='text-sm'>Payment Method</p>
            <div className='relative'>
                <input type="text" className='mt-2 py-3 px-6 border rounded-lg w-full border-gray4' placeholder="I'll pay with cash" />
                <FiChevronDown className='text-gray4 absolute right-3 top-1/2 transform -translate-y-[28%]'/>
            </div>
        </div>
        <div className='mt-4 pb-4'>
            <p className='text-sm'>Note for us</p>
            <input type="text" className='mt-2  px-6 pb-28 pt-4 border rounded-lg w-full border-gray4' placeholder="More spicy, more sauce, ..." />
        </div>
        <button onClick={handleForm} className='w-36 py-3 rounded-xl text-white text-sm bg-green'>ORDER NOW</button>
    </>
  )
}

export default Form