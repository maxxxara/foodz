import React from 'react'
import { useState, useEffect } from 'react';
import { FiChevronLeft, FiStar } from 'react-icons/fi'
import { Link, useParams } from 'react-router-dom'
import prod1 from '../images/items/4.png';
import products from '../products.json';
const Single = () => {
    const {p_id} = useParams();
    const [data, setData] = useState(products.products.filter(item => item.id == p_id)[0])
  return (
    <>
    <Link to={"/menu"}>
        <button className='hidden lg:flex items-center border border-gray6 font-medium px-4 py-2 mx-20 mt-6 rounded-lg pr-5'><FiChevronLeft className='mr-4'/> Go Back</button>
    </Link>
    <div className='lg:flex lg:gap-x-12 lg:pr-10 lg:mt-6'>
        <div className='bg-gray7 w-full h-[420px] lg:h-[600px] lg:w-1/2 flex items-center justify-center'>
            <img src={require(`../products/${data.image}`)} className='w/2/3 h-2/3'/>
        </div>
        <div className='px-5 mt-5 lg:w-1/2'>
            <p className='text-sm text-gray3'>Best seller</p>
            <h4 className='text-3xl text-black font-alice mb-3'>{data.title}</h4>
            <h3 className='text-green text-4xl font-alice'>${data.price}</h3>
            <div className='flex gap-x-2 mt-6'>
                <FiStar className='fill-green stroke-green'/>
                <FiStar className='fill-green stroke-green'/>
                <FiStar className='fill-green stroke-green'/>
                <FiStar className='fill-green stroke-green'/>
                <FiStar className='fill-green stroke-green'/>
                <span className='text-sm font-bold text-black'>{data.reviews} Reviews</span>
            </div>
            <p className='mt-8 text-gray3 text-md pb-1'>Description: <br /></p>
            <p className='-mt-4 text-gray4 border-t border-gray6 pt-6'>{data.description}</p>
            <p className='text-gray3 mt-6'>Adjust the flavor:</p>
            <div className='flex justify-between sm:justify-start sm:gap-x-20 px-10 mt-3'>
                <ul className='list-disc grid grid-cols-2 gap-x-16 gap-y-2 text-gray4 text-sm'>
                    {data.flavor.map(item => (<li>{item}</li>))}
                </ul>
            </div>
            <div className='flex flex-col mt-6'>
                <label>Note:</label>
                <input type="text" className='mt-2 px-4 pt-3 pb-20 rounded-xl border border-gray4' placeholder='More spicy, more sauce, ...'/>
            </div>
            <Link to={"/checkout"}>
                <button className='bg-green text-white text-sm py-3 w-full mt-6 rounded-xl'>ORDER NOW</button>
            </Link>
        </div>
    </div>
    </>
  )
}

export default Single