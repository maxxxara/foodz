import React from 'react'

const OrderPrices = () => {
  return (
    <div className='mt-5'>
        <h4 className='font-medium text-black text-xl'>Price</h4>
        <div className='flex justify-between mt-3'>
            <ul className='text-sm text-gray4 space-y-3'>
                <li>Gimbap</li>
                <li>Yangnyeom Chicken</li>
                <li>Beef noodle soup </li>
            </ul>
            <ul className='text-sm text-black space-y-3'>
                <li>$21.00</li>
                <li>$10.00</li>
                <li>$39.00</li>
            </ul>
        </div>
        <div className='mt-3 flex justify-between text-xs font-medium bg-gray7 p-2'>
            <p>Total(USD)</p>
            <p>$90.00</p>
        </div>
    </div>
  )
}

export default OrderPrices