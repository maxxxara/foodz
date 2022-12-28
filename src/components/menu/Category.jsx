import React from 'react'
import { useState } from 'react';
import cat1 from '../../images/category.png'

const Category = ({handleCategory}) => {
    const [active, setActive] = useState(1);
  return (
    <div className='w-full flex  justify-center mt-8'>
        <div className='flex gap-4 flex-col py-4 px-3 bg-white sm:flex-row shadow-md rounded-lg w-fit'>
            <div 
              onClick={() => {setActive(1); handleCategory(1)}}
              className={`flex items-center cursor-pointer px-3 py-2 rounded-lg ${active == 1 && 'bg-[#43CB48]'}`}>
                <img src={cat1} />
                <p className={`text-sm text-black tracking-wider ml-2 ${active == 1 && 'text-white'}`}>Chine Food</p>
            </div>
            <div 
              onClick={() => {setActive(2); handleCategory(2)}}
              className={`flex items-center cursor-pointer px-3 py-2 rounded-lg ${active == 2 && 'bg-[#43CB48]'}`}>
                <img src={cat1} />
                <p className={`text-sm text-black tracking-wider ml-2 ${active == 2 && 'text-white'}`}>Korean Food</p>
            </div>
            <div 
              onClick={() => {setActive(3); handleCategory(3)}}
              className={`flex items-center cursor-pointer px-3 py-2 rounded-lg ${active == 3 && 'bg-[#43CB48]'}`}>
                <img src={cat1} />
                <p className={`text-sm text-black tracking-wider ml-2 ${active == 3 && 'text-white'}`}>Vietnam Food</p>
            </div>
        </div>
    </div>
  )
}

export default Category