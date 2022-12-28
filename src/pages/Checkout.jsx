import React, { useState } from 'react'
import { FiCheck } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Form from '../components/Checkout/Form';

import OrderItem from '../components/Checkout/OrderItem';
import OrderPrices from '../components/Checkout/OrderPrices';
const Checkout = () => {
    const [accept, setAccept] = useState(false);
    const handleForm = () => {
        document.body.style.overflowY = 'hidden';
        window.scrollTo({top: 0, behavior: 'smooth'});
        setAccept(true)
    }
  return (
    <div className='container pt-10'>
        <div className='flex justify-between flex-col lg:flex-row'>
            <div className='w-full'>
                <Form handleForm={handleForm}/>
            </div>
            <div className='w-full mt-10 lg:mt-0 lg:pl-40'>
                <div className='bg-white shadow-lg rounded-xl py-6 px-5 border border-gray6'>
                    <h1 className='font-alice text-2xl text-black'>Summary</h1>
                    <div className='mt-4 space-y-4'>
                        <OrderItem />
                        <OrderItem />
                        <OrderItem />
                    </div>
                    <OrderPrices />
                </div>
            </div>
            <div className={`justify-center items-center flex-col ${accept ? "accept" : "hidden"} `}>
                <h1 className='text-3xl font-bold text-white'>Order Placed Successfully</h1>
                <FiCheck className='w-16 h-16 bg-white text-green rounded-full p-3 mt-5'/>
                <Link to="/" className='text-white mt-3 text-xs'>Go Back</Link>
            </div>
        </div>
    </div>
  )
}

export default Checkout