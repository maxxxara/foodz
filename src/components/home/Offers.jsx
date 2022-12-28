import React from 'react'
import OfferItem from './OfferItem';
import Item from './../utils/Item';
import products from '../../products.json';
import { useState } from 'react';
import { useEffect } from 'react';
const Offers = () => {
  const [data, setData] = useState(products.products.filter(item => item.id == 1 || item.id==2 || item.id == 3));
  useEffect(() => {
    console.log(data)
  }, [data])
  return (
    <div className='container pt-20 pb-20'>
        <div className='flex flex-col items-center'>
            <h4 className='font-alice text-4xl text-center text-black tracking-wider'>Today <span className='text-green font-alice'>Special</span> Offers</h4>
            <p className='text-gray4 text-sm text-center w-full lg:w-[560px] mt-4'>Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes.</p>
        </div>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8'>
          {data.map(product => (
            <Item key={product.id} product={product}/>
          ))}
        </div>
    </div>
  )
}

export default Offers