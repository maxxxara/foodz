import React from 'react'
import { useState } from 'react';
import Category from '../components/menu/Category'
import Item from '../components/utils/Item'
import cat1 from '../images/category.png'
import products from '../products.json';
const Menu = () => {
  const [data, setData] = useState(products.products.filter(item => item.category == 1));
  const handleCategory = (c_id) => {
    setData(products.products.filter(item => item.category == c_id))
  }
  return (
    <div className='container'>
        <div className='flex flex-col items-center'>
            <h4 className='font-alice text-4xl text-center text-black tracking-wider'>Get <span className='text-green font-alice'>Special</span> Meal</h4>
            <p className='text-gray4 text-sm text-center w-full lg:w-[560px] mt-4'>Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes.</p>
        </div>
        <Category handleCategory={handleCategory}/>
        <div className='mt-10 grid grid-cols-1 gap-6 gap-y-16 md:grid-cols-2 lg:grid-cols-3'>
          {data.map(product => (
            <Item key={product.id} product={product}/>
          ))}
        </div>
    </div>
  )
}

export default Menu