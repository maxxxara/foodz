import React from 'react'
import prod1 from '../../images/items/1.png';
import prod2 from '../../images/items/2.png';
import prod3 from '../../images/items/3.png';
import { FiMinus, FiPlus } from 'react-icons/fi';
const OrderItem = () => {
  return (
    <div className='border border-gray6 flex px-4 py-5 rounded-xl'>
        <div className='flex'>
            <img src={prod1} className='w-20 h-20'/>
            <div>
                <h4 className='font-alice text-xl'>Gimbap</h4>
                <p className='font-alice text-md -mt-1 text-green'>$21.99</p>
                <div className='mt-6 flex space-x-4'>
                    <div className=' border border-gray6 p-1'>
                        <FiMinus className='w-3 h-3 text-black'/>
                    </div>
                    <p className='border border-gray6 px-5 text-sm'>1</p>
                    <div className=' border border-gray6 p-1'>
                        <FiPlus className='w-3 h-3 text-black'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OrderItem